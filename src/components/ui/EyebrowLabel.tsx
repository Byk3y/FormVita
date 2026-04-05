interface EyebrowLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function EyebrowLabel({ children, className }: EyebrowLabelProps) {
  return (
    <h6
      className={`text-[10px] font-medium uppercase tracking-[1.6px] leading-[15px] text-text-primary ${className ?? ""}`}
    >
      {children}
    </h6>
  );
}
