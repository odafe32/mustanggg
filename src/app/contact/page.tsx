import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Mustanggg",
  description: "This is Contact Page | Mustanggg",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Email: contact@mustanggg.com | Tel:  +1 (334) 679-5376"
      />
      <div className="container">
        <h3 className="font-serif text-[30px] font-bold text-[#Dc143c]">
          !Please Note
        </h3>
        <li className="m-2 rounded bg-[#ccc] p-4 text-[#333] dark:bg-dark dark:text-[#ccc]">
          Our typical response time is 24 hours or faster during working hour
        </li>
        <li className="m-2 rounded bg-[#ccc] p-4 text-[#333] dark:bg-dark dark:text-[#ccc]">
          YOU CAN REACH US VIA ANY OF THE TOUCH POINTS | LIVE CHAT | WHATSAPP
        </li>
        <li className="m-2 rounded bg-[#ccc] p-4 text-[#333] dark:bg-dark dark:text-[#ccc]">
          {" "}
          We treat all provided information as strictly confidential.
        </li>
        <li className="m-2 rounded bg-[#ccc] p-4 text-[#333] dark:bg-dark dark:text-[#ccc]">
          Verify that you are speaking to Mustanggg by checking to make sure
          emails are signed by mustanggg.com which is the only legitimate
          mustanggg website.
        </li>

        <li className="m-2 rounded bg-[#ccc] p-4 text-[#333] dark:bg-dark dark:text-[#ccc]">
          Please review our Frequently Asked Questions prior to submission.
        </li>
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
