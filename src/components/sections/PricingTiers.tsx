import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import Button from "@/components/ui/Button";
import { PRICING_TIERS } from "@/lib/constants";

export default function PricingTiers() {
  return (
    <SectionWrapper id="pricing" fullWidth>
      <div className="flex flex-col items-center text-center gap-[16px] mb-[60px]">
        <EyebrowLabel>Transparent Pricing</EyebrowLabel>
        <AccentHeading accentText="right for you">
          Choose the plan that&apos;s right for you
        </AccentHeading>
        <p className="text-[16px] text-text-muted leading-[25px] max-w-[600px]">
          Every plan includes medication, doctor consultation, ongoing support,
          and free shipping. No hidden fees, ever.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col rounded-[16px] p-[40px] ${
              tier.popular
                ? "bg-brand-teal text-white ring-2 ring-brand-teal"
                : "bg-white border border-gray-200"
            }`}
          >
            {tier.popular && (
              <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-white text-brand-teal text-[10px] font-semibold uppercase tracking-[1.6px] px-[16px] py-[6px] rounded-full">
                Most Popular
              </span>
            )}

            <h3
              className={`font-heading text-[24px] font-semibold tracking-[-0.48px] mb-[8px] ${
                tier.popular ? "text-white" : "text-text-primary"
              }`}
            >
              {tier.name}
            </h3>

            <div className="flex items-baseline gap-[4px] mb-[8px]">
              <span
                className={`font-heading text-[48px] font-bold tracking-[-1px] ${
                  tier.popular ? "text-white" : "text-text-primary"
                }`}
              >
                ${tier.price}
              </span>
              <span
                className={`text-[14px] ${
                  tier.popular ? "text-white/70" : "text-text-muted"
                }`}
              >
                /mo
              </span>
            </div>

            <p
              className={`text-[14px] font-medium mb-[4px] ${
                tier.popular ? "text-white" : "text-text-primary"
              }`}
            >
              {tier.medication}
            </p>
            <p
              className={`text-[13px] mb-[24px] ${
                tier.popular ? "text-white/70" : "text-text-muted"
              }`}
            >
              {tier.form}
            </p>

            <ul className="flex flex-col gap-[12px] mb-[32px] flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-[10px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0 mt-[2px]"
                  >
                    <path
                      d="M13.3 4.3L6 11.6L2.7 8.3"
                      stroke={tier.popular ? "white" : "var(--color-brand-teal)"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className={`text-[14px] leading-[20px] ${
                      tier.popular ? "text-white/90" : "text-text-muted"
                    }`}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="#"
              variant={tier.popular ? "secondary" : "primary"}
              className={
                tier.popular
                  ? "!bg-white !text-brand-teal"
                  : ""
              }
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
