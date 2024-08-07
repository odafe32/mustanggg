import HeroSectionFour from "@/components/Hero/HeroSectionFour";
import React from "react";
import { Metadata } from "next";
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "Testimonial Page | Mustanggg",
  description: "Reviews About Mustang | Reviews",
  // other metadata
};

const testimonials = [
  {
    name: "Maria Arnold",
    text: "I am grateful to this company for rescuing me from a potential scam involving a fake binary trading platform named CashFX Reporting my case to them proved to be a crucial step, and I am pleased to recommend their services. They have my highest endorsement.",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: "Helen John",
    text: "Thanks guy I got my funds recovered am so happy. God bless you guys. I highly recommend this company.",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: " Anuradha Vijay",
    text: "I was a victim some fake platform Called lexatrade.com as I lost over $109,450 to them I was so desperate in getting my funds recovered. I was told by me Silbert to visit to mustanggg.com for Great help and assistance in getting my funds recovered. I visited them and they where very helpful as I was able to get all I lost. This platform is highly recommended by me as I was helped by them. Thanks Guys.",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: " Sarah Morgan",
    text: "Thanks guys. Putting my money into lexatrade.com was a thorn in my life i lost more that $1,000 to ivestment scam. I was referred to Mustang by a friend of mine and am glad you guys could help thanks a lot",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: " Sanchez Mcabert",
    text: "Cautionary Note: I strongly advise against investing in Globalfx.com, and I recommend reading reviews before considering any involvement with this platform. Unfortunately, my experience with them has been highly negative as it appears to be a significant scam. Despite a seemingly pleasant initial conversation and promising early profits, the reality is that there is no option for withdrawal without obtaining their consent. Regrettably, I fell victim to a phishing scheme where a con artist stole my wallet, resulting in the loss of 2.8 BTC. In a stroke of luck, I managed to recover my misplaced funds by reaching out to mustanggg.com I urge everyone to exercise caution and remain vigilant in dealing with such platforms.",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: " Sanchez Mcabert",
    text: "Cautionary Note: I strongly advise against investing in Globalfx.com, and I recommend reading reviews before considering any involvement with this platform. Unfortunately, my experience with them has been highly negative as it appears to be a significant scam. Despite a seemingly pleasant initial conversation and promising early profits, the reality is that there is no option for withdrawal without obtaining their consent. Regrettably, I fell victim to a phishing scheme where a con artist stole my wallet, resulting in the loss of 2.8 BTC. In a stroke of luck, I managed to recover my misplaced funds by reaching out to mustanggg.com I urge everyone to exercise caution and remain vigilant in dealing with such platforms.",
    image: "/images/logo/logoCrimson.png",
  },
  {
    name: "Bray David",
    text: "I want to express my gratitude for the incredible support. Your team is truly amazing. Just when I was on the verge of giving up hope on recovering my funds, Mustang stepped in and successfully saved me from falling victim to the Expertoption scam. Thank you for your outstanding assistance.",
    image: "/images/logo/logoCrimson.png",
  },
];

const Testimonials = () => {
  return (
    <div>
      <HeroSectionFour />

      <section id="testimonies" className=" py-20">
        <div className="mx-8 max-w-6xl md:mx-10 lg:mx-20 xl:mx-auto">
          <div className="translate-x-0 translate-y-0 scale-100 transform opacity-100 transition duration-500 ease-in-out">
            <div className="mb-12 space-y-5 md:mb-16 md:text-center">
              <div className="text-cn inline-block rounded-lg bg-dark bg-opacity-60 px-3 py-1 text-sm font-semibold text-dark hover:cursor-pointer hover:bg-opacity-40 dark:text-white md:text-center">
                Words from Others
              </div>
              <h1 className="mb-5 text-3xl font-semibold text-dark  dark:text-white  md:text-center md:text-5xl">
                It's not just us.
              </h1>
              <p className="text-xl text-dark  dark:text-white  md:text-center md:text-2xl">
                Here's what others have to say about us.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="duration-400 absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition group-hover:opacity-100 group-hover:duration-200"></div>
                <a className="cursor-pointer">
                  <div className="relative space-y-6 rounded-lg bg-slate-800 p-6 leading-none ring-1 ring-gray-900/5 dark:bg-black">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.image}
                        className="h-12 w-12 rounded-full border bg-cover bg-center"
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {testimonial.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-md leading-normal text-gray-300">
                      {testimonial.text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Video /> */}
    </div>
  );
};

export default Testimonials;
