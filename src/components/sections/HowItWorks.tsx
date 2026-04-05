import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" background="#faf9f7" fullWidth>
      <div className="flex flex-col items-center text-center gap-[16px] mb-[60px]">
        <EyebrowLabel>How It Works</EyebrowLabel>
        <AccentHeading accentText="Three simple steps">
          Three simple steps to start losing weight
        </AccentHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
        {HOW_IT_WORKS_STEPS.map((step) => (
          <div
            key={step.step}
            className="flex flex-col items-center text-center gap-[20px] bg-white rounded-[16px] p-[40px]"
          >
            {/* Step number */}
            <div className="w-[48px] h-[48px] rounded-full bg-brand-teal-light flex items-center justify-center">
              <span className="font-heading text-[20px] font-semibold text-brand-teal">
                {step.step}
              </span>
            </div>

            {/* Icon area placeholder */}
            <div className="w-full h-[120px] bg-brand-teal-light rounded-[12px] flex items-center justify-center">
              {step.step === 1 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              )}
              {step.step === 2 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              )}
              {step.step === 3 && (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                  <rect x="1" y="3" width="15" height="13" />
                  <path d="M16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              )}
            </div>

            <h3 className="font-heading text-[24px] font-semibold leading-[28.8px] tracking-[-0.48px] text-text-primary">
              {step.title}
            </h3>
            <p className="text-[14px] font-normal leading-[23px] text-text-muted">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
