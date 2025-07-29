import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const TeamCollaborationSection = (): JSX.Element => {
  const paragraphs = [
    `Stay current without needless disruption.`,
  ];

  const migrationAreas = [
    "Hardware / software lifecycle audits",
    "In‑place upgrades or cross‑platform migrations",
    "Change‑management communication plans",
    "Post‑migration performance tuning",
  ];

  return (
    <section className="w-full flex justify-center bg-[#f4f9ff] py-10 px-6">
      <Card className="max-w-[1248px] w-full border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col w-full md:w-[451px]">
              <div className="pt-2.5 pb-[15px]">
                <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                  Migration &
                  <br />
                  Technology
                  <br />
                  Renewal
                </h2>
              </div>
              <div className="py-4">
                <Separator className="h-1.5 bg-[#8a7cff] w-[150px]" />
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[700px]">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={`paragraph-${index}`}
                  className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px] mb-6"
                >
                  {paragraph}
                </p>
              ))}
              <div className="pl-10">
                <ul className="space-y-0">
                  {migrationAreas.map((area, index) => (
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
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
