import Image from "next/image";

import stat from "../../public/stat.svg";
import search from "../../public/loupe.svg";
import mairie from "../../public/mairie.webp";
import eglise from "../../public/eglise.webp";
import port1 from "../../public/port1.webp";
import port4 from "../../public/port4.webp";
import port5 from "../../public/port5.webp";

import Card from "./components/card";
import Footer from "./components/footer";
import LinkGen from "./components/Link";

export default function Home() {
  return (
    <>
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
          <section className="flex flex-col gap-8 lg:flex-row lg:gap-20">
            <div className="carousselAnim h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem] lg:shrink-0">
              <Image
                src={mairie.src}
                alt="Mairie"
                width={1920}
                height={1080}
                priority
                className="carousel-image h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem]"
              />
              <Image
                src={port1.src}
                alt="Port1"
                width={1920}
                height={1080}
                priority
                className="carousel-image h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem]"
              />
              <Image
                src={eglise.src}
                alt="Église"
                width={1920}
                height={1080}
                priority
                className="carousel-image h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem] rotate-90"
              />
              <Image
                src={port4.src}
                alt="Port4"
                width={1920}
                height={1080}
                priority
                className="carousel-image h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem]"
              />
              <Image
                src={port5.src}
                alt="Port5"
                width={1920}
                height={1080}
                priority
                className="carousel-image h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tr-[5rem] rounded-md rounded-tr-[4rem]"
              />
            </div>
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
                  historiques tels que Notre Dame d'Arcins et se distingue par
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
            <div className="flex justify-between lg:justify-around mt-10">
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
            <div className="flex justify-between lg:justify-around mt-5 mb-10">
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
          <section className="flex flex-col gap-8 lg:gap-20 lg:flex-row-reverse">
            <div className="carousselAnim2 h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tl-[5rem] rounded-md rounded-tl-[4rem] lg:shrink-0">
              <Image
                src={mairie.src}
                alt="Mairie"
                width={1920}
                height={1080}
                loading="lazy"
                className="carousel-image2 h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tl-[5rem] rounded-md rounded-tl-[4rem]"
              />
              <Image
                src={port1.src}
                alt="Port1"
                width={1920}
                height={1080}
                loading="lazy"
                className="carousel-image2 h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tl-[5rem] rounded-md rounded-tl-[4rem]"
              />
              <Image
                src={eglise.src}
                alt="Église"
                width={1920}
                height={1080}
                loading="lazy"
                className="carousel-image2 h-[clamp(32rem,70vh,90rem)] lg:w-[32rem] lg:h-[40rem] lg:rounded-tl-[5rem] rounded-md rounded-tl-[4rem] rotate-90"
              />
            </div>
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col">
                <h1 className="font-medium">Commerces et hébergements</h1>
                <p className="font-light md:text-2xl">
                  Une séléction de commerces et hébergements au coeur de la
                  commune
                </p>
              </div>
              <p className="font-normal text-justify">
                Notre commune vous offre une variété de commerces de proximité
                et de restaurants pour répondre à vos besoins quotidiens, ainsi
                que des hébergements chaleureux et accueillants pour vos
                séjours. Que vous soyez résident ou visiteur, découvrez des
                services locaux qui allient authenticité et convivialité.
              </p>
              <p className="font-normal lineClamp">
                Explorez les produits du terroir dans nos marchés et épiceries,
                savourez des plats préparés avec passion par nos restaurateurs,
                et profitez d'une ambiance paisible dans nos hébergements,
                situés au cœur d'un cadre naturel préservé. Arcins est une
                destination où chaque rencontre et chaque expérience reflètent
                l'âme de notre territoire.
              </p>
              <LinkGen name="En savoir plus" link="#" />
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
