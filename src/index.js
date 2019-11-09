import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "../src/Pages/Home";
import Detail from "../src/Pages/Detail";
import * as serviceWorker from "./serviceWorker";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import books from "./Helpers/books";

const EnhancedApp = props => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={props => <Home {...props} book={books} />}
      />
      <Route path="/detail/:index" component={Detail} />
    </Router>
  );
};

ReactDOM.render(<EnhancedApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
