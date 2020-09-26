import React, { useState } from "react";

export default function HookCounter() {
  const [count, setCount] = useState(0);
  // Here useState accepts the current state and returns current state and the setSate method to
  // set that perticular state.
  // Also read about array destructuring.

  return (
    <div>
      <button style={{ padding: "10px" }} onClick={() => setCount(count + 1)}>
        Count {count}
      </button>
    </div>
  );
}
