<template>
  <div id="main">

    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
      <el-breadcrumb-item>...</el-breadcrumb-item>
    </el-breadcrumb>

    <h2>Case Manager</h2>
    <p class="info">The following dashboard shows all active follow ups for case staff to process, with urgency shown as red / yellow rows.</p>

    <img src="../../assets/home-report.png">

    <br/><br/>
    <p><strong>DEV purposes... SharePoint REST API Query:</strong></p>
    <p>https://igeniusgroup.sharepoint.com/sites/dms/Shared Documents/</p>

  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  setup() {

  },
}
</script>

<style>
#main {
  padding: 20px;
}

</style>
