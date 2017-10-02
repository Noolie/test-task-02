export const addProduct = (newItem) => {
  return {
    type: 'ADD_PRODUCT_CLICKED',
    payload: newItem
  }
}
