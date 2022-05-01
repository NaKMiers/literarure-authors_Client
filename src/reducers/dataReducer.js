import types from '../constants/actionTypes'

const initState = []

const findIndex = (id, datas) => {
   let index = -1
   datas.forEach((datas, i) => {
      if (datas._id === id) {
         index = i
      }
   })

   return index
}

function dataReducer(state = initState, action) {
   const { payload } = action
   const { id } = action
   let index = -1

   switch (action.type) {
      case types.SET_DATA:
         return payload

      case types.EDIT_DATA:
         index = findIndex(id, state)
         if (index !== -1) {
            state.splice(index, 1, payload)
         }
         return state

      default:
         return state
   }
}

export default dataReducer
