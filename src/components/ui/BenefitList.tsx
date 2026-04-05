interface BenefitListProps {
  items: string[];
}

export default function BenefitList({ items }: BenefitListProps) {
  return (
    <ul className="flex flex-col gap-[10px]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-[10px] h-[23px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M13.3 4.3L6 11.6L2.7 8.3"
              stroke="var(--color-brand-teal)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[14px] font-medium leading-[19.6px] text-text-primary">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
