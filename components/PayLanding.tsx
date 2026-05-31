'use client';

import { Suspense, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.boldwallet';
const APP_STORE_URL =
  'https://apps.apple.com/us/app/bold-bitcoin-wallet/id6748949478';

function truncateMiddle(value: string, head = 12, tail = 8): string {
  if (value.length <= head + tail + 3) {
    return value;
  }
  return `${value.slice(0, head)}…${value.slice(-tail)}`;
}

function PayLandingContent() {
  const searchParams = useSearchParams();

  const address = (searchParams.get('address') || searchParams.get('bitcoin') || '')
    .trim();
  const amount = searchParams.get('amount')?.trim() || '';
  const label = searchParams.get('label')?.trim() || '';

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

  useEffect(() => {
    if (!address || typeof window === 'undefined') {
      return;
    }
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) {
      return;
    }
    window.location.href = payUrl;
  }, [address, payUrl]);

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
            ? 'This link sends a payment request to Bold Wallet. On mobile, the app should open automatically if installed.'
            : 'Share a payment link with an address (and optional amount) to open Bold Wallet.'}
        </p>

        {address ? (
          <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-5 space-y-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400">
                Address
              </p>
              <p className="mt-1 break-all font-mono text-sm text-gray-100">
                {truncateMiddle(address, 16, 16)}
              </p>
            </div>
            {amount ? (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-400">
                  Amount (BTC)
                </p>
                <p className="mt-1 text-lg font-semibold text-white">{amount}</p>
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

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {address ? (
            <a
              href={payUrl}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-gray-900 transition hover:opacity-90"
            >
              Open Bold Wallet
            </a>
          ) : null}
          {bitcoinUri ? (
            <a
              href={bitcoinUri}
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Open via bitcoin: URI
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
