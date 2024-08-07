// src/components/Hero2/index.tsx

"use client"; // Add this directive to mark the component as a Client Component

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero2 = () => {
  const [text, setText] = useState("About us");

  useEffect(() => {
    const texts = ["About us", "About Mustanggg", "What We Do"];
    let index = 0;

    const textLoad = () => {
      setText(texts[index]);
      index = (index + 1) % texts.length;
    };

    textLoad();
    const interval = setInterval(textLoad, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <video
        className="absolute inset-0 z-[-1] h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="Video2.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 z-[-1] bg-black opacity-60"></div>
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="h-full w-full px-4 lg:h-[70vh]">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-[#Dc143c] dark:text-[#dc143c] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {text}
              </h1>
              <p
                className="mb-12 font-serif text-[20px] !leading-relaxed  text-[#fff] dark:text-[#fff] sm:text-lg md:text-[28px]"
                style={{
                  fontStyle: "italic",
                }}
              >
                we offer intelligence and recovery services globally From
                internet scams to investment fraud, trust us to uncover the
                truth and reclaim your assets.
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="#about"
                  className=" bg-transparent  font-bold text-white duration-300 ease-in-out hover:bg-transparent"
                  style={{
                    border: "1px solid #fff",
                    padding: "8px 38px",
                    borderRadius: "30px",
                    marginTop: "20px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M22.8893 72.3303C50.6599 66.4798 118.397 64.9086 167.178 105.427C228.155 156.076 246.59 162.093 281.333 166.607C316.076 171.12 354.718 183.657 379.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M62.8893 72.3303C90.6599 66.4798 158.397 64.9086 207.178 105.427C268.155 156.076 286.59 162.093 321.333 166.607C356.076 171.12 394.718 183.657 419.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="184.389"
              y1="212.24"
              x2="184.389"
              y2="64.4395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.24" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="161.389"
              y1="212.24"
              x2="161.389"
              y2="64.4395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.24" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="206.389"
              y1="212.24"
              x2="206.389"
              y2="64.4395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.24" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Hero2;
