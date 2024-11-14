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
    SetIsServicesClicked(!IsServicesClicked);
    SetIsArrowClicked(!IsArrowClicked);
  };

  const isOpen = IsBurgerClicked
    ? "bg-[--primary-color] absolute z-20 w-full h-full top-0 left-0 flex flex-col duration-500 ease-in-out gap-10 items-start"
    : "bg-[--primary-color] absolute z-20 h-0 w-full top-0 left-0 -translate-y-[50rem] duration-700 ease-in-out flex flex-col gap-10 items-start";

  const isVisible = IsNavVisible ? "block" : "hidden";

  const servicesOpen = IsServicesClicked
    ? "block ml-10 text-white text-xl"
    : "hidden";

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
          className="mt-10 ml-10 z-50"
        />
        <Link href={""} className="mt-20 ml-10 text-white text-2xl">
          Accueil
        </Link>
        <Link href={""} className="text-white ml-10 text-2xl">
          Actualités
        </Link>
        <Link
          href={""}
          className="text-white ml-10 text-2xl flex w-screen justify-between"
          onClick={toggleServices}
        >
          Services
          <Image
            src={Arrow}
            className={IsArrowClicked ? "w-2 mr-20 rotate-90" : "w-2 mr-20"}
          />
        </Link>
        <Link href={""} className={servicesOpen}>
          transports
        </Link>
        <Link href={""} className={servicesOpen}>
          transports
        </Link>
        <Link href={""} className={servicesOpen}>
          transports
        </Link>
        <Link href={""}>Services</Link>
      </nav>
    </>
  );
}
