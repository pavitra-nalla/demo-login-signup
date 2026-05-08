interface BrandPanelProps {
  illustrationTitle: string;
  illustrationText: string;
}

export function BrandPanel({ illustrationTitle, illustrationText }: BrandPanelProps) {
  return (
    <div className="w-full max-w-md text-center lg:text-left">
      <div className="relative overflow-hidden rounded-2xl p-8 lg:p-12" style={{ background: "var(--gradient-lavender)" }}>
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 h-16 w-16 rounded-full bg-white/10 blur-lg animate-float" />
        <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-cream-100/20 blur-md animate-float-rev" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
            <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-display text-xl">
              ◐
            </div>
            <span className="font-display text-2xl tracking-tight text-white">Lumen</span>
          </div>

          <div className="mb-8 hidden lg:block">
            <div className="relative inline-block">
              <div className="h-32 w-32 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center text-4xl font-display">
                ✦
              </div>
              <div className="absolute -top-3 -right-3 h-8 w-8 rounded-xl bg-cream-100/80 rotate-12 animate-float" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 rounded-full bg-lavender-600/60 animate-float-rev" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl lg:text-3xl leading-tight text-white">
              {illustrationTitle}
            </h2>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed">
              {illustrationText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
