// As useEffect gets revoked after every render therefore conditionally revoking of useEffect is necessary.
// And hence we use ["condition-to-look-for"] as a second parameter inside useEffect().

import React, { useEffect, useState } from "react";

function UseEffectCondn() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updated count");
    document.title = `Count is ${count}`;
  }, [count]);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

export default UseEffectCondn;
