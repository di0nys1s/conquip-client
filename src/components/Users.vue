<template>
  <div>
    <h1>Users</h1>
    <Suspense>
      <div v-if="error">{{ error }}</div>
      <AsyncUser v-else v-for="user in users.data" :key="user.id" :user="user" />
    </Suspense>
  </div>
</template>

<script>

import { defineAsyncComponent } from 'vue'
import Loading from '../components/Loading'
import useUsers from '../modules/users'

const AsyncUser = defineAsyncComponent({
    loader: () => import('./User' /* webpackChunkName: "user" */),
    loadingComponent: Loading,
    delay: 200,
    // errorComponent: ErrorComp,
    // timeout: 3000,
    suspensible: false
  })

// comment

export default {
  name: 'Users',
  components: {
    AsyncUser
  },
  async setup() {

    const { users, error, load } = useUsers()
    await load()

    return { 
      users,
      error,
    }

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
