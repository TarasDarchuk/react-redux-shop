import React, { Component } from "react";
import "./Summary.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Summary extends Component {
  subtotal = () => {
    let initialValue = 0;

    let subtotal = this.props.state.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      initialValue
    );
    return subtotal;
  };

  render() {
    return (
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
        {this.props.checkout ? (
          <div>
            <div className="summary__line-break" />
            <div className="summary__div">
              <Link
                className={
                  this.props.state.length > 0
                    ? "summary__div-link"
                    : "summary__div-link-disabled"
                }
                to={this.props.state.length > 0 ? "/checkout" : "/cart"}
              >
                <span>
                  <b>CHECKOUT</b>
                </span>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(Summary);
