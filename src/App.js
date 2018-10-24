import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products/Products";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

//react-router
import { BrowserRouter as Router, Route } from "react-router-dom";

//components

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
