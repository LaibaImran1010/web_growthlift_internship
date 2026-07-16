import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
         useEffect(() => {
           document.title = `Count: ${count}`;
         }, [count]);
         
  return (
    <div style={{ margin: "20px 0", border: "1px solid #ccc", padding: "15px" }}>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;