import React, { useState, useEffect } from "react";

function useEffectHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count ${count}`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
}

export default useEffectHook;
