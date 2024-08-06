import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import CaseContact from "@/components/caseContact";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ElementOne from "@/components/mainElement";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mustanggg",
  description:
    "AT Mustang We provide global investigative services with a focus on asset recovery. Enquire now.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ElementOne />
      <ScrollUp />
      <Hero />
      <CaseContact />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Features />
      <Video />
      <Brands />
      <Blog />
      <Contact />
    </>
  );
}
