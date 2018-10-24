import React, { Component } from "react";
import "./Cart.css";
import Summary from "../Summary/Summary";
//redux
import { deleteFromCart } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  deleteFromCart = id => {
    this.props.deleteFromCart(id);
  };

  render() {
    return (
      <div className="container">
        <div className="cart">
          <div className="cart__header">
            <h3>YOUR CART ({this.props.state.length})</h3>
          </div>
          <div className="cart__products">
            {this.props.state.length > 0 ? (
              this.props.state.map(item => (
                <div className="cart__products-item" key={item.id}>
                  <img src={item.image} alt={item.model} />
                  <div className="cart__products-item-info">
                    <div>
                      <b>{item.model}</b>
                    </div>
                    <div>${item.price}</div>
                    <div
                      className="button delete-button"
                      onClick={() => this.deleteFromCart(item.id)}
                    >
                      Delete
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <p>
                  You don't have any items in your cart. <br />
                  <Link to="/">
                    <b>Go shopping</b>.
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
        <Summary />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(
  mapStateToProps,
  { deleteFromCart }
)(Cart);
