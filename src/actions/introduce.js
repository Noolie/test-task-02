export const introduce = (whoIs) => {
  return {
    type: 'PERSON_SELECTED',
    payload: whoIs
  }
}
