<template>
  <el-menu
    default-active=""
    class="el-menu-vertical-demo"
    >
    <el-menu-item index="Home">
      <i class="el-icon-s-home"></i>
      <span>Home</span>
    </el-menu-item>
    <el-menu-item index="todos">
      <i class="el-icon-s-cooperation"></i>
      <span>Todos</span>
    </el-menu-item>
    <el-menu-item index="calculator">
      <i class="el-icon-s-cooperation"></i>
      <span>Calculator</span>
    </el-menu-item>
  </el-menu>
</template>

<script>

export default {
  name: 'Navigation',
  components: {
  },
  setup() {

  }
}
</script>

<style>

</style>
