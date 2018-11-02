import { ADD_TO_CART, DELETE_FROM_CART } from "../consts";

export const addToCart = item => {
  return dispatch => {
    dispatch({
      type: ADD_TO_CART,
      payload: item
    });
  };
};

export const deleteFromCart = id => {
  return dispatch => {
    dispatch({
      type: DELETE_FROM_CART,
      payload: id
    });
  };
};
