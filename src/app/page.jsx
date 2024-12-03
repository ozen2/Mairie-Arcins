import Image from "next/image";

import logoArcins from "../../public/logoArcins.svg";
import stat from "../../public/stat.svg";
import search from "../../public/loupe.svg";

import Card from "./components/card";
import Navbar from "./components/navbarClient";
import Footer from "./components/footer";
import LinkGen from "./components/Link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between lg:justify-center items-center ml-7 mr-7">
        <Image
          src={logoArcins}
          alt=""
          className={`w-24 lg:w-40 mt-10 pb-12 lg:pb-36 lg:mt-5`}
        />
        <Navbar />
      </header>
      <main className="flex flex-col ml-7 mr-7">
        <label
          htmlFor="searchInput"
          className="flex mb-10 self-center shadow-md rounded-full border-solid border-[1px] border-[--secondary-color]"
        >
          <input
            className="w-[clamp(10rem,80vw,40rem)] h-12 rounded-l-full bg-white text-[--secondary-color] placeholder-[--secondary-color] placeholder-opacity-70 pl-4 focus:outline-none"
            type="search"
            id="searchInput"
            name="name"
            placeholder="Recherchez ce que vous voulez…"
          />
          <Image src={search} className="w-10 bg-white rounded-r-full px-2" />
        </label>
        <article>
          <div className="carousselAnim h-[clamp(24rem,50vh,60rem)] lg:w-[32rem] lg:h-[40rem] rounded-tr-[5rem] rounded-md lg:shrink-0"></div>
          <h1 className="font-medium mt-20">En ce moment…</h1>
          <p>Découvrez les actualités de la commune</p>
          <section className="flex flex-col items-center md:flex-row md:overflow-x-auto gap-8 scrollbar-none mb-10 -mx-7 px-7">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
          <div className="flex justify-end">
            <LinkGen name="En savoir plus" link="#" />
          </div>
          <section className="mt-20 flex flex-col mb-20">
            <h1 className="font-medium">Derniers recensements</h1>
            <div className="flex justify-between mt-10">
              <div>
                <h2 className="font-medium md:text-5xl">100+</h2>
                <p className="font-light md:text-2xl">Lorem ipsum</p>
              </div>
              <div>
                <h2 className="font-medium md:text-5xl">205+</h2>
                <p className="font-light md:text-2xl">Lorem ipsum</p>
              </div>
            </div>
            <Image
              src={stat}
              alt=""
              className="self-center mt-5 w-[clamp(50px,80%,400px)] h-auto"
            />
            <div className="flex justify-between mt-5 mb-10">
              <div>
                <h2 className="font-medium md:text-5xl">55</h2>
                <p className="font-light md:text-2xl">Lorem ipsum</p>
              </div>
              <div>
                <h2 className="font-medium md:text-5xl">266</h2>
                <p className="font-light md:text-2xl">Lorem ipsum</p>
              </div>
            </div>
            <LinkGen name="En savoir plus" link="#" />
          </section>
          <section className="flex flex-col">
            <h1 className="font-medium">Commerces et hébergements</h1>
            <p className="font-light mb-10 md:text-2xl">
              Une séléction de commerces et hébergements au coeur de la commune
            </p>
            <div className="h-[clamp(24rem,50vh,60rem)] rounded-tl-[5rem] mb-10 rounded-md carousselAnim2"></div>
            <p className="font-light text-justify mb-10">
              Notre commune vous offre une variété de commerces de proximité et
              de restaurants pour répondre à vos besoins quotidiens, ainsi que
              des hébergements chaleureux et accueillants pour vos séjours. Que
              vous soyez résident ou visiteur, découvrez des services locaux qui
              allient authenticité et convivialité.
            </p>
            <LinkGen name="En savoir plus" link="#" />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
