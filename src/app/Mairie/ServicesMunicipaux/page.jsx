export default function MunicipalServices() {
  return (
    <main className="mx-7">
      <h1>Services Municipaux</h1>
      <p className="mb-10">Les services municipaux proposés par la commune</p>
      <article className="flex flex-col gap-20">
        <div className="flex flex-col gap-5">
          <h2>Accueil/Secrétariat</h2>
          <p>
            Vous pouvez réaliser de nombreuses formalités administratives à
            l’accueil de la Mairie : Carte Nationale d’Identité, Cartes Grises
            Véhicules, Inscriptions sur les listes électorales, dossier
            d’Urbanisme, etc….
          </p>
          <p>
            Courriel :{" "}
            <a
              href="mailto:mairie.arcins@orange.fr"
              className="text-green-600 underline hover:text-green-800"
            >
              mairie.arcins@orange.fr
            </a>
          </p>
          <p>
            Le secrétariat est en charge du suivi administratif du Conseil
            Municipal. Ces missions sont assurées par 1 agent territorial et 1
            contrat à mi-temps.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Service Technique</h2>
          <p>
            Sous la responsabilité du Maire, 2 agents techniques assurent
            l’entretien de notre commune (espaces verts notamment avec la tonte
            et la taille, bâtiments municipaux, voirie…).
          </p>

          <p>Un agent d’entretien assure le nettoyage des locaux communaux</p>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Service Scrolaire et Périscolaire</h2>
          <p>
            1 ATSEM (Agent Territorial Spécialisé École Maternelle) vient
            soulager et renforcer le travail des enseignantes en école
            maternelle et s’occupe des enfants avant la classe, à la pause du
            midi et le soir après la classe.
          </p>
          <p>
            l’accueil périscolaire a été transféré à la CDC Médoc Estuaire qui
            affecte du personnel pour la bonne marche de ce service.
          </p>
        </div>
      </article>
    </main>
  );
}
