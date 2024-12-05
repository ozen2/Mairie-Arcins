"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import useScrollPosition from "../services/useScrollPosition";
import NavItem from "./NavItem";
import NavSubItem from "./NavItem";

import Arrow from "../../../public/arrow.svg";
import LogoArcins from "../../../public/logoArcinsWhite.svg";

export default function NavbarClient() {
  const [IsBurgerClicked, SetIsBurgerClicked] = useState(false);
  const [IsNavVisible, SetIsNavVisible] = useState(false);
  const [IsServicesClicked, SetIsServicesClicked] = useState(false);
  const [activeLink, SetActiveLink] = useState("link1");
  const [activeMenu, setActiveMenu] = useState(null);

  const scrollPosition = useScrollPosition();

  const navPosition = scrollPosition > 50 ? "top-5" : "top-28";

  const toggleNav = () => {
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

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const isOpen = IsBurgerClicked
    ? "bg-[--primary-color] absolute z-20 w-full h-[100rem] top-0 left-0 duration-500 ease-in-out items-start flex flex-col gap-10 lg:gap-2"
    : "bg-[--primary-color] absolute z-20 h-0 w-full top-0 left-0 -translate-y-[50rem] duration-700 ease-in-out items-start flex flex-col gap-10 lg:gap-2";

  const isVisible = IsNavVisible ? "block" : "hidden";

  const isSubVisible = (menu) =>
    activeMenu === menu
      ? "flex flex-col mt-5 opacity-100 mx-12 lg:mx-0 duration-300 rounded-xl gap-5 lg:gap-2 top-10 lg:flex-row lg:bg-[--secondary-color] lg:rounded-full lg:mt-3 lg:px-4 lg:py-2 lg:absolute lg:flex-wrap lg:w-full"
      : "flex opacity-0 duration-300 rounded-xl flex-col gap-5 lg:gap-2 top-10 lg:flex-row lg:bg-[--secondary-color] lg:absolute lg:w-full";

  const isSubClicked = (menu) => (activeMenu === menu ? "block" : "hidden");

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
          <NavItem
            IsSubMenuClicked={activeMenu === "presentation"}
            IsArrowClicked={activeMenu === "presentation"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Présentation"
            toggleMenu={() => toggleMenu("presentation")}
            divClassName={`${isSubClicked("presentation")} ${isSubVisible(
              "presentation"
            )}`}
            subMenus={[
              {
                name: ". Histoire et patrimoine",
                href: "/presentation/histoire",
              },
              { name: ". Plan google", href: "/presentation/equipe" },
              { name: ". Derniers recensement", href: "/presentation/vision" },
              { name: ". Équipements", href: "/presentation/vision" },
              { name: ". Actualité", href: "/presentation/vision" },
              { name: ". Évènements", href: "/presentation/vision" },
              { name: ". Arcins en images", href: "/presentation/vision" },
              {
                name: ". Plan communal de sauvegarde",
                href: "/presentation/vision",
              },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "mairie"}
            IsArrowClicked={activeMenu === "mairie"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Mairie"
            toggleMenu={() => toggleMenu("mairie")}
            divClassName={`${isSubClicked("mairie")} ${isSubVisible("mairie")}`}
            subMenus={[
              { name: "Histoire", href: "/mairie/histoire" },
              { name: "Équipe", href: "/mairie/equipe" },
              { name: "Vision", href: "/mairie/vision" },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "vivre"}
            IsArrowClicked={activeMenu === "vivre"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Vivre"
            toggleMenu={() => toggleMenu("vivre")}
            divClassName={`${isSubClicked("vivre")} ${isSubVisible("vivre")}`}
            subMenus={[
              { name: "Histoire", href: "/vivre/histoire" },
              { name: "Équipe", href: "/vivre/equipe" },
              { name: "Vision", href: "/vivre/vision" },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "famille"}
            IsArrowClicked={activeMenu === "famille"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Famille"
            toggleMenu={() => toggleMenu("famille")}
            divClassName={`${isSubClicked("famille")} ${isSubVisible(
              "famille"
            )}`}
            subMenus={[
              { name: "Histoire", href: "/famille/histoire" },
              { name: "Équipe", href: "/famille/equipe" },
              { name: "Vision", href: "/famille/vision" },
            ]}
          />
          <li>
            <Link
              href={""}
              onClick={() => SetActiveLink("link8")}
              className={
                activeLink === "link6"
                  ? "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:py-3 lg:px-4 lg:bg-[--primary-color] lg:rounded-full"
                  : "text-white text-2xl ml-10 lg:text-xl lg:ml-0 lg:px-4 lg:py-3"
              }
            >
              Mes démarches
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
