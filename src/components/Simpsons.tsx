export default function Simpsons() {
  const simpsons = [
    {
      firstname: "Homer",
      lastname: "Simpson",
      city: "Springfield",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
      firstname: "Marge",
      lastname: "Bouvier",
      city: "Liège",
    },
    {
      firstname: "Lisa",
      lastname: "Simpson",
      city: "Springfield",
      picture:
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
    },
  ];

  const homer = simpsons[0];
  const marge = simpsons[1];

  return (
    <main>
      <h1 className="title">Liste des simpsons :</h1>

      {/* CECI EST UN COMMENTAIRE EN REACT */}

      {/* CODE POUR HOMER SIMPSON */}
      <h2>
        {homer.firstname} {homer.lastname}
      </h2>
      <h3>Ville : {homer.city}</h3>

      {/* CODE POUR MARGE SIMPSON */}
      <img src={homer.picture} alt={homer.firstname} />
      <h2>
        {marge.firstname} {marge.lastname}
      </h2>
      <h3>Ville : {marge.city}</h3>

      {/* UTILISATION D'UN TERNAIRE POUR VERIFIER SI MARGE A UNE PHOTO */}
      {marge.picture ? (
        <img src={marge.picture} alt="marge" />
      ) : (
        "Marge n'a pas de photo"
      )}
    </main>
  );
}
