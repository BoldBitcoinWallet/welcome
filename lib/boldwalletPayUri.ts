/** Matches BoldWallet `buildBoldwalletPayUri` / `parseBoldwalletUri` for web handoff. */
export function buildBoldwalletPayUri(
  address: string,
  amountBtc?: string,
  label?: string,
): string {
  const params = new URLSearchParams();
  params.set('address', address.trim());
  if (amountBtc?.trim()) {
    params.set('amount', amountBtc.trim());
  }
  if (label?.trim()) {
    params.set('label', label.trim());
  }
  return `boldwallet://pay?${params.toString()}`;
}
