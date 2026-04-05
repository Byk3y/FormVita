import Marquee from "@/components/ui/Marquee";
import { TRUST_ITEMS } from "@/lib/constants";
import { Package, Stethoscope, MousePointer2, BadgeDollarSign } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
  truck: <Package size={26} strokeWidth={1.8} />,
  stethoscope: <Stethoscope size={26} strokeWidth={1.8} />,
  cursor: <MousePointer2 size={26} strokeWidth={1.8} />,
  dollar: <BadgeDollarSign size={26} strokeWidth={1.8} />,
};

export default function TrustBar() {
  return (
    <div className="h-[60px] flex items-center mt-[30px] md:mt-[50px]">
      <Marquee speed="normal" innerClassName="gap-[20px]">
        <div className="flex items-center gap-[20px]">
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-[12px] px-[10px]"
            >
              <span className="text-black">{ICONS[item.icon]}</span>
              <span className="text-[10px] font-medium uppercase tracking-[1.6px] leading-[12px] text-black whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
