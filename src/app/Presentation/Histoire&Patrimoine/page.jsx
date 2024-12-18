import Image from "next/image";

import Chateau from "../../../../public/chateauAvant.webp";
import Eglise from "../../../../public/egliseAvant.webp";

export default function HistoirePatrimoine() {
  return (
    <main className="mx-7">
      <h1>Histoire et patrimoine</h1>
      <p>Découvrez l'histoire de la commune</p>
      <section className="flex flex-col gap-10 lg:gap-20 mt-10">
        <div className="lg:flex lg:flex-row flex flex-col gap-5 lg:gap-10">
          <Image
            src={Chateau}
            className="lg:w-[50%] rounded-md object-cover"
            alt=""
          />
          <div className="flex flex-col gap-5 lg:gap-10">
            <h2>Le Château d'Arcins</h2>
            <p>
              Le château d’Arcins possède l’un des 1ers vignobles du Haut-Médoc,
              développé en 1300 par la commanderie des Templiers. Ce grand
              vignoble, propriété de la famille Castel depuis 1971, dispose d’un
              magnifique château restauré entièrement par les propriétaires
              actuels.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:flex-row-reverse flex flex-col gap-5 lg:gap-10">
          <Image
            src={Eglise}
            className="lg:w-[50%] object-cover rounded-md"
            alt=""
          />
          <div className="flex flex-col gap-5 lg:gap-10">
            <h2>L'église Notre-Dame</h2>
            <p className="lg:text-justify">
              L’ancienne église templière et hospitalière a été démolie en 1820.
              Elle sera reconstruite à partir de 1838 sur décision de Louis
              Philippe. Cette nouvelle Paroisse sera reconnue par ordonnance du
              29 juin 1841. Mais la nouvelle église ne résout pas les problèmes
              de marais pour lesquels les Arcinois demandent la réalisation de
              travaux d’assèchement depuis 1747. Finalement, après bien des
              oppositions au projet de faire creuser un canal, ce n’est qu’en
              1846 que le préfet demande au Maire de mettre en demeure les
              propriétaires d’effectuer des travaux de drainage.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
