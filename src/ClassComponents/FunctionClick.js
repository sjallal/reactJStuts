import React from "react";

function FunctionClick() {
  function eventHandler() {
    console.log("Click me Clicked");
  }
  return (
    <div>
      <button onClick={eventHandler}>Click me</button>
    </div>
  );
}

export default FunctionClick;
