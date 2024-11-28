import Image from "next/image";

import logoArcins from "../../../public/logoArcinsWhite.svg";

import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="bg-[--primary-color] w-full m-0 min-h-64 flex flex-col gap-10 items-center mt-10 relative">
      <Image src={logoArcins} alt="" width={100} className="mt-10" />
      <ScrollToTop />
      <div className="flex gap-10">
        <ul className="flex flex-col gap-5">
          <li className="text-2xl text-white">Menu</li>
          <li className="text-white font-light self-center">lorem</li>
          <li className="text-white font-light self-center">lorem</li>
          <li className="text-white font-light self-center">lorem</li>
        </ul>
        <ul className="flex flex-col gap-5">
          <li className="text-white text-2xl">Contact</li>
          <li className="text-white font-light self-center">lorem</li>
          <li className="text-white font-light self-center">lorem</li>
        </ul>
      </div>
      <span className="w-[80%] ml-20 mr-20 h-[0.05rem] bg-[--secondary-color] -mb-5"></span>
      <ul className="flex self-start w-full justify-around mb-5">
        <li className="text-white font-light">lorem</li>
        <div className="flex gap-5">
          <li className="text-white font-light">lorem</li>
          <li className="text-white font-light">lorem</li>
          <li className="text-white font-light">lorem</li>
        </div>
      </ul>
    </footer>
  );
}
