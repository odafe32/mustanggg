import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/trustpilot1.webp"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/trustPilot.webp"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="trustpilot-widget mb-9">
                <h2 className="mb-14 text-[36px] font-bold text-black  dark:text-white sm:text-[40px] lg:text-[50px] ">
                  Review Us On
                </h2>
                <a
                  href="https://www.trustpilot.com/review/mustanggg.com"
                  target="blank"
                  className="tra mt-6 flex flex-row  px-6  py-3 text-[27px] text-[#000] hover:bg-[#000] hover:text-[#fff] hover:*:border-lime-500 dark:text-[#fff]"
                  style={{
                    border: "2px solid #1a9b36",
                    transition: ".4s ease-in",
                    width: "200px",
                  }}
                >
                  <img src="/images/about/TrustIcon.svg" alt="icon" />
                  TrustPilot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
