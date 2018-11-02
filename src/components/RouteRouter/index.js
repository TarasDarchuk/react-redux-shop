import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ProductsList from "../Products/ProductsList";
import Header from "../Header";
import Cart from "../Cart";
import Checkout from "../Checkout";

const RouteRouter = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={ProductsList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    </Router>
  );
};

export default RouteRouter;
