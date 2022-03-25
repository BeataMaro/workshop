import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  REDEEM_DISCOUNT_VOUCHER,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], discount: null },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case REDEEM_DISCOUNT_VOUCHER:
      return {
        ...state,
        discount: action.payload,
      };
    default:
      return state;
  }
};
