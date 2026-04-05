import SectionWrapper from "@/components/ui/SectionWrapper";
import EyebrowLabel from "@/components/ui/EyebrowLabel";
import AccentHeading from "@/components/ui/AccentHeading";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  return (
    <SectionWrapper id="faq" background="#faf9f7">
      <div className="flex flex-col items-center text-center gap-[16px] mb-[50px]">
        <EyebrowLabel>Common Questions</EyebrowLabel>
        <AccentHeading accentText="Frequently Asked">
          Frequently Asked Questions
        </AccentHeading>
      </div>

      <div className="flex flex-col gap-[1px] bg-gray-200 rounded-[16px] overflow-hidden">
        {FAQ_ITEMS.map((item) => (
          <details
            key={item.question}
            className="bg-white group"
          >
            <summary className="flex items-center justify-between cursor-pointer px-[24px] py-[20px] text-[16px] font-semibold text-text-primary leading-[24px] list-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="shrink-0 ml-[16px] transition-transform group-open:rotate-180"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="px-[24px] pb-[20px] text-[14px] text-text-muted leading-[23px]">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </SectionWrapper>
  );
}
