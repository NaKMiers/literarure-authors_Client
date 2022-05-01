import types from '../constants/actionTypes'

class Actions {
   // auth
   checkAdmin = () => ({ type: types.CHECK_ADMIN })

   // datas
   setData = payload => ({ type: types.SET_DATA, payload })
   editData = (id, payload) => ({ type: types.EDIT_DATA, id, payload })
}

export default new Actions()
