import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "./app/Navbar/Navbar";
import { HomePage } from "./app/HomePage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <HomePage />
              </>
            )}
          />
          <Route
            exact
            path="/messages"
            render={() => (
              <section>
                <h2>Messages</h2>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
