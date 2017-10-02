export const getData = (loadedData) => {
  return{
    type: 'DATA_LOADED',
    payload: loadedData
  }
}
