import React from "react";
import { render } from "react-dom";
import SimpleComponent from "./components/SimpleComponent.jsx";

const App = () => {
  return (
    <div>
      <div></div>
      <h1> Project Name </h1>
      <SimpleComponent prop="A" />
      <SimpleComponent prop="B" />
      <SimpleComponent prop="C" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
