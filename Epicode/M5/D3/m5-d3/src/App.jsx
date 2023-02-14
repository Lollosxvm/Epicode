import { useState } from "react";
import "./App.css";
import MyBadge from "./components/MyBadge";
import SingleBook from "./components/SingleBook";
import { books } from "./romance";

function App() {
  const [count, setCount] = useState(0);

  const filtered= books.filter(book=> book.asin === "0008288798")
  console.log(filtered[0])
  return (
    <div className="App">
      <MyBadge badge="la famosa stringa" color="danger" />
      <SingleBook props={filtered[0]}/>
    </div>
  );
}

export default App;
