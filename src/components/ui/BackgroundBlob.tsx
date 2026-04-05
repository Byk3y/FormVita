interface BackgroundBlobProps {
  color: string;
  className?: string;
}

export default function BackgroundBlob({ color, className }: BackgroundBlobProps) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 top-[80px] w-[998px] h-[472px] rounded-full pointer-events-none ${className ?? ""}`}
      style={{
        background: color,
        filter: "blur(50px)",
        opacity: 0.25,
      }}
      aria-hidden="true"
    />
  );
}
