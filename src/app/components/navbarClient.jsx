"use client";

import { useState } from "react";
import Link from "next/link";

export default function NavbarClient() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`burger-menu  ${isOpen ? "open absolute z-30" : ""}`}
        onClick={handleMenu}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <section className={`${isOpen ? "flex flex-col bg-[var(--primary-color)] min-h-full w-full absolute z-20 translate-x-0 top-0 delay-75 duration-500" : "flex flex-col bg-[--primary-color] w-screen absolute top-20 -right-96"}`}>
        <Link href={navigator}>Accueil</Link>
        <Link href={navigator}>Actualités</Link>
        <Link href={navigator}>Services</Link>
      </section>
    </>
  );
}
