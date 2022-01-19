import React, { useState } from "react";
import "../Counter.css";

const Counter = () => {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="wrapper">
      <header>
        <h1>Counter Component</h1>
      </header>

      <h2>
        Counter Value : <span>{count}</span>
      </h2>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;
