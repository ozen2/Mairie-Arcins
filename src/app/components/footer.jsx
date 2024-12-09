import Image from "next/image";

import logoArcins from "../../../public/logoArcinsWhite.svg";
import facebook from "../../../public/facebook.svg";

import ScrollToTop from "./scroll-to-top";

export default function Footer() {
  return (
    <footer className="bg-[--primary-color] w-full m-0 min-h-64 flex flex-col gap-5 items-center mt-10 relative">
      <Image src={logoArcins} alt="" width={100} className="mt-10" />
      <ScrollToTop />
      <h3 className="text-white text-2xl">Contact</h3>
      <div className="flex flex-col md:flex-row md:justify-around md:w-full">
        <ul className="flex flex-col">
          <li className="text-white font-light flex flex-col items-center">
            <p className="text-white font-semibold">Mairie d’Arcins</p>
            <p className="text-white">4 route de Pauillac</p>
            <p className="text-white">33460 ARCINS</p>
          </li>
        </ul>
        <ul className="flex flex-col items-center gap-2">
          <li className="text-white font-light">Tel : 05 56 58 93 90</li>
          <li className="text-white font-light">
            Mail :{" "}
            <a
              href="mailto:mairie.arcins@orange.fr"
              className="text-green-300 underline hover:text-green-600"
            >
              mairie.arcins@orange.fr
            </a>
          </li>
          <div className="flex gap-2">
            <li>
              <a
                href="https://www.facebook.com/pages/Mairie%20d'Arcins/255579984913819/"
                target="/blank"
              >
                <Image src={facebook} alt="lien facebook" className="w-10" />
              </a>
            </li>
          </div>
        </ul>
      </div>
      <span className="w-[80%] ml-20 mr-20 h-[0.05rem] bg-[--secondary-color] -mb-2"></span>
      <ul className="flex w-full justify-around mb-5">
        <li className="text-white font-light text-xs">Plan du site</li>
        <li className="text-white font-light text-xs">Mentions légales</li>
        <li className="text-white font-light text-xs">
          Politique de confidentialité
        </li>
      </ul>
    </footer>
  );
}
