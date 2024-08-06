import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container ">
          <div className="mb-16">
            <h5
              className="text-center font-sans text-[18px] font-semibold uppercase text-[#Dc143c] sm:text-[21px] lg:text-[24px]"
              style={{
                letterSpacing: "4px",
              }}
            >
              Our solutions
            </h5>
            <h2 className="text-center text-[23px] sm:text-[28px] lg:text-[36px]">
              Empowering Recovery, Unraveling Deception.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
