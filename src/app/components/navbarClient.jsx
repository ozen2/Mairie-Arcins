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
      ? "flex flex-col mt-5 opacity-100 mx-12 lg:mx-0 duration-300 rounded-full gap-5 lg:gap-10 top-[4.5rem] lg:flex-row lg:bg-[--secondary-alternative-color] lg:rounded-lg lg:mt-0 lg:py-4 lg:absolute lg:flex-wrap lg:w-auto lg:left-0 lg:justify-center lg:px-2"
      : "flex opacity-0 duration-300 rounded-full flex-col gap-5 top-10 lg:flex-row lg:bg-[--secondary-color] lg:absolute lg:w-full";

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
                name: "Histoire et patrimoine",
                href: "/presentation/histoire",
              },
              { name: "Plan google", href: "/presentation/equipe" },
              { name: "Derniers recensement", href: "/presentation/vision" },
              { name: "Équipements", href: "/presentation/vision" },
              { name: "Actualité", href: "/presentation/vision" },
              { name: "Évènements", href: "/presentation/vision" },
              { name: "Arcins en images", href: "/presentation/vision" },
              {
                name: "Plan communal de sauvegarde",
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
              { name: "Actualités", href: "/mairie/histoire" },
              { name: "Agenda", href: "/mairie/equipe" },
              { name: "Services municipaux", href: "/mairie/vision" },
              { name: "Le conseil", href: "/mairie/histoire" },
              { name: "Services", href: "/mairie/equipe" },
              { name: "Intercommunalité", href: "/mairie/vision" },
              { name: "Magazines municipaux", href: "/mairie/histoire" },
              { name: "Budget communal", href: "/mairie/equipe" },
              { name: "Marches publiques", href: "/mairie/vision" },
              { name: "Cimetière", href: "/mairie/vision" },
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
              { name: "Commerces", href: "/vivre/histoire" },
              { name: "Restaurants", href: "/vivre/equipe" },
              { name: "Artisans", href: "/vivre/vision" },
              { name: "Visites et découvertes", href: "/vivre/histoire" },
              { name: "Randonnées", href: "/vivre/equipe" },
              { name: "Chateaux", href: "/vivre/vision" },
              { name: "Enfance / jeunesse", href: "/vivre/histoire" },
              { name: "Éducation", href: "/vivre/equipe" },
              { name: "Sport / culture / loisirs", href: "/vivre/vision" },
              { name: "Transports", href: "/vivre/vision" },
              { name: "Social emploi", href: "/vivre/vision" },
              { name: "Associations", href: "/vivre/vision" },
              { name: "Voisins vigilants", href: "/vivre/vision" },
              { name: "Hébergements", href: "/vivre/vision" },
              { name: "Déchets", href: "/vivre/vision" },
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
            )} lg:left-1/2 lg:-translate-x-1/2 lg:px-6`}
            subMenus={[
              { name: "Menus cantine", href: "/famille/histoire" },
              { name: "Accès direct", href: "/famille/equipe" },
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
