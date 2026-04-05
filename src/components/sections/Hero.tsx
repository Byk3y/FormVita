export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-start pt-[70px] pb-[160px] px-[20px] md:pt-[55px] md:pb-[200px] md:px-[30px] overflow-hidden z-[1]"
      style={{
        background: "linear-gradient(166deg, #0f5e59 0%, #0a1a2e 100%)",
      }}
    >
      {/* Eyebrow */}
      <p className="text-[13px] md:text-[14px] font-normal text-white leading-[22px] md:leading-[25px] tracking-[0.28px] mb-[16px] md:mb-[20px] mt-[10px] md:mt-[20px] text-center">
        Join <span className="font-bold">FormVita</span> — FDA-Approved Weight Loss
      </p>

      {/* Heading */}
      <h1 className="font-heading text-[46px] leading-[50px] md:text-[70px] md:leading-[70px] font-semibold tracking-[-1.4px] text-center text-white mb-[16px] md:mb-[20px]">
        Weight loss,
        <br />
        <span style={{ color: "rgb(119, 180, 160)" }}>simplified</span> for real
        results.
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] md:text-[16px] font-normal text-white leading-[23px] md:leading-[25px] text-center max-w-[660px]">
        Doctor-prescribed GLP-1 pills delivered to your door. No needles. No
        waiting rooms. No hidden fees. Just care that works.
      </p>
    </section>
  );
}
