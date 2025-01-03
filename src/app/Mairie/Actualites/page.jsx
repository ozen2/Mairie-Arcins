import Card from "@/app/components/card";

export default function Actuality() {
  return (
    <main className="mx-7">
      <h1>Actualités et Évènements</h1>
      <p>Découvrez les actualités et évènements de la commune</p>
      <section className="flex flex-row flex-wrap justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
