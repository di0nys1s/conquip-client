<template>
    <el-header class="top-header" height="48px">
        <div style="clear: both;">
            <div style="float: left;">
                <div style="display: table-cell; vertical-align: middle; height: 48px;">
                <span style="height: 100%; padding: 0px 15px 0px 10px"><a href="https://www.office.com/" target="_blank"><img src="../assets/nine-dots.png" height="13"></a></span>
                <i class="el-icon-user"></i> iGenius 365 Case Manager
                </div>
            </div>
            <div style="float: right; color: white;">
                <div class="container">
                    <div class="text">
                        <span>Adam Johnstone</span>
                    </div>
                    <div class="image">
                        <img src="../assets/adamj.png" height="38" >
                    </div>
                </div>
            </div>
        </div>
    </el-header>
</template>

<script>

</script>

<style >
.top-header {
  background-color: #005066;
  color: white;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
}

img {
  max-width: 100%
}

.image {
  padding-right: 10px;
}

.text {
  font-size: 14px;
  text-align: right;
  width: 150px;
  padding-right: 10px;
}
</style>
