import "./styles.css";
import { useState } from "react";

export default function Counter() {
  const [name, setName] = useState("tithi");
  function changeName() {
    setName("soma");
  }
  return (
    <div className="counter">
      <h1>{name}</h1>
      <button onClick={changeName}> change name</button>
    </div>
  );
}
