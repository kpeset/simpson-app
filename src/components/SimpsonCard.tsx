interface SimpsonTypes {
  simpson: {
    firstname: string;
    lastname: string;
    picture: string;
    city: string;
    age: number;
  };
  sayHello: (name: string) => string;
}

export default function SimpsonCard({ simpson, sayHello }: SimpsonTypes) {
  return (
    <div className="card">
      <p>{sayHello(simpson.firstname)}</p>
      <h1>
        {simpson.firstname} {simpson.lastname}
      </h1>
      <img src={simpson.picture} alt={simpson.firstname} />
      <p>Age: {simpson.age}</p>
      <p>Ville : {simpson.city}</p>
    </div>
  );
}
