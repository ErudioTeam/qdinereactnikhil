import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios"

import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();


  const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],    
  });

  console.log("cart data", state.cart);
  console.log("data",state.products);

// const Context = ({ children }) => {
//   const products = [...Array(20)].map(() => ({
//     id: faker.datatype.uuid(),
//     name: faker.commerce.productName(),
//     price: faker.commerce.price(),
//     image: faker.random.image(),
//     inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//     fastDelivery: faker.datatype.boolean(),
//     ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
//   }));

  useEffect(() => {
    // Fetch data from the backend API using Axios
    axios.get("http://103.186.185.127:8082/products")
      .then((response) => {
        // Update the products in the state with the data from the API
        //console.log('API response', response.data.data);
        dispatch({ type: 'SET_PRODUCTS', payload: response.data.data });
      })
      .catch((error) => {
        console.error("Error fetching data from the API: ", error);
      });
  }, []);

  // useEffect(() => {
  //   console.log(state.products); // This will log every time state.products changes
  // }, [state.products]);

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
