import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval); // Equivalent to componentDidUnmount to avoid memory leak.
    };
  }, [count]); // [] -> Equivalent to componentDidMount to call useEffect after and only initial render.
  return <div>{count}</div>;
}

export default IntervalHookCounter;
