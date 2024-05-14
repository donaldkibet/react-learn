import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>count {count}</h1>
      {count === 0 && <p>The counter is at zero</p>}
      <p>{count % 2 !== 0 ? "The count is odd" : "The count is even"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
