import React, { useState } from "react";

import "./App.css";

import SideBar from "./SideBar/SideBar";
import Chat from "./Chat/Chat";
import Login from "./Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <SideBar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route exact path="/">
                {/* <Chat /> */}
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
