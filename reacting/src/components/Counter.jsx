import React, { useState } from "react";

import "./css/card.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h1 onClick={() => setCount(() => count + 1)}>{count}</h1>
    </div>
  );
};

export default Counter;
