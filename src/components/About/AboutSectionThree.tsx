import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionThree = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Investigations, Intelligence, Asset Recovery."
                paragraph="With 200+ successful investigations and 150+ satisfied clients"
                mb="44px"
              />
              <h3 className="text-[22px] font-bold text-[#Dc143c]">
                DEDICATED TO RECOVER YOUR ASSETS
              </h3>

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <p className="pb-8">
                    We deliver unparalleled services that stand as a beacon of
                    distinction in the market. Recognizing the constraints faced
                    by law enforcement agencies in precisely locating suspects
                    and dismantling their illicit operations, MUSTANG has
                    cultivated a corporate culture characterized by alertness
                    and unwavering focus. Our commitment is evident in our
                    approach to every case, where a heightened sense of urgency
                    and sensitivity prevails.
                  </p>
                  <p className="pb-8">
                    Our core competencies lie in the realms of Investigations,
                    Intelligence, and Asset Recovery. Delving into the intricate
                    internal structures of these groups demands a profound
                    investigative undertaking. Whether the objective involves
                    dismantling an illegal peer network, eradicating counterfeit
                    activities, or orchestrating the successful recovery of
                    assets lost to fraud, the key lies in amassing a substantial
                    body of evidence capable of transforming investigative
                    results into actionable intelligence. In recognizing the
                    distinct nature of each case, we eschew &apos;fit-all
                    solutions,&apos; acknowledging their inadequacy in
                    delivering the desired outcome.
                  </p>
                  <p className="pb-8">
                    IMUSTANG stands apart by offering clients a methodical
                    process – a well-defined sequence of actions that adhere to
                    a systematic and meticulous procedure. This approach, proven
                    successful throughout Mustang Global&apos;s history,
                    provides not only a framework but also the adaptability
                    required for each unique situation, ensuring our clients
                    receive tailored solutions attuned to their specific needs.
                  </p>

                  <p className="pb-8 italic text-[#333] dark:text-[#fff]">
                    &quot; Global experts in cybercrime investigations and
                    cryptocurrency recovery. From internet scams to investment
                    fraud, trust us to uncover the truth and reclaim your
                    assets. &quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/blockchain.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/blockchain.jpg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:flex-row">
          <div className="group relative w-full overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark lg:w-[500px]">
            <a className="relative block aspect-[37/22] w-full">
              <img
                src="/images/about/team-2.jpg"
                className="w-full"
                alt="image"
              />
            </a>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3>
                <a className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-2xl">
                  John Watson <br />
                  <span className="text-[#Dc143c]">Executive Chairman</span>
                </a>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                John Watson is the co-founder and current Executive Chairman of
                MUSTANG. He is a front-line cybercrime investigator with
                extensive qualifications and experience in investigation,
                intelligence, surveillance and asset recovery, developed over a
                19-year career.
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"></div>
              </div>
            </div>
          </div>
          <div className="group relative w-full overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark lg:w-[500px]">
            <a className="relative block aspect-[37/22] w-full">
              <img
                src="/images/about/team4.jpg"
                className="w-full"
                alt="image"
              />
            </a>
            <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3>
                <a className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white sm:text-2xl">
                  Naomi Haruto <br />
                  <span className="text-[#Dc143c]">Special Advisor</span>
                </a>
              </h3>
              <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
                Dr Naomi Haruto is a Special Advisor to MUSTANG and a Professor
                of Cybersecurity and Behaviour at Western Sydney University. She
                is an expert in cybercrime, privacy, telecommunications, and
                cybersecurity. She has worked on projects for both the Canadian
                and Australian governments, advises to industry, and is often in
                the media.
              </p>
              <div className="flex items-center">
                <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
