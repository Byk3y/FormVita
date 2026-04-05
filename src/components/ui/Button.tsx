import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-[500px] text-[12px] font-semibold uppercase tracking-[0.6px] leading-[14.4px] transition-opacity hover:opacity-90",
    variant === "primary" && "bg-brand-teal text-white px-[50px] h-[43px]",
    variant === "secondary" &&
      "bg-white text-text-primary border border-gray-200 px-[50px] h-[43px]",
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
