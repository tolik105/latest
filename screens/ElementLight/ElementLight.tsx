"use client";

import React from "react";
import { BusinessAnalysisSection } from "./sections/BusinessAnalysisSection";
import { BusinessConsultingSection } from "./sections/BusinessConsultingSection";
import { DataCenterSection } from "./sections/DataCenterSection";
import { HeroSection } from "./sections/HeroSection";
import { ITSupportSection } from "./sections/ITSupportSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { StrategyOverviewSection } from "./sections/StrategyOverviewSection";
import { TeamCollaborationSection } from "./sections/TeamCollaborationSection";

export const ElementLight = (): JSX.Element => {

  return (
    <div
      className="flex flex-col w-full items-start relative bg-[#eaeaea]"
      data-model-id="3:118"
    >
      <div className="flex flex-col w-full items-start relative flex-[0_0_auto] bg-[#ffffff01] shadow-[0px_0px_30px_#00000026]">
        <div className="relative w-full bg-white">
          {/* Navbar removed */}

          {/* Main Content Sections */}
          <HeroSection />

          <div className="flex flex-col w-full items-start relative bg-white space-y-0">
            <BusinessConsultingSection />
            <ITSupportSection />

            {/* Data Center Section - blank space */}
            <div className="flex w-full items-start justify-center px-[30px] py-16 bg-[#f4f9ff]">
              <div className="flex flex-col w-[1200.09px] items-start relative">
                <div className="flex flex-col items-center w-full">
                  {/* Blank space where data center image was */}
                  <div className="relative max-w-[1200.09px] w-[1080px] h-[608px] bg-white/20 rounded-lg" />
                </div>
              </div>
            </div>

            <BusinessAnalysisSection />
            <TeamCollaborationSection />
            <StrategyOverviewSection />
            <ServiceOverviewSection />
            <DataCenterSection />
          </div>

          {/* Footer removed */}
        </div>
      </div>
    </div>
  );
};
