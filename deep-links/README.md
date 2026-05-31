# Deep link files on boldbitcoinwallet.com

Hosted from this repo (`public/.well-known/` → `docs/.well-known/` after `npm run build`).

## Pay landing page

`/pay` — e.g. `https://boldbitcoinwallet.com/pay?address=bc1q…&amount=0.001`

Shows payment details and opens Bold Wallet on mobile (universal link / App Link).

## Android `assetlinks.json` fingerprints

Current entry: **upload / release keystore** (GitHub APK, direct installs).

If the app is on **Google Play with Play App Signing**, also add Google’s **app signing key** SHA-256:

1. Play Console → your app → **Setup** → **App integrity** → **App signing**
2. Copy **App signing key certificate** → SHA-256 (remove colons)
3. Append to `sha256_cert_fingerprints` in `public/.well-known/assetlinks.json`
4. Run `npm run build` and deploy `docs/`

You can include multiple fingerprints in the same array.

## Deploy

```bash
npm run build
git add public/.well-known docs app/pay components/PayLanding.tsx deep-links
git commit -m "…"
git push origin web_refresh_next
```

GitHub Pages serves branch `web_refresh_next` from `/docs`.
