"use client";

import Image from "next/image";

import scrollToTop from "../../../public/scrollToTop.svg";

export default function ScrollToTop() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop}>
      <Image
        src={scrollToTop}
        alt=""
        width={30}
        className="absolute top-10 right-10"
      />
    </button>
  );
}
