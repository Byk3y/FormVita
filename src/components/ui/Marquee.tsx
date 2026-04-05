"use client";

import clsx from "clsx";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: "normal" | "fast";
  className?: string;
  innerClassName?: string;
}

export default function Marquee({
  children,
  direction = "left",
  speed = "normal",
  className,
  innerClassName,
}: MarqueeProps) {
  const animationClass =
    direction === "left"
      ? speed === "fast"
        ? "animate-marquee-left-fast"
        : "animate-marquee-left"
      : "animate-marquee-right";

  return (
    <div className={clsx("overflow-hidden", className)}>
      <div
        className={clsx(
          "flex w-max",
          animationClass,
          innerClassName
        )}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
