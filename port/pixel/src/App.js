import React, { Component } from "react";
import Main from "./components/Main";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import reducers from "./reducers/index";
import { createStore } from "redux";

const store = createStore(reducers);

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img
          width="100"
          src="https://image.ibb.co/k7cmVT/logo_w.png"
          alt="Logo"
        />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href=".">
              Home link <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://pixelplex.io" target="_blank">
              Pixelplex link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
