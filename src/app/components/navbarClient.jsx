"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import useScrollPosition from "../services/useScrollPosition";
import NavItem from "./NavItem";

import Arrow from "../../../public/arrow.svg";
import LogoArcins from "../../../public/logoArcinsWhite.svg";

export default function NavbarClient() {
  const [IsBurgerClicked, SetIsBurgerClicked] = useState(false);
  const [IsNavVisible, SetIsNavVisible] = useState(false);
  const [activeLink, SetActiveLink] = useState("link1");
  const [activeMenu, setActiveMenu] = useState(null);

  const pathname = usePathname();

  const scrollPosition = useScrollPosition();

  const navPosition = scrollPosition > 50 ? "top-5" : "top-28";

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

  const toggleMenu = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menu);
    }
  };

  const isOpen = IsBurgerClicked
    ? "bg-[--primary-color] absolute z-20 w-full h-[100rem] top-0 left-0 duration-500 ease-in-out items-start flex flex-col gap-10 lg:gap-2"
    : "bg-[--primary-color] absolute z-20 h-0 w-full top-0 left-0 translate-x-[50rem] duration-700 ease-in-out items-start flex flex-col gap-10 lg:gap-2";

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
              href="/"
              onClick={toggleNav}
              className={
                pathname === "/"
                  ? "mt-10 md:mt-0 ml-10 mr-10 text-white text-2xl lg:text-xl lg:ml-0 lg:mr-0 lg:px-4 lg:py-3 lg:bg-[--primary-color] lg:rounded-full"
                  : "mt-10 md:mt-0 ml-10 mr-10 text-white text-2xl lg:text-xl lg:ml-0 lg:mr-0 lg:px-4 lg:py-3"
              }
            >
              Accueil
            </Link>
          </li>
          <NavItem
            IsSubMenuClicked={activeMenu === "Presentation"}
            IsArrowClicked={activeMenu === "Presentation"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Présentation"
            pathname={pathname}
            toggleMenu={() => toggleMenu("Presentation")}
            divClassName={`${isSubClicked("Presentation")} ${isSubVisible(
              "Presentation"
            )}`}
            subMenus={[
              {
                name: "Histoire et patrimoine",
                href: "/Presentation/Histoire&Patrimoine",
              },
              { name: "Plan google", href: "/Presentation/PlanGoogle" },
              {
                name: "Derniers recensement",
                href: "/Presentation/DerniersRecensements",
              },
              { name: "Équipements", href: "/Presentation/Equipements" },
              {
                name: "Arcins en images",
                href: "/Presentation/ArcinsenImages",
              },
              {
                name: "Plan communal de sauvegarde",
                href: "/Presentation/PlanCommunaldeSauvegarde",
              },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "Mairie"}
            IsArrowClicked={activeMenu === "Mairie"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Mairie"
            pathname={pathname}
            toggleMenu={() => toggleMenu("Mairie")}
            divClassName={`${isSubClicked("Mairie")} ${isSubVisible("Mairie")}`}
            subMenus={[
              {
                name: "Actualités / Agenda / Évènements",
                href: "/Mairie/Actualites",
              },
              {
                name: "Services municipaux",
                href: "/Mairie/ServicesMunicipaux",
              },
              { name: "Le conseil", href: "/Mairie/LeConseil" },
              { name: "Services", href: "/Mairie/Services" },
              { name: "Intercommunalité", href: "/Mairie/Intercommunalite" },
              {
                name: "Magazines municipaux",
                href: "/Mairie/MagazinesMunicipaux",
              },
              { name: "Budget communal", href: "/Mairie/BudgetCommunal" },
              { name: "Marches publiques", href: "/Mairie/MarchesPubliques" },
              { name: "Cimetière", href: "/Mairie/Cimetiere" },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "Vivre"}
            IsArrowClicked={activeMenu === "Vivre"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Vivre"
            pathname={pathname}
            toggleMenu={() => toggleMenu("Vivre")}
            divClassName={`${isSubClicked("Vivre")} ${isSubVisible("Vivre")}`}
            subMenus={[
              {
                name: "Commerces / Restaurants / Artisants",
                href: "/Vivre/CommercesRestaurantsArtisants",
              },
              {
                name: "Visites et découvertes",
                href: "/Vivre/Visites&Decouvertes",
              },
              { name: "Chateaux", href: "/Vivre/Chateaux" },
              {
                name: "Enfance / Jeunesse / Éducation",
                href: "/Vivre/EnfanceJeunesseEducation",
              },
              {
                name: "Sport / Culture / Loisirs",
                href: "/Vivre/SportCultureLoisirs",
              },
              { name: "Transports", href: "/Vivre/Transports" },
              { name: "Social emploi", href: "/Vivre/SocialEmploi" },
              { name: "Associations", href: "/Vivre/Associations" },
              { name: "Voisins vigilants", href: "/Vivre/VoisinsVigilants" },
              { name: "Hébergements", href: "/Vivre/Hebergements" },
              { name: "Déchets", href: "/Vivre/Dechets" },
            ]}
          />
          <NavItem
            IsSubMenuClicked={activeMenu === "Famille"}
            IsArrowClicked={activeMenu === "Famille"}
            Arrow={Arrow}
            activeLink={activeLink}
            SetActiveLink={SetActiveLink}
            name="Famille"
            pathname={pathname}
            toggleMenu={() => toggleMenu("Famille")}
            divClassName={`${isSubClicked("Famille")} ${isSubVisible(
              "Famille"
            )} lg:left-1/2 lg:-translate-x-1/2 lg:px-6`}
            subMenus={[
              { name: "Menus cantine", href: "/Famille/MenuCantine" },
              { name: "Accès direct", href: "/Famille/AccesDirect" },
            ]}
          />
          <li>
            <Link
              href={""}
              className={
                pathname === "/MesDemarches"
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
