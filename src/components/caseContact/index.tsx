import React from "react";

const CaseContact = () => {
  return (
    <section className="center   flex h-auto  w-full  items-center justify-center bg-white dark:bg-black ">
      <div className="mt-20 flex flex-col pb-20">
        <div
          className="mb-12 flex h-auto w-full flex-col rounded bg-white p-4 dark:bg-black lg:h-[350px] lg:w-[550px]"
          style={{
            boxShadow: "0px -1px 74px -21px rgba(0, 0, 0, 0.75)",
          }}
        >
          <h2 className="mb-4 pt-14 text-center text-[16px] font-bold uppercase text-[#dc143c] dark:text-[#be1e3e]">
            Open a case with Mustang
          </h2>
          <h1 className="text-center font-serif text-[26px] font-semibold leading-[40px] lg:text-[30px]">
            One of our specialists will get <br />
            back to you shortly.
          </h1>
          <a href="/contact" className="mt-6 text-center">
            <button className="bg-[#000000] px-[40px] py-[15px] text-[20px] font-semibold uppercase text-white hover:bg-[#1f060b] dark:bg-[#e2e2e2] dark:text-dark">
              Open a case
            </button>
          </a>
        </div>

        <div className="flex h-auto w-full flex-col  bg-white p-4 dark:bg-black  lg:w-[550px]">
          <h1
            className="text-center"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "22px",
              fontWeight: "300",
              letterSpacing: "2px",
              lineHeight: "20px",
              paddingBottom: "30px",
            }}
          >
            MUSTAN
            <img
              src="/images/logo/logoBlack.png"
              alt="logo"
              style={{
                width: "20px",
              }}
              className="w-full dark:hidden"
            />
            <img
              src="/images/logo/logoWhite.png"
              alt="logo"
              className="hidden w-full dark:block"
              style={{
                width: "20px",
              }}
            />
          </h1>

          <p
            className="text-center font-serif text-[25px]"
            style={{
              fontStyle: "italic",
            }}
          >
            "Cybercrime sleuths tracking cryptocurrency in numerous cases. As
            seasoned experts, we offer intelligence, investigative, and asset
            recovery services across jurisdictions. If you have been a victim of
            an internet scam or organised fraud such as investment fraud,
            cryptocurrency scams, fake online forex trading or securities fraud,
            we're here for you."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseContact;
