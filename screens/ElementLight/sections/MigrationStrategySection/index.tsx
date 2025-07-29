import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const MigrationStrategySection = (): JSX.Element => {
  const phases = [
    {
      number: "Phase 1",
      title: "Business Impact Analysis",
      description: "Quantify risk and establish recovery priorities",
    },
    {
      number: "Phase 2",
      title: "Strategy & Site Planning",
      description: "Define tech requirements and alternate‑site options",
    },
    {
      number: "Phase 3",
      title: "Implementation",
      description: "Build or integrate DR infrastructure; validate vendor pricing",
    },
    {
      number: "Phase 4",
      title: "Testing & Training",
      description: "Conduct live fail‑over tests, train staff, and refine playbooks",
    },
  ];

  return (
    <section className="flex w-full items-start justify-center py-28 px-8 relative bg-gray-50">
      <div className="flex flex-col w-full max-w-[1248px] items-center justify-center">
        <div className="w-full mb-12">
          <div className="flex flex-col items-start w-full">
            <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
              Business Continuity & Disaster Recovery (BCP/DR)
            </h2>
            <div className="w-[150px] h-1.5 border-t-[6px] border-[#8a7cff] my-6" />
            <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31px]">
              Protect your critical operations against local outages and major disasters with our four‑phase methodology:
            </p>
          </div>
        </div>
        {phases.map((phase, index) => (
          <Card
            key={`phase-${index}`}
            className={`w-full bg-white ${index < phases.length - 1 ? "border-b-2 border-[#d2d2d2] border-solid" : ""}`}
          >
            <CardContent className="flex flex-wrap p-0">
              <div className="flex py-[74px] px-[54px] w-full">
                <div className="w-full md:w-[437px] pr-5">
                  <div className="flex flex-col gap-[15px] pb-[60px]">
                    <h3 className="font-semantic-heading-3 font-[number:var(--semantic-heading-3-font-weight)] text-[#0b1f15] text-[length:var(--semantic-heading-3-font-size)] tracking-[var(--semantic-heading-3-letter-spacing)] leading-[var(--semantic-heading-3-line-height)] [font-style:var(--semantic-heading-3-font-style)]">
                      {phase.number}
                    </h3>
                    <p className="font-plus-jakarta-sans-regular font-[number:var(--plus-jakarta-sans-regular-font-weight)] text-[#0b1f15] text-[length:var(--plus-jakarta-sans-regular-font-size)] tracking-[var(--plus-jakarta-sans-regular-letter-spacing)] leading-[var(--plus-jakarta-sans-regular-line-height)] [font-style:var(--plus-jakarta-sans-regular-font-style)]">
                      {phase.title}
                    </p>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31px] whitespace-pre-line">
                    {phase.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
