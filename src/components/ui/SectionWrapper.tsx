import clsx from "clsx";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className,
  background,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={clsx("relative py-[100px] px-[30px]", className)}
      style={background ? { background } : undefined}
    >
      <div
        className={clsx(
          "relative mx-auto",
          fullWidth ? "max-w-[1120px]" : "max-w-[700px]"
        )}
      >
        {children}
      </div>
    </section>
  );
}
