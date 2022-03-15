export const addCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};
export const Increment = (id) => {
  return {
    type: "tambah_broo",
    payload: id,
  };
};
export const Decrement = (id) => {
  return {
    type: "kurangin_broo",
    payload: id,
  };
};
export const remove = (id) => {
  return {
    type: "hapus",
    payload: id,
  };
};
export const reset = (id) => {
  return {
    type: "reset",
    payload: id,
  };
};
