import { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ margin: "20px 0", border: "1px solid #ccc", padding: "15px" }}>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p>This content is now visible!</p>}
    </div>
  );
}

export default Toggle;