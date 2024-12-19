import Card from "@/app/components/card";

export default function Agenda() {
  return (
    <main className="mx-7">
      <h1>Agenda</h1>
      <p>Découvrez l'agenda de la commune</p>
      <section className="flex flex-row flex-wrap justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
}
