import HeroSectionFour from "@/components/Hero/HeroSectionFour";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Question Page | Mustanggg",
  description: "This is About Page | FAQS",
  // other metadata
};

const Faqs = () => {
  return (
    <>
      <HeroSectionFour />
      <div className="container h-[100vh] p-20">
        <h5
          className="font-bold text-[#Dc143c]"
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          FREQUENTLY ASKED QUESTIONS FOR:
        </h5>
        <h2 className="pt-6 font-serif text-[40px]">
          Incident Response cases where there’s a financial loss (e.g. hack,
          theft, fraud, or scam): FAQS
        </h2>
      </div>
    </>
  );
};

export default Faqs;
