import Image from "next/image";

import Carte from "../../../../public/carte medoc estuaire .jpg";

export default function Intercommunality() {
  return (
    <main className="mx-7">
      <h1>Intercommunalité</h1>
      <p>Arcins est au centre de plusieurs térritoires</p>
      <section className="flex flex-col gap-12 mt-10">
        <div className="flex flex-col gap-6">
          <h2>Communauté de Commune Médoc Estuaire</h2>
          <p>
            La communauté de commune compte environ 27 290 habitants, répartis
            sur 10 communes
          </p>
          <Image src={Carte} />
          <ul className="ml-5 text-[--primary-color]">
            <li className="list-disc">ARCINS</li>
            <li className="list-disc">ARSAC</li>
            <li className="list-disc">CUSSAC-FORT-MÉDOC</li>
            <li className="list-disc">LABARDE</li>
            <li className="list-disc">LAMARQUE</li>
            <li className="list-disc">LUDON-MÉDOC</li>
            <li className="list-disc">MACAU</li>
            <li className="list-disc">MARGAUX-CANTENAC</li>
            <li className="list-disc">LE PIAN MÉDOC</li>
            <li className="list-disc">SOUSSANS</li>
          </ul>
          <p>
            Son territoire s’étend sur 174,51 km2 et se caractérise par une
            façade estuarienne (9 Communes), un terroir viticole prestigieux,
            une forêt importante sur les deux communes qui ne sont pas sur
            l’Estuaire.
          </p>
          <ul className="list-disc ml-5 text-[--primary-color]">
            <li>
              Son siège administratif :
              <li className="ml-5">26, rue de l’Abbé Frémont 33460 ARSAC</li>
              <li className="ml-5 underline hover:text-green-800">
                <a href="tel:0557880808">05 57 88 08 08</a>
              </li>
            </li>
          </ul>
          <ul className="list-disc ml-5 text-[--primary-color]">
            <li>
              Les horaires d'ouverture au public sont :
              <li className="ml-5">Lundi : 10h-12h/13h-17h</li>
              <li className="ml-5">
                Mardi – Mercredi – Jeudi : 8h30-12h/13h-17h
              </li>
              <li className="ml-5">Vendredi : 8h30- 12h/13h-16h</li>
            </li>
          </ul>
          <p>
            Les compétences de la Communauté de communes sont notamment
            l’aménagement de l’espace communautaire et le développement
            économique, mais également la gestion des déchets et le domaine de
            la petite enfance et jeunesse
          </p>
          <p>
            Plus d'informations :{" "}
            <a
              href=" http://www.cc-medoc-estuaire.fr/"
              target="_blank"
              className="underline"
            >
              http://www.cc-medoc-estuaire.fr/
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2>Communauté de Commune Médoc Estuaire</h2>
          <p>
            La communauté de commune compte environ 27 290 habitants, répartis
            sur 10 communes
          </p>
          <Image src={Carte} />
        </div>
        <div className="flex flex-col gap-6">
          <h2>Communauté de Commune Médoc Estuaire</h2>
          <p>
            La communauté de commune compte environ 27 290 habitants, répartis
            sur 10 communes
          </p>
          <Image src={Carte} />
        </div>
      </section>
    </main>
  );
}
