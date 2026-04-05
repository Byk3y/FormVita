import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import Marquee from "@/components/ui/Marquee";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 5);
  const row2 = TESTIMONIALS.slice(5, 10);

  return (
    <SectionWrapper id="testimonials" fullWidth>
      <div className="flex flex-col items-center text-center gap-[16px] mb-[50px]">
        <EyebrowLabel>What Our Patients Say</EyebrowLabel>
        <AccentHeading accentText="trust FormVita">
          There&apos;s a reason people trust FormVita
        </AccentHeading>
      </div>

      <div className="flex flex-col gap-[20px]">
        {/* Row 1 - scrolls left */}
        <Marquee direction="left" innerClassName="gap-[20px]">
          <div className="flex gap-[20px]">
            {row1.map((t) => (
              <div
                key={t.name}
                className="bg-brand-teal-light rounded-[20px] p-[40px] w-[400px] h-[230px] flex flex-col justify-between shrink-0 max-md:w-[300px] max-md:h-auto max-md:p-[24px]"
              >
                <div className="flex flex-col gap-[12px]">
                  <StarRating />
                  <p className="text-[14px] font-normal text-text-muted leading-[23.1px] line-clamp-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <p className="text-[16px] font-semibold text-text-muted leading-[20px] mt-[12px]">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>

        {/* Row 2 - scrolls right */}
        <Marquee direction="right" innerClassName="gap-[20px]">
          <div className="flex gap-[20px]">
            {row2.map((t) => (
              <div
                key={t.name}
                className="bg-brand-teal-light rounded-[20px] p-[40px] w-[400px] h-[230px] flex flex-col justify-between shrink-0 max-md:w-[300px] max-md:h-auto max-md:p-[24px]"
              >
                <div className="flex flex-col gap-[12px]">
                  <StarRating />
                  <p className="text-[14px] font-normal text-text-muted leading-[23.1px] line-clamp-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                </div>
                <p className="text-[16px] font-semibold text-text-muted leading-[20px] mt-[12px]">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </SectionWrapper>
  );
}
