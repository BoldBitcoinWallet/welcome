#!/bin/bash
# Quick Start Script for Bold Bitcoin Wallet Website

echo "🚀 Bold Bitcoin Wallet - Next.js Quick Start"
echo "=============================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed!"
    echo ""
fi

echo "🎨 Starting development server..."
echo "Open http://localhost:3000 in your browser"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
