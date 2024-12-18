import "./globals.css";
import Image from "next/image";
import NavbarClient from "./components/navbarClient";
import Footer from "./components/footer";

import logoArcins from "../../public/logoArcins.svg";

export const metadata = {
  title: "Mairie d'Arcins",
  description: "Le site officiel de la Mairie d'Arcins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head></head>
      <body>
        <header className="flex justify-between lg:justify-center items-center ml-7 mr-7">
          <Image
            src={logoArcins}
            alt=""
            className={`w-24 lg:w-40 mt-10 pb-12 lg:pb-36 lg:mt-5`}
          />
          <NavbarClient />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
