interface BrandPanelProps {
  illustrationTitle: string;
  illustrationText: string;
}

export function BrandPanel({ illustrationTitle, illustrationText }: BrandPanelProps) {
  return (
    <div className="relative min-h-[280px] lg:min-h-[640px] overflow-hidden [direction:ltr]">
      <div className="absolute inset-0" style={{ background: "var(--gradient-lavender)" }} />

      {/* Diagonal curved split — desktop */}
      <svg
        aria-hidden
        className="absolute inset-y-0 -right-px h-full w-32 hidden lg:block"
        viewBox="0 0 100 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C60,150 40,450 0,600 L100,600 L100,0 Z"
          fill="var(--cream-50)"
          fillOpacity="0.8"
        />
      </svg>

      {/* Mobile bottom curve */}
      <svg
        aria-hidden
        className="absolute -bottom-px inset-x-0 w-full h-12 lg:hidden"
        viewBox="0 0 600 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,80 450,20 600,100 L600,100 L0,100 Z"
          fill="var(--cream-50)"
          fillOpacity="0.85"
        />
      </svg>

      {/* Decorative orbs */}
      <div className="absolute top-10 left-10 h-24 w-24 rounded-full bg-white/10 blur-xl animate-float" />
      <div className="absolute bottom-20 left-20 h-16 w-16 rounded-full bg-cream-100/30 blur-md animate-float-rev" />
      <div className="absolute top-1/2 left-1/3 h-32 w-32 rounded-full bg-lavender-400/30 blur-2xl" />

      <div className="relative z-10 h-full flex flex-col justify-between p-10 lg:p-14 text-white">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-display text-lg">
            ◐
          </div>
          <span className="font-display text-xl tracking-tight">Lumen</span>
        </div>

        <div className="hidden lg:flex flex-1 items-center justify-center my-8">
          <div className="relative">
            <div className="h-48 w-48 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center">
              <div className="h-32 w-32 rounded-full bg-cream-50/30 flex items-center justify-center text-6xl font-display">
                ✦
              </div>
            </div>
            <div className="absolute -top-4 -right-6 h-10 w-10 rounded-2xl bg-cream-100/80 rotate-12 animate-float" />
            <div className="absolute -bottom-4 -left-6 h-8 w-8 rounded-full bg-lavender-600/60 animate-float-rev" />
          </div>
        </div>

        <div className="space-y-3 max-w-md">
          <h2 className="font-display text-2xl lg:text-3xl leading-tight">
            {illustrationTitle}
          </h2>
          <p className="text-white/75 text-sm lg:text-base leading-relaxed">
            {illustrationText}
          </p>
        </div>
      </div>
    </div>
  );
}
