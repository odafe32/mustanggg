import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";

import Hero2 from "@/components/Hero/hero2";
import ElementOne from "@/components/mainElement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Mustanggg",
  description: "About Us",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <ElementOne />
      <ScrollUp />
      <Hero2 />
      <Breadcrumb
        pageName="About Page"
        description="Cybercrime sleuths tracking cryptocurrency in numerous cases. As seasoned experts, we offer intelligence, investigative, and asset recovery services across jurisdictions. If you have been a victim of an internet scam or organised fraud such as investment fraud, cryptocurrency scams, fake online forex trading or securities fraud, we're here for you."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <Features />
      <Brands />
    </>
  );
};

export default AboutPage;
