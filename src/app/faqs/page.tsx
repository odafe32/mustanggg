import HeroSectionFour from "@/components/Hero/HeroSectionFour";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Question Page | Mustanggg",
  description: "This is FAQS | FAQS",
  // other metadata
};

const Faqs = () => {
  const faqs = [
    {
      question: "Can you help me with (scam or hack?)",
      answer:
        "Please email Contact@mustang.com with a paragraph or two summarizing what happened, focusing on the facts (not theory, not your own investigation, etc.) and, most importantly, include the blockchain transactions. Make sure the transaction data is in a copy and pasteable format (ideally plaintext or otherwise a csv file) — we can’t do a preliminary analysis, can’t advise if it’s a viable case for us to engage on, and can’t provide a retainer estimate or you can send us a message via whatsapp OR VIA LIVE CHAT",
    },
    {
      question: "What makes Mustang Global's services unique in the market?",
      answer:
        "Mustang Global distinguishes itself by providing unparalleled services that stand out in terms of quality and effectiveness. Our commitment to a culture of alertness and focus ensures that each case is handled with urgency and sensitivity.",
    },
    {
      question:
        "Can you recover my funds? What are the odds of recovering funds in my situation?",
      answer:
        "MUSTANG is an investigative agency, and a recovery agency. We investigate and produce intelligence. Typically, this information is then passed to law enforcement in your jurisdiction. This may or may not lead to recovery with the help of law enforcement (partial recovery is much more common than full recovery). We assess each case that meets our criteria (including the minimum loss threshold) individually, and offer an (honest) opinion of whether or not it may be worth pursuing and/or engaging us. In some cases, we will still advise against pursuing or decline to engage even if the minimum loss threshold is met if we don’t feel it’s in the best interest of a prospective client to hire us.",
    },
    {
      question:
        "How does Mustang Global assist law enforcement agencies in pinpointing suspects and their illegal operations?",
      answer:
        "We support law enforcement agencies by overcoming restrictions through our expertise in Investigations, Intelligence, and Asset Recovery. Our proactive approach enables precise location identification and dismantling of illicit operations.",
    },
    {
      question:
        "Do you charge upfront, or will you work for [contingency percent offered] only?",
      answer:
        "We have more people willing to pay us upfront than we can service; it would not make business sense to take any case on a contingency-only basis. We already factor a modest contingency into our pricing.",
    },
    {
      question:
        "A bunch of people I know got scammed as part of a large scam / rug pull / hack. Can you help?",
      answer:
        "We take clients on an individual or company basis — as in, we don’t do group or “pool” cases with a bunch of other purported victims you met on Telegram. If somebody -individually- lost $100K+, it may be a good mutual fit.",
    },
    {
      question:
        "A wallet of mine has been compromised and currently has funds that are 'locked' due to unstaking periods or vesting periods. I'm concerned the hacker may withdraw the funds from the wallet as soon as they become available to be transferred, and additionally may be concerned about the hacker using a 'flashbot' that would be able to access the funds faster than I could",
      answer:
        "Depending on the amounts staked/locked, this is something we may be able to help out. CipherBlade does sometimes employ automated solutions or ‘bots’ as well in some cases, which have historically been able to out-compete other bots.",
    },
    {
      question: "What is the core focus of Mustang Global's expertise?",
      answer:
        "Mustang Global specializes in Investigations, Intelligence, and Asset Recovery, addressing a spectrum of challenges from shutting down illegal networks to recovering assets lost to fraud.",
    },
    {
      question:
        "How does Mustang Global approach understanding the internal structures of illicit groups?",
      answer:
        "In-depth investigative work is at the heart of our approach. Whether it's shutting down illegal peer networks or removing counterfeits, we emphasize building substantial evidence crucial for actionable intelligence.",
    },
    {
      question:
        "How does Mustang Global ensure adaptability to individual cases?",
      answer:
        " Mustang Global's approach is not a predetermined product but a methodical process. Each element is constantly adjusted to the specific situation, allowing for easy adaptability and ensuring tailored solutions for clients.",
    },
  ];

  return (
    <>
      <HeroSectionFour />
      <div
        className="container h-full p-2  lg:p-20"
        style={{
          paddingTop: "30px",
        }}
      >
        <h5
          className="font-bold text-[#Dc143c]"
          style={{
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}
        >
          FREQUENTLY ASKED QUESTIONS FOR:
        </h5>
        <h2 className="pt-6 font-serif text-[24px]  lg:text-[40px]">
          Incident Response cases where there’s a financial loss (e.g. hack,
          theft, fraud, or scam): FAQS
        </h2>

        <div className="mx-auto mt-[100px] h-full px-5 dark:bg-[#000]">
          <div className="flex flex-col items-center">
            <p
              className="mt-3 text-xl text-neutral-500 dark:text-[#ccc]"
              style={{
                letterSpacing: "3px",
              }}
            >
              Frequently asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-full  divide-y divide-neutral-200 lg:max-w-[60rem]">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-semibold dark:font-medium">
                      {faq.question}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 dark:text-[#ccc]">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
