<template>
  <div id="app">
    <el-container direction="vertical">
      <Header />
      <el-main style="background-color: #efefef; height: 900px">

        <div style="background-color: #efefef">
          <el-row :gutter="5">
            <el-col :lg="5" :sm="6" :xs="24">
              <Navigation />
            </el-col>
            <el-col :lg="19" :sm="18" :xs="24" style="background-color: white; border-right: solid 1px #e6e6e6; min-height: 300px;">
              
              <!-- Dynamically loaded components -->
              <!--<component v-bind:is="currentComponent"></component>-->
              <router-view />

              <!--
              <div v-if="error">Parent: {{ error }}</div>
              -->

            </el-col>
          </el-row>
        </div>

        <div style="width: 500px;">
          <p>
            <el-alert
              title="You are currently not logged into Office 365, please click to login below.."
              type="warning"
              show-icon
              effect="dark">
            </el-alert>
          </p>
          <p>
            <el-button type="success">All Done</el-button>
          </p>    
        </div>
      </el-main>
      <Footer />
    </el-container>

    

    <!--
    <div style="text-align: center; padding-top: 200px;">
      <p>
        <img alt="Vue logo" src="./assets/ms_loader.gif" height="100"><br/><br/>
        <span style="font-weight: 600;">Authenticating to Microsoft 365...</span>
      </p>
    </div>
    -->

    <div style="text-align: center; padding-top: 200px;">
      <p>
        <img alt="Vue logo" src="./assets/ms_loader.gif" height="100"><br/><br/>
        <span style="font-weight: 600;">Authenticating to Microsoft 365...</span>
      </p>
    </div>
    
  </div>
  
</template>

<script>

import { reactive, toRefs } from 'vue'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
// import Users from './components/Users'
// import ToDo from './components/ToDo'
// import HomeSample from './components/HomeSample'
import useAuth from './store/auth'
import * as Msal from "msal";

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
  async setup() {

    let state = reactive({
        visible: false,
        user: null,
    })

    let { currentUser, getM365User } = useAuth()

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
      //scopes: ['Mail.ReadBasic']
      //scopes: ['https://igeniusgroup.sharepoint.com/.default']
      scopes: ['https://igeniusgroup.sharepoint.com/AllSites.Read']
    };

    console.log('client :>> ', client);
    console.log('request :>> ', request);

    await getM365User(client, request)

    state.user = currentUser

    console.log('user', state.user)
    setTimeout(function() {
      state.visible = true;
      console.log('visible', state.visible)
    }, 1200)


    return {
      ...toRefs(state)
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
