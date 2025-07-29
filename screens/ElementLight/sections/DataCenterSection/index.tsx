import React from "react";
import { Button } from "../../../../components/ui/button";

export const DataCenterSection = (): JSX.Element => {
  return (
    <section className="w-full py-28 px-8 relative bg-gradient-to-br from-[#8a7cff] via-[#7c6eff] to-[#6b5eff]">
      {/* Diagonal stroke pattern overlay */}
      <div className="absolute inset-0 opacity-25">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              65deg,
              transparent,
              transparent 120px,
              rgba(255, 255, 255, 0.1) 120px,
              rgba(255, 255, 255, 0.1) 122px
            )`,
            backgroundSize: '240px 120px',
            backgroundPosition: '0 0, 60px 60px'
          }}
        />
      </div>

      <div className="max-w-[1248px] mx-auto flex flex-col items-center justify-center text-center relative z-10">
        <div className="flex flex-col items-center max-w-[1200px] w-full">
          <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-white text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased mb-8">
            Enterprise‑grade IT solutions without the enterprise price tag
          </h2>

          <p className="mt-6 mb-12 [font-family:'Inter_Var',sans-serif] font-normal text-white/90 text-xl text-center tracking-[0.27px] leading-[32px] antialiased">
            Unlock reliability, security, and efficiency for your business.
            <br />
            Contact AKRIN today to see how our managed IT services can accelerate your next project.
          </p>

          <Button className="px-8 py-3 h-auto border-2 border-white text-white font-medium hover:bg-white hover:text-purple-600 transition-colors duration-200 bg-transparent rounded-none [font-family:'Inter_Var',sans-serif] text-base">
            Book a free strategy call →
          </Button>
        </div>
      </div>
    </section>
  );
};
