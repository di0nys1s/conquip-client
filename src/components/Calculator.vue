<template>
  <div id='main'>
    <el-container>
      <el-form :inline="true">
        <el-form-item>
          <el-input type="text" v-model="num1"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model="num2"></el-input>
        </el-form-item>
        <el-form-item>
          <span>Total = {{ result }}</span>
        </el-form-item>
      </el-form>
    </el-container>
  
  <el-row>
      <Suspense>
        <template #default>
          <Users /> 
        </template>
        <template #fallback>
          <div>Loading users...</div>
        </template>
      </Suspense>
    </el-row>
  
  </div>

  

</template>

<script>
import { reactive, computed, toRefs } from "vue"
import Users from '../components/Users'

function useCalculator() {
    let state = reactive({
        num1: 0,
        num2: 0,
        result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
    })

    return toRefs(state)
}

export default {
  name: 'Calculator',
  components: {
    Users
  },
  setup() {

    let { num1, num2, result } = useCalculator()

    return {
        num1,
        num2,
        result
    };
  },
};
</script>

<style scoped>



</style>