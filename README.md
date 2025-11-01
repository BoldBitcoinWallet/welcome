# Bold Bitcoin Wallet - Next.js Website

Welcome to Bold BTC - Your Superior Non-Custodial Bitcoin Wallet

## 🚀 Getting Started

This is a modern Next.js single-page application built with TypeScript and Tailwind CSS.

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with header and footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles with Tailwind
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ScreenshotGallery.tsx
│   ├── HowItWorks.tsx
│   ├── Features.tsx
│   ├── Community.tsx
│   ├── CTASection.tsx
│   ├── Terms.tsx
│   └── Footer.tsx
├── public/             # Static assets (images, icons)
└── tailwind.config.ts  # Tailwind configuration

```

## 🎨 Features

- ⚡ Built with Next.js 15 and React 19
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- ♿ Accessible components
- 🔄 Smooth animations and transitions
- 🖼️ Optimized images with Next.js Image component
- 🎯 SEO optimized
- 📦 Static export ready for GitHub Pages

## 🌐 Deployment

### GitHub Pages

1. Build the project: `npm run build`
2. The `out` folder contains the static site
3. Push to your GitHub repository
4. Configure GitHub Pages to serve from the root or `/docs` folder

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/BoldBitcoinWallet/welcome)

## 🔧 Configuration

- `tailwind.config.ts` - Customize colors, fonts, and theme
- `next.config.js` - Next.js configuration
- `app/layout.tsx` - Update metadata and SEO

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
