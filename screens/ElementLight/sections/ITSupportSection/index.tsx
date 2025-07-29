import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ITSupportSection = (): JSX.Element => {
  // Add custom styles for 3D effects
  const customStyles = `
    .perspective-1000 {
      perspective: 1000px;
    }
    .rotate-y-12:hover {
      transform: rotateY(12deg) scale(1.05);
    }
    .transform-gpu {
      transform-style: preserve-3d;
    }
  `;
  // Service categories data
  const serviceCategories = [
    {
      id: "site-assessment",
      title: "Data‑Center Site Assessment & Risk Analysis",
      description: "Evaluate seismic, flood, power‑grid, connectivity, and physical‑security risks against industry compliance standards.",
    },
    {
      id: "engineering-design",
      title: "Engineering Design & Technical Specification",
      description: "Produce rack elevations, structured‑cabling schematics, and power‑/cooling load plans; deliver an RFP‑ready blueprint.",
    },
    {
      id: "construction-management",
      title: "Construction Management & Quality Assurance",
      description: "Coordinate vendors, track budget and timeline KPIs, and govern every change request through formal change‑control.",
    },
    {
      id: "hardware-migration",
      title: "Hardware Migration & Go‑Live Commissioning",
      description: "Execute zero‑downtime equipment relocation or green‑field deployment, validate performance, and hand off full documentation.",
    },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      <section className="flex w-full items-start justify-center px-6 py-28 relative bg-white">
      <div className="relative w-full max-w-[1248px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row w-full mb-12">
          {/* Title and Separator */}
          <div className="flex flex-col w-full md:w-[40%]">
            <div className="flex flex-col">
              <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                Data‑Centre Builds & Moves
              </h2>
            </div>
            <div className="mt-4 mb-8">
              <div className="w-[150px] h-1.5 border-t-[6px] border-[#8a7cff]" />
            </div>
          </div>

          {/* Description */}
          <div className="flex flex-col w-full md:w-[60%] md:pt-12">
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31px]">
              From site selection to commissioning, we handle the full lifecycle of data‑centre delivery.
            </p>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {serviceCategories.map((category, index) => (
            <div key={category.id} className="group perspective-1000">
              {/* Gradient Border Sleeve */}
              <div className="p-[1px] bg-gradient-to-r from-[#8a7cff] via-purple-500 to-[#8a7cff] rounded-lg">
                {/* Card Container with Funnel Effect */}
                <div className="relative h-48 bg-white rounded-lg overflow-hidden transition-all duration-500 group-hover:bg-[#f8f9fa] group-focus-within:bg-[#f8f9fa] border border-gray-100 group-hover:transform group-hover:scale-105 group-hover:rotate-y-12 transform-gpu">

                  {/* Funnel Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#8a7cff]/5 to-[#8a7cff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Funnel Light Beam */}
                  <div className="absolute top-0 left-1/2 w-0 h-0 border-l-[100px] border-r-[100px] border-t-[50px] border-l-transparent border-r-transparent border-t-[#8a7cff]/10 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Funnel Depth Lines */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#8a7cff]/30 to-transparent"></div>
                    <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#8a7cff]/20 to-transparent"></div>
                    <div className="absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#8a7cff]/10 to-transparent"></div>
                  </div>

                  {/* Front Face (Default State) */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-100 transition-all duration-500 group-hover:opacity-0 group-focus-within:opacity-0 z-10 group-hover:transform group-hover:scale-95">
                    <h3 className="[font-family:'Inter_Var',sans-serif] font-semibold text-[#1a1a1a] text-lg tracking-[-0.3px] leading-[1.3] antialiased">
                      {category.title}
                    </h3>

                    {/* Arrow in lower-right */}
                    <div className="flex justify-end">
                      <div className="w-5 h-5 text-[#8a7cff] group-hover:text-purple-600 transition-colors duration-300">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7" />
                          <path d="M7 7h10v10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Back Face (Hover State) */}
                  <div className="absolute inset-0 p-6 flex items-center opacity-0 transform translate-y-4 scale-110 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 z-10">
                    <p className="[font-family:'Inter_Var',sans-serif] font-normal text-[#555555] text-base tracking-[0.1px] leading-[1.5] antialiased">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
