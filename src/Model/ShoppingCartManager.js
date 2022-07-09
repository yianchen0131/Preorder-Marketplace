class ShoppingCartManager {
  /**
   * addToShopCart method to get the subtotal
   * @param {*} _subtotal, takes a number
   * @returns the first element in the array as the subtotal value
   */
  addToShopCart(_subtotal) {
    let manageSubtotal = [0];
    manageSubtotal[0] += _subtotal;
    // let sumTotal = manageSubtotal.reduce((prev, curr) => prev + curr, 0);
    console.log(manageSubtotal[0]);
    return manageSubtotal[0];
  }
}

export default ShoppingCartManager;
