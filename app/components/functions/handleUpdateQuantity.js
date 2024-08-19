const handleUpdateQuantity = (cart, dessert, itemQuantity) => {
  return cart.reduce((accumulator, item) => {
    if (item.name === dessert.name) {
      // Determine the new quantity
      const newQuantity =
        typeof itemQuantity === "number"
          ? item.quantity + itemQuantity // from button clicks
          : parseInt(itemQuantity.target.value, 10); // from manual input

      // If the new quantity is greater than 0, keep the item in the cart
      if (newQuantity > 0) {
        return [...accumulator, { ...item, quantity: newQuantity }];
      } else {
       
        return accumulator;
      }
    }
    // If the item is not the one being updated, keep it in the cart
    return [...accumulator, item];
  }, []);
};

export default handleUpdateQuantity;
