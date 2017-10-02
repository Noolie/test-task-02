export default function(state=null, action){
  switch (action.type) {
    case 'PERSON_SELECTED':
      if(action.payload === 'admin'){
        return 'admin'
      } else if(action.payload === 'user') {
        return 'user'
      } else {
        return state
      }
    default: return state
  }
}
