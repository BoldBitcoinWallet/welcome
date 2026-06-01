# Website and deep links

BoldWallet no longer uses a public HTTPS `/pay` landing page or App Links verification on **boldbitcoinwallet.com** (privacy-first).

Payment requests use standard **BIP-21** `bitcoin:` URIs handled directly by the app.

Keyshare handoff uses `boldwallet://import-keyshare` only.

See [BoldWallet `docs/deep-links/README.md`](https://github.com/BoldBitcoinWallet/BoldWallet/blob/main/docs/deep-links/README.md) for app-side URL handling.
