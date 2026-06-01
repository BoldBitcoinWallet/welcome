'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
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

  // One-shot mobile handoff. Never set window.location to payUrl — same URL reloads forever.
  useEffect(() => {
    if (!address || typeof window === 'undefined') {
      return;
    }
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      return;
    }
    const attemptKey = `boldwallet_pay_auto:${payUrl}`;
    if (sessionStorage.getItem(attemptKey)) {
      return;
    }
    sessionStorage.setItem(attemptKey, '1');

    const link = document.createElement('a');
    link.href = payUrl;
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (!bitcoinUri) {
      return;
    }
    const fallbackMs = 1200;
    const timer = window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        window.location.href = bitcoinUri;
      }
    }, fallbackMs);
    return () => window.clearTimeout(timer);
  }, [address, payUrl, bitcoinUri]);

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
            ? 'If Bold Wallet is installed, the original pay link should open the app from Messages or email. If you see this page, use the button below or the bitcoin: link for other wallets.'
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

        <div className="flex flex-col gap-4">
          {address ? (
            <a
              href={payUrl}
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3.5 font-semibold text-gray-900 transition hover:opacity-90"
            >
              <Image
                src="/logo.png"
                alt=""
                width={32}
                height={32}
                className="rounded-lg shrink-0"
                aria-hidden
              />
              <span>Open in Bold Wallet</span>
            </a>
          ) : null}
          {bitcoinUri ? (
            <a
              href={bitcoinUri}
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 transition hover:bg-white/10 hover:text-white"
            >
              Open with another Bitcoin wallet
              <span className="ml-1 font-mono text-xs text-gray-400">(bitcoin:)</span>
            </a>
          ) : null}
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 font-medium text-gray-300 transition hover:text-white"
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
