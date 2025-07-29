import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const BusinessAnalysisSection = (): JSX.Element => {
  const paragraphs = [
    `Need a clear roadmap? Our consultants align technology, infrastructure, and budget with your long‑term business goals.`,
  ];

  const consultingAreas = [
    "Data‑centre and cloud strategy",
    "Technology refresh and migration planning",
    "Cost–benefit and ROI modelling",
    "Vendor contract evaluation and negotiation",
  ];

  return (
    <section className="flex items-start justify-center px-8 py-28 w-full">
      <div className="flex flex-wrap max-w-[1248px] items-start justify-center gap-0 w-full">
        <div className="flex-1 self-stretch">
          {/* Blank space where image was */}
          <div className="w-full h-full"></div>
        </div>
        <Card className="flex-1 border-none shadow-none">
          <CardContent className="p-0">
            <div className="w-full max-w-[576px]">
              <div className="pt-2.5 pb-[15px]">
                <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                  Strategic IT Consulting
                </h2>
              </div>
              <div className="mt-6 mb-9">
                <Separator className="w-[150px] h-1.5 bg-[#8a7cff] border-none" />
              </div>
              <div className="flex flex-col gap-[18.89px] pb-5">
                {paragraphs.map((paragraph, index) => (
                  <div key={index} className="pb-[0.81px]">
                    <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px]">
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>
              <div className="pl-10 mt-6">
                <ul className="space-y-0">
                  {consultingAreas.map((area, index) => (
                    <li
                      key={index}
                      className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px]"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
