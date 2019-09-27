export const INITIAL_STATE = {
  hidden: true,
  cartItems: {}
};

export const addItemToCart = (cartItems, itemToAdd) => {
  const id = itemToAdd.id;
  const isExisting = id in cartItems;

  if (isExisting) {
    return {
      ...cartItems,
      [id]: {
        ...itemToAdd,
        quantity: cartItems[id].quantity + 1
      }
    };
  }
  return {
    ...cartItems,
    [id]: {
      ...itemToAdd,
      quantity: 1
    }
  };
}
