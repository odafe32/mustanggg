import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 dark:bg-[#000] sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, imageLight, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full  transition hover:opacity-100  "
      >
        <img
          style={{
            width: "120px",
          }}
          src={imageLight}
          alt={name}
          className="hidden dark:hidden"
        />
        <img
          style={{
            width: "120px",
          }}
          src={image}
          alt={name}
          className="block dark:hidden"
        />
      </a>
    </div>
  );
};
