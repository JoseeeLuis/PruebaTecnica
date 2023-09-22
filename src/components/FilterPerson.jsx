import { data } from "../data";
import { PrintPerson } from "./PrintPerson";

function FilterPerson({ property, value }) {
  const userComponents = data
    .filter((person) => person[property] && person[property].includes(value))
    .map((person, index) => <PrintPerson key={index} person={person} />);
  console.log(userComponents);

  return <div className="cards">{userComponents}</div>;
}

export { FilterPerson };
