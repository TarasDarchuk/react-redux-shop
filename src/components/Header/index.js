import React, { Component } from "react";
import cartImage from "./ShopingCartImg.png";
import "./Header.css";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="logo">
            <h4>Products</h4>
          </div>
        </Link>
        <Link to="/cart" href="/cart">
          <div className="cart-logo">
            <img src={cartImage} alt="cart" />
            {this.props.state.length > 0 ? (
              <div>{this.props.state.length}</div>
            ) : null}
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(Header);
