/**
 * Whenever you unmount a component, you must cleanup all the eventListners and setters related to that component.
 * In order to do that we write a clean-up code inside a function and return that funcn from the funcn passed as a
 * parameter inside the useEffect-funcn.
 */

import React, { useEffect, useState } from "react";

function CompWillUnmountUseState() {
  const [display, setDisplay] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse Movement");
    setX(e.clientX);
    setY(e.clientY);
  };

  const cleanUpCodeFn = () => {
    console.log("Component unmounting code");
    window.removeEventListener("mousemove", logMousePosition);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return cleanUpCodeFn;
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Toggle Mouse Event Display
      </button>
      {display && (
        <div>
          Hooks X - {x}, Y - {y}
        </div>
      )}
    </div>
  );
}

export default CompWillUnmountUseState;
