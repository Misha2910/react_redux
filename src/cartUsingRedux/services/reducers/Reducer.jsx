import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const cartItem = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(state);
      return [...state, { cart: action.data }];

    case REMOVE_FROM_CART:
      state.pop();
      return [...state];

    default:
      return state;
  }
};

export default cartItem;
