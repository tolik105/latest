"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export function LogosWithBlurFlip() {
  const [logos, setLogos] = useState([
    [
      {
        name: "Microsoft",
        src: "https://img.logo.dev/microsoft.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "Cisco",
        src: "https://img.logo.dev/cisco.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "VMware",
        src: "https://img.logo.dev/vmware.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "AWS",
        src: "https://img.logo.dev/aws.amazon.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
    ],
    [
      {
        name: "Google Cloud",
        src: "https://img.logo.dev/cloud.google.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "Dell Technologies",
        src: "https://img.logo.dev/dell.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "HP Enterprise",
        src: "https://img.logo.dev/hpe.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "Fortinet",
        src: "https://img.logo.dev/fortinet.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
    ],
    [
      {
        name: "Palo Alto Networks",
        src: "https://img.logo.dev/paloaltonetworks.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "Lenovo",
        src: "https://img.logo.dev/lenovo.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "Veeam",
        src: "https://img.logo.dev/veeam.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
      {
        name: "ServiceNow",
        src: "https://img.logo.dev/servicenow.com?token=pk_UEr0qEZTRlmPOWFTe-G1XA",
      },
    ],
  ]);
  const [activeLogoSet, setActiveLogoSet] = useState(logos[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flipLogos = () => {
    setLogos((currentLogos) => {
      const newLogos = [...currentLogos.slice(1), currentLogos[0]];
      setActiveLogoSet(newLogos[0]);
      setIsAnimating(true);
      return newLogos;
    });
  };

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        flipLogos();
      }, 4000); // Slightly longer delay for better readability
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="relative z-20 px-4 py-12 md:px-8 md:py-24">
      <h2 className="bg-gradient-to-b from-purple-900 to-purple-600 bg-clip-text text-center font-sans text-2xl font-bold text-transparent md:text-4xl dark:from-purple-400 dark:to-purple-600">
        Technology Partners & Integrations
      </h2>
      <p className="mt-6 text-center font-sans text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Trusted partnerships with leading technology vendors to deliver enterprise-grade solutions that power your digital transformation.
      </p>
      <div className="relative mt-20 flex h-full w-full flex-wrap justify-center gap-10 md:gap-10">
        <AnimatePresence
          mode="popLayout"
          onExitComplete={() => {
            setIsAnimating(false);
          }}
        >
          {activeLogoSet.map((logo, idx) => (
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
              transition={{
                duration: 0.8,
                delay: 0.1 * idx,
                ease: [0.4, 0, 0.2, 1],
              }}
              key={logo.name + idx + "logo-flip"}
              className="relative"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width="100"
                height="100"
                className="h-10 w-20 object-contain filter md:h-20 md:w-40 dark:invert"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
