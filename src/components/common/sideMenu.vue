<template>
  <div class="side-menu">
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" :router="true">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>Tasks</template>
            <el-menu-item index="host">host</el-menu-item>
            <el-menu-item index="cron">cron</el-menu-item>
          </el-submenu>
          <el-menu-item index="2"><i class="el-icon-menu"></i>Works</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>Other</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style>
  .side-menu{
    position: fixed;
    top: 50px;
    left: 0;
    bottom: 0;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: 100%;
    z-index: 1023;
    background: #fff;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
