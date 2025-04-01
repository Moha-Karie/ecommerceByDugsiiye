// Tasks to do
// ----------------
// addtoCart
// removeFromCart
// updateCart
// calculateTotal
// clearCart

// the state to be managed
export const initailState = JSON.parse(localStorage.getItem('cart_items')) || {
  products: [],
  total: 0,
};

// the exact reducer
const shopReducer = (state, action) => {
  // state: data to be managed
  // action: shaqada laqbanaayo

  // action needs type and payload
  // type is the action(shaqada nuuceeda) laguu qabanaayo like product-ga cart-ga la iigu daraayo waa kan id-giisu yahay 1
  // payload is the data like waxaan rabaa in product cart-ga la iigu daro
  const { type, payload } = action;

  // state management
  switch (type) {
    // add to cart case
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
      };

    // update cart case
    case "UPDATE_PRODUCT_QUANTITY":
      return {
        ...state,
        products: payload.products,
      };

    // remove from cart case
    case "REMOVE_FROM_CART":
      return {
        ...state,
        products: payload.products,
      };

    // calculate total case
    case "CALCULATE_TOTAL_PRICE":
      return {
        ...state,
        total: payload.total,
      };

    // clear cart case
    case "CLEAR_CART":
      return initailState;

    default:
      throw new Error("Unknow reducer action");
  }
};

export default shopReducer;
