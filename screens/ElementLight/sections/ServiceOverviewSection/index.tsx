import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ServiceOverviewSection = (): JSX.Element => {
  return (
    <section className="flex items-start justify-center px-8 py-28 relative bg-white">
      <div className="relative max-w-[1248px] w-full">
        {/* First section - blank space left, content right */}
        <div className="flex flex-col md:flex-row w-full mb-20">
          <div className="w-full md:w-1/2 h-[500px] flex items-start justify-center">
            {/* Blank space where image was */}
            <div className="w-full h-full" />
          </div>
          <div className="w-full md:w-1/2 h-[500px] flex items-center">
            <Card className="border-none shadow-none h-full w-full">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <div className="pt-2.5 pb-[15px]">
                  <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                    Unlock enterprise‑grade
                    <br />
                    reliability without the
                    <br />
                    enterprise price tag
                  </h2>
                </div>
                <div className="mt-6 mb-8">
                  <Separator className="w-[150px] h-1.5 bg-[#8a7cff] border-none" />
                </div>
                <div className="pt-0 pb-5">
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px]">
                    Our managed IT solutions help you protect uptime, boost productivity, and scale confidently. With expertise in infrastructure design, data center operations, and business continuity planning, we deliver solutions that align with your business goals and budget constraints.
                  </p>
                  <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px] mt-6">
                    Whether you need help with a complex data center migration, office relocation, or developing a comprehensive disaster recovery strategy, our team of experienced engineers and project managers will ensure your project is delivered on time and on budget.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second section - Full width content */}
        <div className="w-full">
          <Card className="border-none shadow-none">
            <CardContent className="p-0">
              <div className="pt-[9.3px] pb-[15px]">
                <h2 className="[font-family:'Inter_Var',sans-serif] font-bold text-[#1a1a1a] text-[48px] tracking-[-0.72px] leading-[57.6px] antialiased">
                  Let's Talk About Your
                  <br />
                  Next IT Project
                </h2>
              </div>
              <div className="mt-6 mb-8">
                <Separator className="w-[150px] h-1.5 bg-[#8a7cff] border-none" />
              </div>
              <div className="pt-0 pb-5 max-w-[800px]">
                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px]">
                  Contact Akrin today to see how our managed IT and consulting services can accelerate your next project. Our team is ready to discuss your specific needs and develop a tailored solution that addresses your unique challenges.
                </p>
                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#0b1f15] text-lg tracking-[0.27px] leading-[31.0px] mt-6">
                  Whether you're planning a major infrastructure upgrade, office move, or need to enhance your business continuity capabilities, we have the expertise and experience to help you succeed.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
