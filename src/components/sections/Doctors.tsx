import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import { DOCTORS } from "@/lib/constants";

export default function Doctors() {
  return (
    <SectionWrapper id="doctors" background="#faf9f7" fullWidth>
      <div className="flex flex-col items-center text-center gap-[16px] mb-[50px]">
        <EyebrowLabel>Our Medical Team</EyebrowLabel>
        <AccentHeading accentText="leading health experts">
          Medical care from leading health experts
        </AccentHeading>
        <p className="text-[16px] text-text-muted leading-[25px] max-w-[600px]">
          Our partnered physicians are here to guide you every step of the way,
          bringing both their expertise and genuine care to help you feel
          supported.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-[32px]">
        {DOCTORS.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white rounded-[20px] p-[24px] w-[300px] flex flex-col items-center text-center gap-[16px]"
            style={{
              boxShadow:
                "0px 0.71px 2.99px -0.6px rgba(0,0,0,0.05), 0px 1.94px 8.14px -1.2px rgba(0,0,0,0.05), 0px 4.25px 17.86px -1.8px rgba(0,0,0,0.05), 0px 9.44px 39.65px -2.4px rgba(0,0,0,0.04), 0px 24px 100.8px -3px rgba(0,0,0,0.03)",
            }}
          >
            {/* Photo placeholder */}
            <div className="w-[80px] h-[80px] rounded-full bg-brand-teal-light flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-teal)" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <div>
              <h4 className="text-[16px] font-semibold text-text-muted">
                {doctor.name}
              </h4>
              <p className="text-[14px] font-normal text-text-muted">
                {doctor.credentials}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
