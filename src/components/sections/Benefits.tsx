import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import BackgroundBlob from "@/components/ui/BackgroundBlob";
import BenefitList from "@/components/ui/BenefitList";
import Button from "@/components/ui/Button";

const INCLUDED_ITEMS = [
  "Prescription to FDA-approved oral GLP-1",
  "1:1 physician guidance",
  "24/7 support",
  "Personalized weight loss plan",
  "Fast & discreet shipping",
];

const BENEFITS_LIST = [
  "FDA-approved oral GLP-1 medication",
  "No needles — just a daily pill",
  "Doctor-monitored dose adjustments",
  "Monthly health check-ins",
  "Anti-nausea support if needed",
];

export default function Benefits() {
  return (
    <SectionWrapper id="weight-loss">
      <BackgroundBlob color="rgb(214, 242, 228)" />

      {/* Feature highlight card - like MEDVi's white box */}
      <div className="bg-white rounded-[20px] p-[40px] mb-[60px]" style={{
        boxShadow: "0px 1.94px 8.14px -1.2px rgba(0,0,0,0.05), 0px 4.25px 17.86px -1.8px rgba(0,0,0,0.05)"
      }}>
        <h4 className="font-heading text-[20px] font-semibold tracking-[-0.4px] text-text-primary mb-[24px]">
          Everything you need — included:
        </h4>
        <BenefitList items={INCLUDED_ITEMS} />
      </div>

      <div className="flex flex-col items-center text-center gap-[16px] mb-[50px]">
        <EyebrowLabel>Doctor-Guided GLP-1 Care</EyebrowLabel>
        <AccentHeading accentText="made easy">
          Weight loss made easy with personalized care
        </AccentHeading>
      </div>

      <div className="flex flex-col md:flex-row gap-[40px] items-start">
        {/* Left: product image placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[300px]">
            <div className="rounded-[50px_50px_0_0] overflow-hidden" style={{ backgroundColor: "rgb(222, 237, 224)" }}>
              <div className="w-full aspect-[604/892] flex items-center justify-center">
                <div className="text-center p-[40px]">
                  <div className="w-[100px] h-[100px] mx-auto mb-[16px] rounded-full bg-white/60 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                      <rect x="6" y="2" width="12" height="20" rx="6" />
                      <path d="M6 12h12" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-medium text-text-muted">Product Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex-1 flex flex-col gap-[24px]">
          <h3 className="font-heading text-[24px] font-semibold leading-[28.8px] tracking-[-0.48px] text-text-primary">
            A smarter approach to weight loss, built around you
          </h3>
          <p className="text-[14px] text-text-muted leading-[23px]">
            Find the right FDA-approved GLP-1 medication with the confidence
            that comes from knowing it is doctor-approved, safe, and effective.
          </p>
          <BenefitList items={BENEFITS_LIST} />
          <div className="pt-[8px]">
            <Button href="#how-it-works">Get Started</Button>
          </div>
        </div>
      </div>

      {/* Second block: app/portal preview */}
      <div className="mt-[80px] flex flex-col md:flex-row-reverse gap-[40px] items-start">
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[300px]">
            <div className="rounded-[50px] overflow-hidden" style={{ backgroundColor: "rgb(228, 236, 242)" }}>
              <div className="w-full aspect-[620/468] flex items-center justify-center">
                <div className="text-center p-[40px]">
                  <div className="w-[100px] h-[100px] mx-auto mb-[16px] rounded-full bg-white/60 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <p className="text-[14px] font-medium text-text-muted">Patient Portal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-[16px]">
          <h3 className="font-heading text-[20px] font-semibold tracking-[-0.4px] text-text-primary">
            Everything, all in one place
          </h3>
          <p className="text-[14px] text-text-muted leading-[23px]">
            Track your progress, check in with your provider, and manage your care
            in your all-in-one patient portal.
          </p>
          <h3 className="font-heading text-[20px] font-semibold tracking-[-0.4px] text-text-primary mt-[16px]">
            Unlimited 24/7 support
          </h3>
          <p className="text-[14px] text-text-muted leading-[23px]">
            Medical support continues throughout your care, whenever you need it.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
