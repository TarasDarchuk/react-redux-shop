import React from "react";

const CartProduct = props => {
  return (
    <div className="cart__products-item" key={props.key}>
      <img src={props.image} alt="" />
      <div className="cart__products-item-info">
        <h5>{props.model}</h5>
        <span>${props.price}</span>
        <br />
        <div className="button delete-button" onClick={() => props.delete()}>
          Remove
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
