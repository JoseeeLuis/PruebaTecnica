import "./App.css";
import { ListView } from "./ListView";
function App() {
  return (
    <>
      <ListView filterProperty={"roles"} />

      <ListView filterProperty={"tags"} />
    </>
  );
}

export default App;
