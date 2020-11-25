import { reactive, toRefs } from 'vue'
import axios from 'axios'

export default function useUsers() {

  const state = reactive({
    error: null,
    users: null,
  })

  const load = async() => {
      try {
        const usersResponse = await axios('https://reqres.in/api/users')
        state.users = usersResponse.data
        console.log('users :>> ', state.users);
      } catch(e) {
        state.error = e
      }
  }

      return { ...toRefs(state), load } 
}