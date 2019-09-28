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

export const clearItemFromCart = (cartItems, id) => {
  const isExisting = id in cartItems;
  if (isExisting) {
    const temp = {...cartItems};
    delete temp[id];
    return temp;
  }

  return cartItems;
}

export const decreaseItemNumber = (cartItems, id) => {
  const isExisting = id in cartItems;
  if (isExisting) {
    if (cartItems[id].quantity == 1) {
      return clearItemFromCart(cartItems, id);
    }
    return {
      ...cartItems,
      [id]: {
        ...cartItems[id],
        quantity: cartItems[id].quantity - 1
      }
    };
  }

  return cartItems;  
}