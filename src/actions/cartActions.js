import { CART_ADD_ITEM, CART_REMOVE_ITEM, REDEEM_DISCOUNT_VOUCHER } from "../constants/cartConstants";
import products from "../products";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const product = products.find((prod) => prod._id === id);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: id });
};

export const redeemDicountVoucher = (discount) => async (dispatch, getState) => {
  dispatch({ type: REDEEM_DISCOUNT_VOUCHER, payload: discount})
  localStorage.setItem("Discount %", JSON.stringify(getState().cart.discount));
}
