/* componentDidMount <-> useEffect(()=>{...}, ["empty-array"])
    ["empty-array"] -> to call useEffect() only at the time of initial rendering.
    ["empty-array"] is basically telling react, hey this effect does not depend upon any props or state
    so there's no reason to call this effect on every render.
*/

import React, { useState, useEffect } from "react";

function UseEffectMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse Movement");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      Hools X - {x}, Y - {y}
    </div>
  );
}

export default UseEffectMouse;
