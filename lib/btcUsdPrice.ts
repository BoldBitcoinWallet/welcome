const MEMPOOL_PRICES_URL = 'https://mempool.space/api/v1/prices';

export async function fetchBtcUsdRate(): Promise<number | null> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(MEMPOOL_PRICES_URL, {
      signal: controller.signal,
      cache: 'no-store',
    });
    if (!res.ok) {
      return null;
    }
    const data = (await res.json()) as {USD?: number};
    const usd = data?.USD;
    if (typeof usd !== 'number' || !Number.isFinite(usd) || usd <= 0) {
      return null;
    }
    return usd;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}

export function parseBtcAmount(amount: string): number | null {
  const trimmed = amount.trim();
  if (!trimmed) {
    return null;
  }
  const btc = Number.parseFloat(trimmed);
  if (!Number.isFinite(btc) || btc < 0) {
    return null;
  }
  return btc;
}

export function formatUsd(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}
