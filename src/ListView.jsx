import { data } from "./data";
import { FilterPerson } from "./assets/components/FilterPerson";
import "./ListView.css";

function ListView({ filterProperty }) {
  const filterSet = new Set();

  data.forEach((item) => {
    if (item[filterProperty] && Array.isArray(item[filterProperty])) {
      item[filterProperty].forEach((filterValue) => {
        filterSet.add(filterValue);
      });
    }
  });

  const filterValues = Array.from(filterSet);
  console.log(filterValues);

  return (
    <div className="all-cards">
      {filterValues.map((title) => (
        <div className={`${title} container`} key={title}>
          <h3 className="rols-titles">{title}</h3>
          <FilterPerson rol={title} />
        </div>
      ))}
    </div>
  );
}

export { ListView };
