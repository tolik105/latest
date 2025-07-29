import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const StrategyOverviewSection = (): JSX.Element => {
  const whyAkrinData = [
    {
      pillar: "Engineer‑Led",
      benefit: "Speak directly with senior engineers, not account handlers."
    },
    {
      pillar: "Automation‑First",
      benefit: "Scripted remediation cuts MTTR by up to 40 %."
    },
    {
      pillar: "Japan & Global",
      benefit: "Bilingual team bridges HQ standards with local compliance."
    }
  ];

  return (
    <section className="flex items-start justify-center px-[30px] py-[111.59px] relative bg-white">
      <div className="flex flex-wrap max-w-[1248px] items-start justify-center gap-[0px_0px] relative">
        <div className="flex w-full md:w-1/3 items-start justify-center relative">
          <div className="flex flex-col w-full max-w-[368px] items-start relative">
            <div className="flex pt-[9.48px] pb-[15px] px-0 relative self-stretch w-full flex-col items-start">
              <h2 className="self-stretch mt-[-1.00px] [font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                Stay Resilient
                <br />
                with AKRIN
              </h2>
            </div>
            <div className="pl-0 pr-0 pt-0 pb-[35px] relative">
              <Separator className="max-w-[150px] h-1.5 bg-[#8a7cff]" />
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-2/3 items-start justify-center relative">
          <div className="w-full max-w-[784px]">
            <div className="flex flex-col w-full items-start pt-0 pb-5 px-0">
              <p className="self-stretch mt-[-1.00px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px]">
                A major outage can cost more than lost revenue—it can damage reputation and invite
                <br />
                regulatory scrutiny. Our engineers design & implement BCP/DR frameworks that scale
                <br />
                with your risk profile and compliance needs.
              </p>
            </div>
            <div className="mt-[30px]">
              <h3 className="mb-4 [font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-xl tracking-[-0.30px] leading-6 antialiased">
                Why AKRIN?
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left py-2 px-4 font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#0b1f15] text-lg">Pillar</th>
                      <th className="text-left py-2 px-4 font-['Plus_Jakarta_Sans',Helvetica] font-bold text-[#0b1f15] text-lg">Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whyAkrinData.map((item, index) => (
                      <tr key={index} className="border-t border-[#d2d2d2]">
                        <td className="py-4 px-4 font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg">{item.pillar}</td>
                        <td className="py-4 px-4 font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg">{item.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
