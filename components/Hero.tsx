import Image from "next/image";

export default function Hero() {
  const storeButtons = [
    {
      href: "https://play.google.com/store/apps/details?id=com.boldwallet",
      icon: "/playstore.svg",
      label: "Android",
    },
    {
      href: "https://apps.apple.com/us/app/bold-bitcoin-wallet/id6748949478",
      icon: "/appstore.svg",
      label: "iOS & Mac",
    },
    {
      href: "https://f-droid.org/packages/com.boldwallet",
      icon: "/fdroid.ico",
      label: "F-Droid",
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-primary via-primary to-secondary text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up leading-tight">
            Seedless. Hardware-Free.{" "}
            <span className="text-accent">Limitless.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            No seeds, no hardware wallets, no dependencies. Pure and Resilient
            Bitcoin Security, Powered by Superior Threshold Signatures
            technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            {storeButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={button.icon}
                    alt={button.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-medium">{button.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 -mb-px">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#f9f9fe"
          />
        </svg>
      </div>
    </section>
  );
}
