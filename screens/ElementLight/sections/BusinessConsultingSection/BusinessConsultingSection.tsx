import React from "react";
import { Separator } from "../../../../components/ui/separator";

export const BusinessConsultingSection = (): JSX.Element => {
  // List of expertise areas
  const expertiseAreas = [
    "PMI‑aligned project governance",
    "End‑to‑end design for data‑centre & M&E systems",
    "Vendor selection, coordination, and cost control",
    "Full documentation: scope, milestones, risk register, and hand‑over kit",
    "In‑house specialists in networking, Wi‑Fi, cloud, cybersecurity, and telecoms",
  ];

  // Office relocation areas
  const officeRelocationAreas = [
    "Device Checklist – We tag and track every PC, printer, and rack device before and after the move.",
    "Step‑by‑Step Schedule – Work is split into clear phases to keep the business running while we relocate.",
    "Day‑One Testing – We power up, test, and fix on site so staff start work without hiccups.",
    "Ongoing Support – Need extra desks or network tweaks later? Our Moves / Adds / Changes service is on call.",
  ];

  return (
    <section className="flex items-start justify-center px-[30px] py-[111.59px] relative bg-gray-50">
      <div className="flex flex-wrap max-w-[1248px] items-start justify-center gap-[0px_0px] relative">
        {/* Left column - blank space */}
        <div className="flex w-[416px] items-start justify-center relative self-stretch">
          <div className="flex flex-col w-[368.09px] items-start pt-[50px] pb-0 px-0 relative self-stretch">
            <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
              {/* Blank space where image was */}
              <div className="relative max-w-[368.09px] w-[368.09px] h-[551.22px]"></div>
            </div>
          </div>
        </div>

        {/* Right column with content */}
        <div className="flex w-[832px] items-start justify-center relative self-stretch">
          <div className="relative self-stretch w-[784.09px]">
            {/* IT Infrastructure Project Management Section */}
            <div className="w-[784px] mb-[60px]">
              <div className="flex w-full flex-col items-start">
                <h2 className="self-stretch [font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                  Infrastructure Project
                  <br />
                  Management
                </h2>
              </div>

              <div className="mt-4 mb-8">
                <Separator className="max-w-[150px] h-1.5 border-t-[6px] [border-top-style:solid] border-[#8a7cff]" />
              </div>

              <div className="mb-8">
                <p className="[font-family:'Inter_Var',sans-serif] font-normal text-[#4a4a4a] text-lg tracking-[0.27px] leading-[31.0px] antialiased">
                  We deliver complex infrastructure and data‑centre projects on time and on budget—even
                  <br />
                  under aggressive timelines.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#0b1f15] text-xl mb-4">
                  Our strengths
                </h3>
              </div>

              <div className="pl-10">
                <ul className="space-y-2">
                  {expertiseAreas.map((area, index) => (
                    <li
                      key={index}
                      className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px] py-1"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Office Relocation Section */}
            <div className="w-[784px]">
              <div className="flex flex-col items-start">
                <h2 className="self-stretch [font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                  Straightforward Promise
                </h2>
              </div>

              <div className="mt-4 mb-8">
                <Separator className="max-w-[150px] h-1.5 border-t-[6px] [border-top-style:solid] border-[#8a7cff]" />
              </div>

              <div className="mb-8">
                <p className="[font-family:'Inter_Var',sans-serif] font-normal text-[#4a4a4a] text-lg tracking-[0.27px] leading-[31.0px] antialiased">
                  We move your IT setup—desks, servers, Wi‑Fi, everything—so your team can log in the next morning with zero downtime.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-bold text-[#0b1f15] text-xl mb-4">
                  What We Handle
                </h3>
              </div>

              <div className="pl-10">
                <ul className="space-y-2">
                  {officeRelocationAreas.map((area, index) => (
                    <li
                      key={index}
                      className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px] py-1"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


