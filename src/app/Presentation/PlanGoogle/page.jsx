export default function GooglePlan() {
  return (
    <main className="mx-7">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1>Nous trouver</h1>
          <p>
            Vous pouvez obtenir l'itinéraire vers Arcins en cliquant sur
            "itinéraires" ou sur "agrandir le plan" sur la carte
          </p>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22539.802916588706!2d-0.7277098027718824!3d45.07615265411451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4801d13211fec031%3A0x40665174816f050!2s33460%20Arcins!5e0!3m2!1sfr!2sfr!4v1734529151908!5m2!1sfr!2sfr"
          className="w-full h-[50vh] md:h-[36rem]"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
}
