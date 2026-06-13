import "./styles.css";
import { useState } from "react";
export default function Counter2() {
  const [number, setNumber] = useState(1);
  function incrementNumber() {
    let n = number;
    n += 1;
    setNumber(n);
  }
  function decrementNumber() {
    let n = number;
    if (n == 0) {
      return alert("dont allow ");
    }
    n -= 1;
    setNumber(n);
  }
  return (
    <div className="counter2">
      <h1> {number}</h1>
      <button className="item1" onClick={incrementNumber}>
        {" "}
        increment
      </button>
      <button className="item1" onClick={decrementNumber}>
        {" "}
        decrement
      </button>
    </div>
  );
}
