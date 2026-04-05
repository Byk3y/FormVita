interface AccentHeadingProps {
  children: string;
  accentText: string;
  accentColor?: string;
  className?: string;
}

export default function AccentHeading({
  children,
  accentText,
  accentColor = "var(--color-brand-teal)",
  className,
}: AccentHeadingProps) {
  const parts = children.split(accentText);

  return (
    <h2
      className={`font-heading text-[40px] font-semibold leading-[48px] tracking-[-0.8px] text-text-primary max-md:text-[32px] max-md:leading-[38px] ${className ?? ""}`}
    >
      {parts[0]}
      <span style={{ color: accentColor }}>{accentText}</span>
      {parts[1] ?? ""}
    </h2>
  );
}
