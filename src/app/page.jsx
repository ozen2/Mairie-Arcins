import Image from "next/image";
import logoArcins from "../../public/logoArcins.svg";
import mairie from "../../public/image.png";

import Card from "./components/card";
import Navbar from "./components/navbarClient";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className="flex flex-col ml-7 mr-7">
        <header className="flex justify-between items-center">
          <Image src={logoArcins} alt="" width={100} className="mt-10 pb-12" />
          <Navbar />
        </header>
        <article>
          <section className="flex flex-col gap-8">
            <Image
              src={mairie}
              className="object-cover min-h-96 border-solid rounded-tr-[6rem]"
            />
            <h1 className="text-title-mobile font-medium ">
              Lorem ipsum dolor sit amet
            </h1>
            <p className="text-content-mobile font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis,
              atque. Sit velit repellendus ex, iste maiores quisquam.
            </p>
          </section>
          <h1 className="text-title-mobile font-medium mt-20">Lorem ipsum</h1>
          <section className="">
            <Card />
            <Card />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
