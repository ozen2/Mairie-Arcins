import Image from "next/image";

import logoArcins from "../../public/logoArcins.svg";
import stat from "../../public/stat.svg";

import Card from "./components/card";
import Navbar from "./components/navbarClient";
import Footer from "./components/footer";
import LinkGen from "./components/Link";

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center ml-7 mr-7">
        <Image
          src={logoArcins}
          alt=""
          width={100}
          className="mt-10 pb-12 lg:opacity-0"
        />
        <Navbar />
      </header>
      <main className="flex flex-col ml-7 mr-7">
        <article>
          <section className="flex flex-col gap-8 lg:flex-row lg:gap-20">
            <div className="carousselAnim h-[clamp(24rem,50vh,60rem)] lg:w-[32rem] lg:h-[40rem] rounded-tr-[5rem] rounded-md lg:shrink-0"></div>
            <div className="flex flex-col lg:justify-between gap-10 lg:max-h-[40rem]">
              <div className="flex flex-col gap-4">
                <h1 className="font-medium">Bienvenue à Arcins</h1>
                <p className="font-normal">
                  Arcins est un charmant village situé dans le Médoc, une région
                  renommée pour ses paysages viticoles et son patrimoine
                  naturel.
                </p>
                <p className="lineClamp3 font-normal">
                  Nichée entre les prestigieux vignobles de Margaux et
                  Saint-Julien, la commune offre une atmosphère paisible et
                  authentique, idéale pour les amoureux de la nature et de la
                  tranquillité.
                </p>
                <p className="lineClamp display-none2 font-normal">
                  Avec une population d’environ 350 habitants, Arcins cultive un
                  esprit convivial et chaleureux, où chaque habitant contribue à
                  la vie locale. La commune est également bordée par l’estuaire
                  de la Gironde, offrant des points de vue uniques et des
                  activités nautiques pour les amateurs de plein air.
                </p>
                <p className="display-none lineClamp2 font-normal">
                  Fière de son patrimoine, Arcins abrite des édifices
                  historiques tels que l’église Saint-Martin et se distingue par
                  son implication dans la préservation de l’environnement. C'est
                  une destination parfaite pour découvrir l’art de vivre
                  médocain et la richesse culturelle de la région.
                </p>
              </div>
              <div className="lg:flex lg:justify-start justify-end flex">
                <LinkGen name="En savoir plus" link="#" />
              </div>
            </div>
          </section>
          <h1 className="font-medium mt-20">Lorem ipsum</h1>
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
            <h1 className="font-medium">Lorem ipsum</h1>
            <p className="font-light">Lorem ipsum dolor</p>
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
            <h1 className="font-medium">Lorem ipsum</h1>
            <p className="font-light mb-10 md:text-2xl">Lorem ipsum dolor</p>
            <div className="h-[clamp(24rem,50vh,60rem)] rounded-tl-[5rem] mb-10 rounded-md carousselAnim2"></div>
            <p className="font-light text-justify mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              aspernatur eum at suscipit facilis itaque, est, totam quos a
              provident nihil dicta vel obcaecati aliquam nulla sed? Quas,
              facilis expedita!
            </p>
            <LinkGen name="En savoir plus" link="#" />
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
