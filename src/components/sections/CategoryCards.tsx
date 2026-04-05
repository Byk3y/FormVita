import Marquee from "@/components/ui/Marquee";

const CATEGORIES = [
  {
    label: "Weight Loss",
    bgColor: "rgb(222, 237, 224)",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.2">
        <path d="M12 22c5.5-3 8.5-7.5 8.5-12V5l-8.5-3L3.5 5v5c0 4.5 3 9 8.5 12z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "GLP-1 Pills",
    bgColor: "rgb(228, 236, 242)",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.2">
        <rect x="6" y="2" width="12" height="20" rx="6" />
        <path d="M6 12h12" />
      </svg>
    ),
  },
  {
    label: "Doctor-Led Care",
    bgColor: "rgb(232, 224, 220)",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.2">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    label: "Delivered Monthly",
    bgColor: "rgb(242, 235, 225)",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.2">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function CategoryCards() {
  return (
    <div className="relative z-[2] -mt-[88px] md:-mt-[134px]">
      <div className="mx-auto max-w-[980px] px-0 md:px-[30px]">
        {/* Desktop: one white outer container */}
        <div className="hidden md:block bg-[#fafafa] rounded-[24px] overflow-visible p-[14px] pb-0">
          {/* Colored image areas row - with gaps showing white underneath */}
          <div className="flex gap-[8px]">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.label}
                href="#weight-loss"
                className="flex-1 relative h-[120px] rounded-t-[20px] flex items-center justify-center overflow-visible cursor-pointer group"
                style={{ backgroundColor: cat.bgColor }}
              >
                <div className="relative -top-[10px] group-hover:-top-[14px] transition-all">
                  {cat.icon}
                </div>
              </a>
            ))}
          </div>
          {/* Labels row - one continuous strip */}
          <div className="flex">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.label + "-label"}
                href="#weight-loss"
                className="flex-1 h-[55px] flex items-center justify-between px-[20px] cursor-pointer group"
              >
                <span className="text-[15px] font-semibold text-text-primary">
                  {cat.label}
                </span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile: full-width vertical stack of separated cards */}
        <div className="md:hidden bg-[#fafafa] rounded-t-[24px] p-[12px] flex flex-col gap-[10px]">
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#weight-loss"
              className="flex items-stretch bg-[#f4f4f4] rounded-[14px] overflow-hidden h-[86px]"
            >
              <div
                className="w-[130px] flex items-center justify-center shrink-0"
                style={{ backgroundColor: cat.bgColor }}
              >
                {cat.icon}
              </div>
              <div className="flex-1 flex items-center justify-between pl-[18px] pr-[16px]">
                <span className="text-[16px] font-semibold text-black">
                  {cat.label}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="text-black shrink-0"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
