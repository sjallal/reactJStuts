import React from "react";
import "./App.css";
import IntervalHookCounter from "./HookComponents/IntervalHookCounter";
import DataFetching from "./HookComponents/DataFetching";
// import UseEffectCondn from "./HookComponents/UseEffectCondn";
// import UseEffectMouse from "./HookComponents/UseEffectMouse";
// import CompWillUnmountUseState from "./HookComponents/CompWillUnmountUseState";

function App() {
  return (
    <div className="App">
      <DataFetching />
      {/* <CompWillUnmountUseState /> */}
      {/* <UseEffectCondn /> */}
      {/* <UseEffectMouse /> */}
      {/* <IntervalHookCounter /> */}
    </div>
  );
}

export default App;
