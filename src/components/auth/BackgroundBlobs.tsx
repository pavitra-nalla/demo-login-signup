const BLOBS = [
  {
    className: "-top-32 -left-32 h-96 w-96 opacity-60 animate-float",
    color: "#eadbc8",
  },
  {
    className: "-bottom-40 -right-32 h-[28rem] w-[28rem] opacity-50 animate-float-rev",
    color: "#9a8c98",
  },
  {
    className: "top-1/3 right-1/4 h-72 w-72 opacity-30 animate-float",
    color: "#7f7caf",
  },
];

export function BackgroundBlobs() {
  return (
    <>
      {BLOBS.map((b, i) => (
        <div
          key={i}
          aria-hidden
          className={`absolute rounded-full blur-3xl ${b.className}`}
          style={{ background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)` }}
        />
      ))}
    </>
  );
}
