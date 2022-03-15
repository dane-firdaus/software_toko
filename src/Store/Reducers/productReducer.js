import { products } from "../../Utils/data";

const initialState = {
  products: products,
  carts: [],
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    default:
      return state;
    case "ADD_TO_CART":
      const ItemInCart = state.carts.find((item) => item.id === payload);
      const NewItemCart = state.products.find((item) => item.id === payload);
      if (!ItemInCart) {
        return {
          ...state,
          carts: [...state.carts, NewItemCart],
        };
      } else {
        return state;
      }
    case "tambah_broo":
      const originalPrice = state.products.find((item) => item.id === payload).price;
      const inc = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price + originalPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: inc,
      };
    case "kurangin_broo":
      const oriPrice = state.products.find((item) => item.id === payload).price;
      const dec = state.carts.map((item) => {
        if (item.id === payload) {
          return {
            ...item,
            price: item.price - oriPrice,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        carts: dec,
      };
    case "hapus":
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== payload),
      };
    case "reset":
      return {
        ...state,
        carts: [],
      };
  }
};
export default productReducer;
