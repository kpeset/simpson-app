import { useState } from "react";

interface SimpsonTypes {
  simpson: {
    firstname: string;
    lastname: string;
    picture: string;
    city: string;
    age: number;
    donuts: number;
  };
  sayHello: (name: string) => string;
}

export default function SimpsonCard({ simpson, sayHello }: SimpsonTypes) {
  const [donut, setDonut] = useState(simpson.donuts);

  const eatDonut = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.dataset.name === "Homer") {
      setDonut(donut + 4);
    } else {
      setDonut(donut + 1);
    }
  };

  const removeDonut = () => {
    if (donut > 0) {
      setDonut(donut - 1);
    }
  };

  const flushDonut = () => {
    setDonut(0);
  };

  return (
    <div className="card">
      <p>{sayHello(simpson.firstname)}</p>
      <h1>
        {simpson.firstname} {simpson.lastname}
      </h1>
      <img src={simpson.picture} alt={simpson.firstname} />
      <p>Age: {simpson.age}</p>
      <p>Ville : {simpson.city}</p>
      <button type="button" onClick={eatDonut} data-name={simpson.firstname}>
        Ajouter donut
      </button>
      <button type="button" onClick={removeDonut}>
        Supprimer donut
      </button>
      <button type="button" onClick={flushDonut}>
        VIRER TOUS LES DONUTS
      </button>
      <p>Donuts mangés : {donut}</p>
    </div>
  );
}
