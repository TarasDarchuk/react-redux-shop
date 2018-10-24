import React, { Component } from "react";
import "./Product.css";

import { connect } from "react-redux";
import { addToCart } from "../../actions/index";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productHover: false
    };
  }

  addToCart(product) {
    this.props.addToCart(product);
    console.log(product);
  }

  render() {
    return (
      <div
        className="product"
        key={this.props.key}
        onMouseEnter={() =>
          this.setState({
            productHover: !this.state.productHover
          })
        }
        onMouseLeave={() =>
          this.setState({
            productHover: !this.state.productHover
          })
        }
      >
        <img src={this.props.image} alt="" />
        <h6>{this.props.colors}</h6>
        <hr />
        <h5>{this.props.model}</h5>
        <span>{this.props.gender} shoe</span>
        <br />

        <span>${this.props.price}</span>
        {this.state.productHover ? (
          <div
            className="button"
            onClick={() => this.addToCart(this.props.product)}
          >
            Add To Cart
          </div>
        ) : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(
  mapStateToProps,
  { addToCart }
)(Product);
