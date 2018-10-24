import React, { Component } from "react";
import "./Checkout.css";

import { connect } from "react-redux";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      checkout: {
        firstName: "",
        lastName: "",
        country: [],
        city: "",
        postalCode: "",
        adress: "",
        email: "",
        phone: ""
      }
    };
  }

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

  componentWillMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(json => {
        this.setState({
          countries: json
        });
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
            <div className="checkout__shipping">
              <form action="" onSubmit={e => this.handleSubmit(e)}>
                <div className="name">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          firstName: e.target.value
                        }
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          lastName: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="country">
                  <select
                    name="country"
                    id=""
                    required
                    defaultValue="Country"
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          country: this.state.countries.filter(
                            c => c.name === e.target.value
                          )
                        }
                      });
                    }}
                  >
                    <option disabled>Country</option>
                    {this.state.countries.map(country => (
                      <option value={country.name} key={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          city: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="adress">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          postalCode: e.target.value
                        }
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Adress"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          adress: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <div className="contacts">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    id="tel"
                    onClick={() =>
                      (document.getElementById("tel").defaultValue =
                        "+" + this.state.checkout.country[0].callingCodes[0])
                    }
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          phone: e.target.value
                        }
                      });
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={e => {
                      this.setState({
                        checkout: {
                          ...this.state.checkout,
                          email: e.target.value
                        }
                      });
                    }}
                  />
                </div>
                <button type="submit" className="button">
                  Continue
                </button>
              </form>
            </div>
          </div>
          <div className="summary">
            <div className="summary__div">
              <h3>SUMMARY</h3>
            </div>
            <div className="summary__line-break" />
            <div className="summary__div">
              Subtotal{" "}
              <span>{this.subtotal() > 0 ? "$" + this.subtotal() : null}</span>
            </div>
            <div className="summary__line-break" />
            <div className="summary__div">
              Shipping
              {this.props.state.length > 0 ? (
                this.subtotal() < 200 ? (
                  <div>
                    $8
                    <br />
                    <small>free shipping from $200</small>
                  </div>
                ) : (
                  <span>Free</span>
                )
              ) : null}
            </div>
            <div className="summary__line-break" />
            <div className="summary__div">
              <b>TOTAL</b>
              <b>
                <span>
                  {this.props.state.length > 0
                    ? this.subtotal() < 200
                      ? "$" + (this.subtotal() + 8)
                      : "$" + this.subtotal()
                    : null}
                </span>
              </b>
            </div>
          </div>{" "}
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
