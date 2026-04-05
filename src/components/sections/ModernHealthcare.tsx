import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";

const FEATURES = [
  {
    title: "Licensed and regulated",
    description:
      "Care is provided by licensed clinicians and filled through FDA-regulated pharmacies.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "100% online medical care",
    description:
      "Appointments, follow-ups, and treatment all take place online.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Shipping that's fast & discreet",
    description:
      "Orders arrive quickly and in plain packaging to protect your privacy.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Unlimited 24/7 support",
    description:
      "Medical support continues throughout your care, whenever you need it.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function ModernHealthcare() {
  return (
    <SectionWrapper background="#faf9f7" fullWidth>
      <div className="flex flex-col items-center text-center gap-[16px] mb-[50px]">
        <EyebrowLabel>Better is possible — and we built for it.</EyebrowLabel>
        <AccentHeading accentText="built around you">
          Modern healthcare, built around you
        </AccentHeading>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="bg-white rounded-[20px] p-[30px] flex flex-col gap-[16px]"
            style={{
              boxShadow:
                "0px 1.94px 8.14px -1.2px rgba(0,0,0,0.05), 0px 4.25px 17.86px -1.8px rgba(0,0,0,0.05)",
            }}
          >
            <div className="w-[60px] h-[60px] rounded-[16px] bg-brand-teal-light flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="font-heading text-[18px] font-semibold text-text-primary">
              {feature.title}
            </h3>
            <p className="text-[14px] text-text-muted leading-[23px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
