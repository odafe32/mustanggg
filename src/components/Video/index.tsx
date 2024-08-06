"use client";

const Video = () => {
  return (
    <section className="h-full bg-[#ffd062] dark:bg-[#ffbb1d] lg:h-[90vh]">
      <div className="container pb-12 ">
        <div className="flex flex-col pt-[100px] md:flex-row">
          <div className=" mb-6 md:mb-0 md:w-1/3">
            <h2 className="text-[30px] font-bold text-[#000]">
              Success Stories
            </h2>
            <p className="mt-4 font-semibold text-[#000]">
              ANDREA MATHIEU - MONTREAL, CANADA
            </p>
            <p className="text-black">Investment Scam</p>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-[#000]">
              " I engaged MUSTANG's services to recover my AUD $700,000
              Thousands investment lost in a boiler room share market scam.
              MUSTANG efficiently traced the fraudsters linked to my investment
              and facilitated their arrest in Ghana. Subsequently, we
              successfully froze their assets and reached a financial
              settlement, ultimately leading to the full recovery of my invested
              funds and related expenses. This experience was transformative,
              allowing me to regain my investment and restore my financial
              standing. Gratitude to MUSTANG for their unwavering commitment in
              pursuing those responsible for the criminal activity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
