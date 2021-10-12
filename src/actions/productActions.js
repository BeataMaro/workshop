import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import products from "../products";

export const listProducts =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });

      const regex = new RegExp(`${keyword}`, "gi");

      const searchResult = await products.filter(
        (prod) => prod.name.match(regex) || prod.description.match(regex)
      );

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: searchResult.length ? searchResult : products,
      });
    } catch (err) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: err.message,
      });
    }
  };

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const product = products.find((prod) => prod._id === id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: err.message,
    });
  }
};
