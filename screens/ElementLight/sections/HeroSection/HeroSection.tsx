import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[500px] bg-gray-100">
        <div className="container mx-auto max-w-[1248px] flex flex-wrap">
          <div className="w-full md:w-1/2 relative">
            <div className="flex flex-col items-start justify-center py-8 px-4 md:px-0 bg-white h-full">
              <div className="w-full mb-4">
                <h1 className="font-['Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[64px] tracking-[-0.96px] leading-[69.76px] antialiased">
                  IT Consulting &amp;
                  <br />
                  Management
                  <br />
                  Services
                </h1>
              </div>

              <div className="w-full mb-4">
                <p className="[font-family:'Inter_Var',sans-serif] font-normal text-[#666666] text-xl tracking-[0.27px] leading-[28px] antialiased">
                  Unlock enterprise‑grade reliability, security, and
                  <br />
                  efficiency—without the enterprise price tag. AKRIN's
                  <br />
                  managed IT solutions help you protect uptime, boost
                  <br />
                  productivity, and scale confidently.
                </p>
              </div>

              <div className="mt-8">
                <Button className="px-8 py-3 h-auto border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-colors duration-200 bg-transparent rounded-none [font-family:'Inter_Var',sans-serif] text-base">
                  Book a free strategy call →
                </Button>
              </div>
            </div>

            {/* Triangle shape overlay */}
            <div className="hidden md:block absolute w-[400px] h-[600px] top-0 right-0 border-r-[400px] [border-right-style:solid] border-b-[600px] [border-bottom-style:solid] border-transparent [border-image:linear-gradient(34deg,rgba(255,255,255,1)_0%,rgba(0,0,0,0)_0%)_1]" />
          </div>

          <div className="hidden md:block w-full md:w-1/2">
            {/* Right side content area - empty in the original */}
          </div>
        </div>
      </div>
    </section>
  );
};
