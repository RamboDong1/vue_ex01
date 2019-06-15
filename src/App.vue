<template>
  <el-container>
    <el-header height="100px">
      <h3>我的网站</h3>
      <P>这里是网站头部</P>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      这里是网站的底部
    </el-footer>
  </el-container>
</template>

<style>
  .el-header{
    background-color: dodgerblue;
    color: white;
    text-align: left;
  }
  .el-footer {
    background-color: dodgerblue;
    color: #333;
    text-align: center;
    line-height: 60px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: 100%;
  }
</style>
