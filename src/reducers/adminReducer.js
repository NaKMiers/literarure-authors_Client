import types from '../constants/actionTypes'

const initState = false

function adminReducer(state = initState, action) {
   switch (action.type) {
      case types.CHECK_ADMIN:
         return true

      default:
         return state
   }
}

export default adminReducer
