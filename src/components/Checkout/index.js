import React, { Component } from "react";
import "./Checkout.css";
import CheckoutShipping from "./CheckoutShipping";
import Summary from "../Summary";

import axios from "axios";

import { connect } from "react-redux";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      shipping: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({
      ...this.state,

      shipping: {
        ...this.state.shipping,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state);
  };

  handleCountry = e => {
    this.setState({
      ...this.state,
      shipping: {
        ...this.state.shipping,
        country: this.state.countries.filter(
          country => country.name === e.target.value
        )[0]
      }
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.checkout);
  }

  subtotal = () => {
    let initialValue = 0;

    let subtotal = this.props.state.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
    return subtotal;
  };

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(res => {
      this.setState({ countries: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="checkout">
            <div>
              <h1>CHECKOUT</h1>
            </div>
            <div className="checkout__header">
              <h2>1. SHIPPING</h2>
            </div>
            <CheckoutShipping
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleCountry={this.handleCountry}
              state={this.state}
            />
          </div>
          <Summary checkout={false} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(Checkout);
