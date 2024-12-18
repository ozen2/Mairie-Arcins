import Image from "next/image";

import image from "../../../../public/mairie.webp";

export default function Equipment() {
  return (
    <main className="mx-7">
      <h1>Les Équipements</h1>
      <p className="mb-10">
        Vous trouverez ici tous les équipements dont dispose la commune
      </p>
      <section className="flex flex-col gap-20">
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
          <Image src={image} className="rounded-md lg:w-[50%] object-cover" />
          <div className="flex flex-col gap-5">
            <h2>La salle polyvalante</h2>
            <div className="flex flex-col gap-5">
              <p>
                La salle polyvalente permet d’accueillir la population arcinoise
                lors de manifestations communales telles la traditionnelle
                cérémonie de présentation des vœux par la municipalité début
                janvier, les apéritifs offerts lors des commémorations du 8 mai
                et du 11 Novembre, les événements organisés par l’école, les
                manifestations du Comité des Fêtes ainsi que le repas des Aînés
                organisé habituellement en février.
              </p>
              <p>
                Cette salle peut être louée par les particuliers pour un
                week-end en fonction des disponibilités.
              </p>
              <p>
                Le tarif de location est fixé comme suit à 240€ uniquement pour
                les habitants de la commune. Les réservations se font auprès du
                secrétariat de la Mairie
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row-reverse lg:gap-10">
          <Image src={image} className="rounded-md lg:w-[50%] object-cover" />
          <div className="flex flex-col gap-5">
            <h2>Le terrain multi-sport</h2>
            <p>
              Derrière la salle polyvalente, il est mis à la disposition de tous
              notamment des jeunes qui veulent se retrouver et pratiquer du
              sport librement.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
