import SimpsonCard from "./SimpsonCard";

export default function Simpsons() {
  const simpsons = [
    {
      id: 1,
      firstname: "Homer",
      lastname: "Simpson",
      city: "Springfield",
      age: 45,
      picture:
        "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
      id: 2,
      firstname: "Marge",
      lastname: "Bouvier",
      city: "Liège",
      age: 41,
      picture:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
    },
    {
      id: 3,
      firstname: "Lisa",
      lastname: "Simpson",
      city: "Springfield",
      age: 12,
      picture:
        "https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png",
    },
  ];

  const sayHello = (name: string) => {
    return `Coucou ${name}`;
  };

  return (
    <main>
      {simpsons.map((simpson) => (
        <SimpsonCard key={simpson.id} simpson={simpson} sayHello={sayHello} />
      ))}
    </main>
  );
}
