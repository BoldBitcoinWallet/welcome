'use client';

import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  fetchBtcUsdRate,
  formatUsd,
  parseBtcAmount,
} from '@/lib/btcUsdPrice';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.boldwallet';
const APP_STORE_URL =
  'https://apps.apple.com/us/app/bold-bitcoin-wallet/id6748949478';

function PayLandingContent() {
  const searchParams = useSearchParams();

  const address = (searchParams.get('address') || searchParams.get('bitcoin') || '')
    .trim();
  const amount = searchParams.get('amount')?.trim() || '';
  const label = searchParams.get('label')?.trim() || '';

  const [usdRate, setUsdRate] = useState<number | null>(null);
  const [usdRateFailed, setUsdRateFailed] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle');

  const btcAmount = useMemo(() => parseBtcAmount(amount), [amount]);

  const payUrl = useMemo(() => {
    const params = new URLSearchParams();
    if (address) {
      params.set('address', address);
    }
    if (amount) {
      params.set('amount', amount);
    }
    if (label) {
      params.set('label', label);
    }
    const query = params.toString();
    return query
      ? `https://boldbitcoinwallet.com/pay?${query}`
      : 'https://boldbitcoinwallet.com/pay';
  }, [address, amount, label]);

  const bitcoinUri = useMemo(() => {
    if (!address) {
      return '';
    }
    const params = new URLSearchParams();
    if (amount) {
      params.set('amount', amount);
    }
    if (label) {
      params.set('label', label);
    }
    const query = params.toString();
    return query ? `bitcoin:${address}?${query}` : `bitcoin:${address}`;
  }, [address, amount, label]);

  const usdEquivalent = useMemo(() => {
    if (btcAmount == null || usdRate == null) {
      return null;
    }
    return btcAmount * usdRate;
  }, [btcAmount, usdRate]);

  const copyPayLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(payUrl);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      setCopyState('failed');
      window.setTimeout(() => setCopyState('idle'), 2000);
    }
  }, [payUrl]);

  useEffect(() => {
    if (btcAmount == null) {
      return;
    }
    let cancelled = false;
    setUsdRateFailed(false);
    fetchBtcUsdRate().then(rate => {
      if (cancelled) {
        return;
      }
      if (rate == null) {
        setUsdRateFailed(true);
        setUsdRate(null);
      } else {
        setUsdRate(rate);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [btcAmount]);

  // One-shot mobile handoff via bitcoin: only (HTTPS payUrl reloads when already on /pay).
  useEffect(() => {
    if (!bitcoinUri || typeof window === 'undefined') {
      return;
    }
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      return;
    }
    const attemptKey = `boldwallet_pay_auto:${bitcoinUri}`;
    if (sessionStorage.getItem(attemptKey)) {
      return;
    }
    sessionStorage.setItem(attemptKey, '1');
    window.location.href = bitcoinUri;
  }, [bitcoinUri]);

  return (
    <section className="relative min-h-[70vh] bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-2xl px-4 py-16 sm:py-24">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
          Bitcoin payment
        </p>
        <h1 className="mb-4 text-3xl font-bold sm:text-4xl">
          Open in Bold Wallet
        </h1>
        <p className="mb-8 text-gray-300 leading-relaxed">
          {address
            ? 'Tap the button below to open this payment in Bold Wallet. Share the https link from Messages or email for automatic app open when Bold Wallet is installed.'
            : 'Share a payment link with an address (and optional amount) to open Bold Wallet.'}
        </p>

        {address ? (
          <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-5 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Address
              </p>
              <p className="mt-1 break-all font-mono text-sm leading-relaxed text-gray-100 select-all">
                {address}
              </p>
            </div>
            {amount ? (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Amount
                </p>
                <p className="mt-1 text-lg font-semibold text-white">
                  {amount} BTC
                </p>
                {btcAmount != null && usdEquivalent != null ? (
                  <p className="mt-1 text-sm text-gray-300">
                    ≈ {formatUsd(usdEquivalent)} USD
                  </p>
                ) : btcAmount != null && !usdRateFailed ? (
                  <p className="mt-1 text-sm text-gray-500">Loading USD rate…</p>
                ) : null}
              </div>
            ) : null}
            {label ? (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Label
                </p>
                <p className="mt-1 text-gray-100">{label}</p>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-amber-100">
            Missing <code className="font-mono">address</code> query parameter.
            Example:{' '}
            <code className="font-mono text-sm break-all">
              /pay?address=bc1q…&amp;amount=0.001
            </code>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {address && bitcoinUri ? (
            <a
              href={bitcoinUri}
              className="pay-landing-cta flex w-full items-center justify-center gap-3 rounded-xl bg-secondary px-6 py-4 text-base font-semibold text-white shadow-lg ring-1 ring-white/10 transition hover:opacity-95 active:scale-[0.99]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9 shrink-0 rounded-lg bg-white/90 p-0.5"
              />
              <span>Open in Bold Wallet</span>
            </a>
          ) : null}
          {address ? (
            <button
              type="button"
              onClick={() => void copyPayLink()}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10"
            >
              {copyState === 'copied'
                ? 'Payment link copied'
                : copyState === 'failed'
                  ? 'Could not copy — long-press to copy'
                  : 'Copy https payment link to share'}
            </button>
          ) : null}
          {bitcoinUri ? (
            <a
              href={bitcoinUri}
              className="w-full rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
              Open with another Bitcoin wallet
              <span className="ml-1 font-mono text-xs text-gray-400">(bitcoin:)</span>
            </a>
          ) : null}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/10 px-6 py-3 font-medium text-gray-300 transition hover:text-white"
          >
            Back to home
          </Link>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-black/20 p-5">
          <p className="mb-3 text-sm font-semibold text-gray-200">
            Don&apos;t have Bold Wallet yet?
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
            >
              Get it on Google Play
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15"
            >
              Download on the App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function PayLanding() {
  return (
    <Suspense
      fallback={
        <section className="min-h-[50vh] bg-gray-900 px-4 py-24 text-center text-gray-300">
          Loading payment link…
        </section>
      }
    >
      <PayLandingContent />
    </Suspense>
  );
}
