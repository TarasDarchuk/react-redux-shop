import { ADD_TO_CART, DELETE_FROM_CART } from "../consts";

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state = [...state, { ...action.payload, id: Math.random() }];
      return state;
    case DELETE_FROM_CART:
      state = state.filter(item => item.id !== action.payload);
      return state;
    default:
      return state;
  }
};

export default cart;
