import { ADD_TO_CART, DELETE_FROM_CART } from "../consts";

export const addToCart = item => {
  const action = {
    type: ADD_TO_CART,
    payload: item
  };
  return action;
};

export const deleteFromCart = id => {
  const action = {
    type: DELETE_FROM_CART,
    payload: id
  };
  return action;
};
