import { API } from '../constants'
import axios from 'axios'

class Apis {
   // auth
   checkAdmin = value => axios.post(`${API}/auth/check-admin`, { value })

   // datas
   getData = () => axios.get(`${API}/datas/get`)
   editData = (id, data) => axios.put(`${API}/datas/edit/${id}`, { data })
}

export default new Apis()
