import reducer, { initailState } from "./shopReducer";
import { createContext, useContext, useEffect, useReducer } from "react";

// ShopContext
export const ShopContext = createContext(initailState);

// shop provider

export const ShopProvider = ({ children }) => {
  // the children is our all components

  // preparing the reducer
  const [state, dispatch] = useReducer(reducer, initailState);

  // using local storage for the item in cart

  useEffect(() => {
    localStorage.setItem(
      "cart_items",
      JSON.stringify({ products: state.products, total: state.total })
    );
  }, [state]);

  // add to cart function
  const addToCart = (product) => {
    // product is the product we want to add to the cart
    // the logic
    const productIndex = state.products.findIndex((p) => p.id === product.id);

    let updatedProduct = [...state.products];

    // (!== -1) if exists
    if (productIndex !== -1) {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: updatedProduct[productIndex].quantity + 1,
      };
    } else {
      updatedProduct = [
        ...updatedProduct,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    // Todo: calculate function $ update the state

    // calling add to cart function
    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  // total price calculating function
  const calculateTotalPrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });

    // dispath waits to things
    // 1. state
    // 2. action

    dispatch({
      type: "CALCULATE_TOTAL_PRICE",
      payload: {
        // total: total,
        total,
      },
    });
  };

  // updating product quantity function
  const updateProductQuantity = (product, newQuantity) => {
    // product is the updated product
    // newQuantity is the new quantity

    // finding product index
    const productIndex = state.products.findIndex((p) => p.id === product.id);

    //
    let updatedProduct = [...state.products];

    if (newQuantity <= 0) {
      updatedProduct = updatedProduct.filter((pro) => pro.id !== product.id);
    } else {
      updatedProduct[productIndex] = {
        ...updatedProduct[productIndex],
        quantity: newQuantity,
      };
    }

    // calling the calculate product price function
    calculateTotalPrice(updatedProduct);

    dispatch({
      type: "UPDATE_PRODUCT_QUANTITY",
      payload: {
        products: updatedProduct,
      },
    });
  };

  // Remove from cart function
  const removeFromCart = (product) => {
    // state
    const updatedProduct = state.products.filter(
      (pro) => pro.id !== product.id
    );

    // calcualte the total funciton
    calculateTotalPrice(updatedProduct);

    // action : what actually happens
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  // Clear functionality
  const clearCart = () => {
    //action only
    dispatch({
      type: "CLEAR_CART",
      payload: {},
    });
  };

  // accessable things
  const value = {
    products: state.products,
    total: state.total,
    addToCart,
    updateProductQuantity,
    removeFromCart,
    clearCart,
  };

  //
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

//  Custom Hook
const useShopContextHook = () => {
  // the importing functionality
  const context = useContext(ShopContext);

  if (!context || undefined) {
    throw new Error("Context must be inside shop context");
  }

  return context;
};

export default useShopContextHook;
