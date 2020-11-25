import { reactive, toRefs } from 'vue'

export default function useAuth() {

  const state = reactive({
    currentUser: null,
    token: null,
  })

  const getM365User = async(x, y) => {
    console.log('action.getM365User()');

    if(!(state.token)) {
      let client = x;
      let request = y;

      let tokenResponse = null;
      try {
        tokenResponse = await client.acquireTokenSilent(request);
        console.log('tokenResponse', tokenResponse)
        state.currentUser = (!tokenResponse) ? null : tokenResponse.account.userName;
        state.token = tokenResponse;
        // state.commit('setToken', tokenResponse);
      } catch (e) {
        state.error = e
      }
    }
  }

  return { ...toRefs(state), getM365User } 
}