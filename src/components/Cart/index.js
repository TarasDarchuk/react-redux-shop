import React, { Component } from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import Summary from "../Summary";
//redux
import { deleteFromCart } from "../../actions/index";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  deleteFromCart = id => {
    this.props.deleteFromCart(id);
  };

  render() {
    const { state } = this.props;
    return (
      <div className="container">
        <div className="cart">
          <div className="cart__header">
            <h3>YOUR CART ({state.length})</h3>
          </div>
          <div className="cart__products">
            {state.length > 0 ? (
              state.map(product => (
                <CartProduct
                  key={product.id}
                  model={product.model}
                  image={product.image}
                  price={product.price}
                  delete={() => this.deleteFromCart(product.id)}
                />
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
        <Summary checkout={true} />
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
