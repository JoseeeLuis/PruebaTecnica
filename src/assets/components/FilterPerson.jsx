import { data } from "../../data";
import { PrintPerson } from "./PrintPerson";

function FilterPerson({ rol }) {
  const userComponents = data
    .filter((person) => person.roles.includes(rol))
    .map((person, index) => <PrintPerson key={index} person={person} />);
  console.log(userComponents);

  return <div className="cards">{userComponents}</div>;
}

export { FilterPerson };
