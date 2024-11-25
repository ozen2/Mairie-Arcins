"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Arrow from "../../../public/arrow.svg";
import LogoArcins from "../../../public/logoArcinsWhite.svg";

export default function NavbarClient() {
  const [IsArrowClicked, SetIsArrowClicked] = useState(false);
  const [IsBurgerClicked, SetIsBurgerClicked] = useState(false);
  const [IsNavVisible, SetIsNavVisible] = useState(false);
  const [IsServicesClicked, SetIsServicesClicked] = useState(false);
  const [IsSubMenuClicked, SetIsSubMenuClicked] = useState(false);
  const [IsSubMenuVisible, SetIsSubMenuVisible] = useState(false);

  const toggleNav = () => {
    SetIsNavVisible(true);
    if (IsNavVisible) {
      setTimeout(() => {
        SetIsNavVisible(false);
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
    ? "bg-[--primary-color] absolute z-20 w-full h-full top-0 left-0 flex flex-col duration-500 ease-in-out gap-10 items-start"
    : "bg-[--primary-color] absolute z-20 h-0 w-full top-0 left-0 -translate-y-[50rem] duration-700 ease-in-out flex flex-col gap-10 items-start";

  const isVisible = IsNavVisible ? "block" : "hidden";

  const servicesOpen = IsServicesClicked ? "text-white" : "";

  const isSubVisible = IsSubMenuClicked
    ? "flex opacity-100 duration-300 rounded-xl flex-wrap flex-col gap-5 justify-around absolute top-10"
    : "flex opacity-0 duration-300 rounded-xl flex-wrap flex-col gap-5 justify-around absolute top-10";

  const isSubClicked = IsSubMenuVisible ? "block" : "hidden";

  return (
    <>
      <button onClick={toggleNav} className="burger-menu">
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
      <nav className={`${isOpen} ${isVisible}`}>
        <Image
          src={LogoArcins}
          alt=""
          width={100}
          className="mt-10 ml-10 z-50 self-start"
        />
        <span className="h-[0.05rem] w-72 md:w-5/6 self-center mt-10 bg-[--secondary-color]"></span>
        <Link href={""} className="mt-10 ml-10 text-white text-2xl">
          Accueil
        </Link>
        <Link href={""} className="text-white ml-10 text-2xl">
          Actualités
        </Link>
        <div
          className={
            IsSubMenuClicked
              ? "pb-32 transition-all ease-in-out duration-300"
              : "pb-0 transition-all ease-in-out duration-300"
          }
        >
          <Link
            href={""}
            className={"text-white text-2xl ml-10 flex gap-4 relative"}
            onClick={toggleServices}
          >
            Services
            <Image
              alt=""
              src={Arrow}
              className={IsArrowClicked ? "w-2" : "w-2 rotate-90"}
            />
            <div className={`${isSubClicked} ${isSubVisible}`}>
              <Link href={""} className={`text-xl ${servicesOpen}`}>
                transports
              </Link>
              <Link href={""} className={`text-xl ${servicesOpen}`}>
                transports
              </Link>
              <Link href={""} className={`text-xl ${servicesOpen}`}>
                transports
              </Link>
            </div>
          </Link>
        </div>
        <Link href={""} className="text-white text-2xl ml-10">
          blablabla
        </Link>
      </nav>
    </>
  );
}
