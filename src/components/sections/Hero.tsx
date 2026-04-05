export default function Hero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-start pt-[55px] pb-[200px] px-[30px] overflow-visible z-[1]"
      style={{
        background: "linear-gradient(166deg, #0f5e59 0%, #0a1a2e 100%)",
      }}
    >
      {/* Eyebrow */}
      <p className="text-[14px] font-normal text-white leading-[25px] tracking-[0.28px] mb-[20px] mt-[20px]">
        Join <span className="font-bold">FormVita</span> — FDA-Approved Weight Loss
      </p>

      {/* Heading */}
      <h1 className="font-heading text-[70px] font-semibold leading-[70px] tracking-[-1.4px] text-center text-white mb-[20px] max-md:text-[42px] max-md:leading-[46px]">
        Weight loss,
        <br />
        <span style={{ color: "rgb(119, 180, 160)" }}>simplified</span> for real
        results.
      </h1>

      {/* Subtitle */}
      <p className="text-[16px] font-normal text-white leading-[25px] text-center max-w-[660px]">
        Doctor-prescribed GLP-1 pills delivered to your door. No needles. No
        waiting rooms. No hidden fees. Just care that works.
      </p>
    </section>
  );
}
