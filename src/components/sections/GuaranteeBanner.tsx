const ITEMS = [
  {
    label: "Satisfaction Guarantee",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Free, Fast Shipping",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Doctor-Led Plans",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: "No Hidden Fees",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-3a3 3 0 100 6h2a3 3 0 010 6H8M12 2v2m0 16v2" />
      </svg>
    ),
  },
];

export default function GuaranteeBanner() {
  return (
    <div className="border-t border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1120px] grid grid-cols-2 md:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-[17px] h-[100px] px-[30px]"
          >
            {item.icon}
            <span className="text-[14px] font-medium text-text-primary">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
