export default function(state=null, action){
  switch (action.type) {
    case 'DATA_LOADED':
      if(!state){

        let localStore = action.payload.slice();

        if(localStorage.length > 0){
          for(let key in localStorage){
            localStore.push( JSON.parse(localStorage[key]))
          }
        }
        return localStore
      } else {
        return state
      }
    case 'REMOVE_BUTTON_CLICKED':

      if(localStorage.length > 0){
        for(let key in localStorage){
          if(key === action.payload.id){
            localStorage.removeItem(action.payload.id)
          }
        }
      }

      for(let i = 0; i < state.length; i++){
        if(action.payload.id === state[i].id){
          let cut = state.slice();
          cut.splice(i, 1);
          return cut;
        }
      }
    break;
    case 'REMOVE_ALL_PRODUCTS':
      localStorage.clear();
      return action.payload
    case 'ADD_PRODUCT_CLICKED':
      localStorage.setItem(action.payload.id, JSON.stringify(action.payload))
      return [
        ...state,
        action.payload
      ]
    default: return state
  }
}
