<template>
  <div id="app">
    <el-container v-if="visible" direction="vertical">
      <Header :username="user" />
      <el-main style="background-color: #efefef; height: 900px;">

        <div v-if="user" style="background-color: #efefef">
          <el-row :gutter="5">
            <el-col :lg="5" :sm="6" :xs="24">
              <Navigation />
            </el-col>
            <el-col :lg="19" :sm="18" :xs="24" style="background-color: white; border-right: solid 1px #e6e6e6; min-height: 300px;">
              
              <!-- Dynamically loaded components -->
              <!--<component v-bind:is="currentComponent"></component>-->
              <router-view />
              
            </el-col>
          </el-row>
        </div>

        <div v-else style="width: 500px;">
          <p>
            <el-alert
              title="You are currently not logged into Office 365, please click to login below.."
              type="warning"
              show-icon
              effect="dark">
            </el-alert>
          </p>
          <p>
            <el-button type="info" icon="el-icon-user-solid" @click="login">Login</el-button>
          </p>  
        </div>
        
      </el-main>
      <Footer />
    </el-container>
    
    <div v-else style="text-align: center; padding-top: 200px;">
      <p>
        <img alt="Vue logo" src="./assets/ms_loader.gif" height="100"><br/><br/>
        <span style="font-weight: 600;">Authenticating to Microsoft 365...</span>
      </p>
    </div>

  </div>
</template>

<script>

import { reactive, toRefs } from 'vue'
// import { useStore } from 'vuex'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
// import Users from './components/Users'
// import ToDo from './components/ToDo'
// import HomeSample from './components/HomeSample'
import useAuth from './store/auth'
import * as Msal from "msal";


function useState() {
    let state = reactive({
        visible: false,
        user: null,
    })

    const config = {
      auth: {
        clientId: '9dc85e34-1e43-4dd8-b89c-2cc905369f9e',
        tenantId: '76170b01-c058-4228-93a9-e403199735e1',
        authority: 'https://login.microsoftonline.com/organizations/',
        redirectUri: 'http://localhost:8080'
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    };

    let client = new Msal.UserAgentApplication(config);
    let request = {
      scopes: ['https://igeniusgroup.sharepoint.com/AllSites.Read']
    };

    let { currentUser, getM365User } = useAuth()

    getM365User(client, request)
    state.user = currentUser

    console.log('state.user', state.user)

    setTimeout(function() {
      state.visible = true;
      console.log('state.visible', state.visible)
    }, 1200)

    return toRefs(state)
    
}

 async function login() {
    console.log('login...');

    //Microsoft365 auth + setup
    const config = {
      auth: {
        clientId: '9dc85e34-1e43-4dd8-b89c-2cc905369f9e',
        tenantId: '76170b01-c058-4228-93a9-e403199735e1',
        authority: 'https://login.microsoftonline.com/organizations/',
        redirectUri: 'http://localhost:8080'
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    };

    var client = new Msal.UserAgentApplication(config)
    var request = {
      scopes: ['https://igeniusgroup.sharepoint.com/AllSites.Read']
    };

    await client.loginPopup(request)


    let { currentUser, getM365User } = useAuth()
    getM365User(client, request)

    location.reload()
    console.log('currentUser :>> ', currentUser);

}

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer,
    // Users,
    // HomeSample,
    // ToDo
  },
  setup() {

    const { visible, user } = useState()

    console.log('visible :>> ', visible);
    console.log('user :>> ', user);

    return {
        visible,
        user,
        login
    }
  }
}
</script>


<style>

  #app {
    /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

  #main {
    margin: 0 20px;
  }

  h2 {
    -webkit-font-smoothing: antialiased;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: -5px;
  }

  h3 {
    -webkit-font-smoothing: antialiased;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: -5px;
  }

  p.info {
    font-size: 0.8rem;
    color: #777;
  }

</style>
