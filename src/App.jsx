import React, { useState } from "react";
import "./App.css";
import { ListView } from "./ListView";
import { SelectView } from "./SelectView";

function App() {
  const [filterProperty, setFilterProperty] = useState("");

  return (
    <>
      <SelectView onSelectChange={setFilterProperty} />
      <ListView filterProperty={filterProperty} />
    </>
  );
}

export default App;
