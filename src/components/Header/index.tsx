"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import Head from "next/head";
import { motion } from "framer-motion";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    const scrollThreshold = window.innerWidth <= 901 ? 0 : 100; // Change the condition based on screen width
    if (window.scrollY >= scrollThreshold) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    handleStickyNavbar(); // Ensure initial state matches
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const usePathName = usePathname();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="AT Mustang We provide global investigative services with a focus on asset recovery. Enquire now."
        />
        <link rel="canonical" href="https://www.mustanggg.com" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Mustang Global" />
        <meta
          property="og:description"
          content="Mustang is a global expert in combating fake charities, helping victims to investigate the fraud and gather evidence to recover their assets. Enquire now."
        />
        <meta property="og:url" content="https://www.mustanggg.com/" />
        <meta property="og:site_name" content="MUSTANG" />
        <meta
          property="article:modified_time"
          content="2023-11-21T00:09:19+00:00"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="shortcut icon"
          href="/images/logo/logoCrimson.png"
          type="image/x-icon"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon/android-chrome-192x192/png"
        />
        <title>Mustang | Home | Fund Recovery</title>
      </Head>
      <motion.header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-90 shadow-sticky backdrop-blur-sm transition dark:bg-[#000] dark:shadow-sticky-dark"
            : "absolute bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <motion.h1
                  className={`flex flex-row text-[22px] font-semibold leading-[20px] tracking-[2px] ${
                    sticky ? "text-black dark:text-white" : "text-white"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  MUSTAN
                  <img
                    src={
                      sticky
                        ? "/images/logo/logoCrimson.png"
                        : "/images/logo/logoWhite.png"
                    }
                    alt="logo"
                    className="w-[20px]"
                  />
                </motion.h1>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-[#Dc143c] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <motion.nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-[#000] lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <motion.li
                        key={index}
                        className="group relative"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "text-[#Dc143c] dark:text-white"
                                : sticky
                                  ? "text-black dark:text-white/70"
                                  : "text-white dark:text-white/70"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className={`flex cursor-pointer items-center justify-between py-2 text-base group-hover:text-[#Dc143c] lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                                sticky
                                  ? "text-black dark:text-white/70"
                                  : "text-white dark:text-white/70"
                              }`}
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <motion.div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-[#000] lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {menuItem.submenu.map((submenuItem, index) => (
                                <Link
                                  href={submenuItem.path}
                                  key={index}
                                  className="block rounded py-2.5 text-sm text-[#000] hover:text-[#Dc143c] dark:text-white/70 dark:hover:text-white lg:px-3"
                                >
                                  {submenuItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          </>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </motion.nav>
              </div>
              <Link
                className="flex items-center justify-end"
                href="https://www.facebook.com/profile.php?id=61563112247554"
                target="blank"
              >
                <img
                  className="block w-[20px] dark:hidden"
                  src="/images/logo/facebookLight.svg"
                  alt="logo"
                />
                <img
                  className="hidden w-[20px] dark:block"
                  src="/images/logo/facebookDark.svg"
                  alt="logo"
                />
              </Link>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                <a
                  href="/contact"
                  style={{
                    textTransform: "uppercase",
                    fontSize: "12px",
                  }}
                  className="ease-in-up hidden rounded-sm bg-[#Dc143c] px-3 py-3 text-base font-[600] text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-5 lg:px-4 xl:px-5"
                >
                  send us a message
                </a>
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
