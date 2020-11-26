import { createStore } from 'vuex'

const state = {
  currentUser: null,
  token: null
},
mutations = {

}

const actions = {
  async getM365User (state, payload) {
    console.log('action.getM365User()');

    if(!this.token) {
      let client = payload.client;
      let request = payload.request;

      let tokenResponse = null;
      try {
        tokenResponse = await client.acquireTokenSilent(request);
        console.log('tokenResponse', tokenResponse)
        state.currentUser = (!tokenResponse) ? null : tokenResponse.account.userName;
        state.token = tokenResponse;
      } catch (e) {
        console.error('No login exists. Error was - ', e);
      }
    } 
  }
}

export default createStore({
  state,
  mutations,
  actions
})