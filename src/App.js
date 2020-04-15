import React from "react";
import { Router } from "@reach/router";

import { addTownName, addUsers } from "./actions";

import { data } from "./data/data.js";
import { useDispatch } from "react-redux";

import Home from "./Home.js";
import ProfessionsFinder from "./ProfessionsFinder.js";
import User from "./User.js";

const App = () => {
  const dispatch = useDispatch();
  dispatch(
    addTownName({
      townName: Object.keys(data)[0]
    })
  );

  dispatch(
    addUsers({
      users: data[Object.keys(data)[0]]
    })
  );

  return (
    <React.StrictMode>
      <div>
        <Router>
          <Home path="/" />
          <User path="/user/:id" />
          <ProfessionsFinder path="/professions/:profession" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

export default App;
