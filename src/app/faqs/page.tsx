import HeroSectionFour from "@/components/Hero/HeroSectionFour";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Question Page | Mustanggg",
  description: "This is About Page | FAQS",
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
      question: "How does billing work?",
      answer:
        "We offer a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
      question: "Can I get a refund for my subscription?",
      answer:
        "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your We subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
    },
    {
      question: "Can I try this platform for free?",
      answer:
        "We offer a free trial of its platform for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
    },
    {
      question: "How do I access documentation?",
      answer:
        "Documentation is available on the company's website and can be accessed by logging in to your account. The documentation provides detailed information on how to use the platform, as well as code examples and other resources.",
    },
    {
      question: "How do I contact support?",
      answer:
        "If you need help with the platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@We.com.",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer:
        "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
    },
    {
      question: "How do we compare to other similar services?",
      answer:
        "This platform is a highly reliable and feature-rich service that offers a wide range of tools and functionality. It is competitively priced and offers a variety of billing options to suit different needs and budgets.",
    },
  ];

  return (
    <>
      <HeroSectionFour />
      <div className="container h-full p-20">
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

        <div className="mx-auto mt-[100px] h-full bg-white px-5">
          <div className="flex flex-col items-center">
            <p
              className="mt-3 text-xl text-neutral-500"
              style={{
                letterSpacing: "3px",
              }}
            >
              Frequently asked questions
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-[60rem] divide-y divide-neutral-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold">{faq.question}</span>
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
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
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
