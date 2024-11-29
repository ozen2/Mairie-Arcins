"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useScrollPosition from "../services/useScrollPosition";

import Arrow from "../../../public/arrow.svg";
import LogoArcins from "../../../public/logoArcinsWhite.svg";

export default function NavbarClient() {
  const [IsArrowClicked, SetIsArrowClicked] = useState(false);
  const [IsBurgerClicked, SetIsBurgerClicked] = useState(false);
  const [IsNavVisible, SetIsNavVisible] = useState(false);
  const [IsServicesClicked, SetIsServicesClicked] = useState(false);
  const [IsSubMenuClicked, SetIsSubMenuClicked] = useState(false);
  const [IsSubMenuVisible, SetIsSubMenuVisible] = useState(false);
  const [activeLink, SetActiveLink] = useState("link1");

  const scrollPosition = useScrollPosition();

  const navPosition = scrollPosition > 50 ? "top-5" : "top-28";

  const toggleNav = () => {
    if (!IsBurgerClicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    SetIsNavVisible(true);
    if (IsNavVisible) {
      setTimeout(() => {
        SetIsNavVisible(false);
        document.body.classList.remove("no-scroll");
      }, 500);
    }

    setTimeout(() => {
      SetIsBurgerClicked(!IsBurgerClicked);
    }, 1);
  };

  const toggleServices = () => {
    SetIsServicesClicked(true);
    if (SetIsServicesClicked) {
      setTimeout(() => {
        SetIsServicesClicked(!IsServicesClicked);
      }, 220);
    }
    SetIsArrowClicked(!IsArrowClicked);
    SetIsSubMenuVisible(true);
    if (IsSubMenuVisible) {
      setTimeout(() => {
        SetIsSubMenuVisible(false);
      }, 170);
    }
    setTimeout(() => {
      SetIsSubMenuClicked(!IsSubMenuClicked);
    }, 1);
  };

  const isOpen = IsBurgerClicked
    ? "bg-[--primary-color] absolute z-20 w-full h-full top-0 left-0 duration-500 ease-in-out items-start flex flex-col gap-10 lg:gap-2"
    : "bg-[--primary-color] absolute z-20 h-0 w-full top-0 left-0 -translate-y-[50rem] duration-700 ease-in-out items-start flex flex-col gap-10 lg:gap-2";

  const isVisible = IsNavVisible ? "block" : "hidden";

  const servicesOpen = IsServicesClicked ? "text-white" : "";

  const isSubVisible = IsSubMenuClicked
    ? "flex opacity-100 duration-300 rounded-xl flex-col gap-6 lg:gap-2 justify-around absolute top-10 lg:flex-row lg:bg-[--secondary-color] lg:rounded-full lg:mt-3 lg:px-4 lg:py-2 lg:left-1/2 lg:-translate-x-1/2"
    : "flex opacity-0 duration-300 rounded-xl flex-col gap-6 lg:gap-2 justify-around absolute top-10 lg:flex-row lg:bg-[--secondary-color] lg:left-1/2 lg:-translate-x-1/2";

  const isSubClicked = IsSubMenuVisible ? "block" : "hidden";

  return (
    <>
      <button onClick={toggleNav} className="burger-menu lg:hidden">
        <span
          className={
            IsBurgerClicked
              ? "bg-white h-1 w-8 z-50 open1 rounded-full"
              : "line1"
          }
        ></span>
        <span
          className={IsBurgerClicked ? "bg-white h-1 w-8 z-50 open2" : "line2"}
        ></span>
        <span
          className={
            IsBurgerClicked
              ? "bg-white h-1 w-8 z-50 open3 rounded-full"
              : "line3"
          }
        ></span>
      </button>
      <nav
        className={`${isOpen} ${isVisible} lg:fixed ${
          navPosition === "top-5" ? "lg:top-5" : "lg:top-28"
        } lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-0 lg:max-w-[62rem] lg:h-16 lg:bg-[--secondary-color] lg:flex lg:justify-center lg:items-center lg:rounded-full`}
      >
        <Image
          src={LogoArcins}
          alt=""
          width={100}
          className="mt-10 ml-10 z-50 self-start lg:hidden"
        />
        <span className="h-[0.05rem] w-[90vw] self-center mt-10 bg-[--secondary-color] lg:hidden"></span>
        <ul className="flex flex-col flex-wrap gap-10 md:flex-row md:flex-wrap lg:gap-0 lg:justify-between lg:px-2 lg:w-full">
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link1")}
              className={
                activeLink === "link1"
                  ? "mt-10 md:mt-0 ml-10 mr-10 text-white text-2xl lg:text-xl lg:ml-0 lg:mr-0 lg:px-4 lg:py-3 lg:bg-[--primary-color] lg:rounded-full"
                  : "mt-10 md:mt-0 ml-10 mr-10 text-white text-2xl lg:text-xl lg:ml-0 lg:mr-0 lg:px-4 lg:py-3"
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link2")}
              className={
                activeLink === "link2"
                  ? "text-white ml-10 text-2xl lg:text-xl lg:ml-0 lg:px-4 lg:py-3 lg:bg-[--primary-color] lg:rounded-full"
                  : "text-white ml-10 text-2xl lg:text-xl lg:ml-0 lg:px-4 lg:py-3"
              }
            >
              Actualités
            </Link>
          </li>
          <li>
            <div>
              <Link
                href={""}
                className={
                  IsSubMenuClicked
                    ? "text-white text-2xl ml-10 flex gap-4 relative pb-32 lg:pb-0 transition-all ease-in-out duration-300 lg:text-xl lg:ml-0 lg:px-4"
                    : "text-white text-2xl ml-10 flex gap-4 relative pb-0 lg:text-xl lg:ml-0 lg:px-4"
                }
                onClick={toggleServices}
              >
                Services
                <Image
                  alt=""
                  src={Arrow}
                  className={IsArrowClicked ? "w-2" : "w-2 rotate-90"}
                />
                <div className={`${isSubClicked} ${isSubVisible}`}>
                  <Link
                    href={""}
                    onClick={() => SetActiveLink("subLink1")}
                    className={
                      activeLink === "subLink1"
                        ? `text-lg lg:bg-[--primary-color] lg:rounded-full lg:px-4 lg:py-3 ${servicesOpen}`
                        : `text-lg lg:px-4 lg:py-3 ${servicesOpen}`
                    }
                  >
                    transports
                  </Link>
                  <Link
                    href={""}
                    onClick={() => SetActiveLink("subLink2")}
                    className={
                      activeLink === "subLink2"
                        ? `text-lg lg:bg-[--primary-color] lg:rounded-full lg:px-4 lg:py-3 ${servicesOpen}`
                        : `text-lg lg:px-4 lg:py-3 ${servicesOpen}`
                    }
                  >
                    transports
                  </Link>
                  <Link
                    href={""}
                    onClick={() => SetActiveLink("subLink3")}
                    className={
                      activeLink === "subLink3"
                        ? `text-lg lg:bg-[--primary-color] lg:rounded-full lg:px-4 lg:py-3 ${servicesOpen}`
                        : `text-lg lg:px-4 lg:py-3 ${servicesOpen}`
                    }
                  >
                    transports
                  </Link>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link4")}
              className={
                activeLink === "link4"
                  ? "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:py-3 lg:px-4 lg:bg-[--primary-color] lg:rounded-full"
                  : "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:px-4 lg:py-3"
              }
            >
              blablabla
            </Link>
          </li>
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link5")}
              className={
                activeLink === "link5"
                  ? "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:py-3 lg:px-4 lg:bg-[--primary-color] lg:rounded-full"
                  : "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:px-4 lg:py-3"
              }
            >
              blablabla
            </Link>
          </li>
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link6")}
              className={
                activeLink === "link6"
                  ? "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:py-3 lg:px-4 lg:bg-[--primary-color] lg:rounded-full"
                  : "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:px-4 lg:py-3"
              }
            >
              blablabla
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
