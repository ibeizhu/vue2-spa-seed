<template>
  <div class="nav-menu clearfix">
    <a href="http://www.imoment.vip"><span class="title">Vue2.0 SPA Demo build by Moment</span></a>
    <div class="fright">
      <el-row>
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">Notification</el-menu-item>
          <el-submenu index="2">
            <template slot="title">My admin</template>
            <el-menu-item index="2-1">Tab2</el-menu-item>
            <el-menu-item index="2-2">Tab3</el-menu-item>
            <el-menu-item index="2-3">Tab4</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-row>
    </div>
  </div>
</template>
<style>
  .nav-menu{
    position: fixed;
    min-width: 100%;
    z-index: 1024;
    box-shadow: 0 2px 3px hsla(0,0%,7%,.1),0 0 0 1px hsla(0,0%,7%,.1);
    background-color: #324057;
  }
  .title{
    color:#fff;
    line-height: 60px;
  }
  a:hover{
    text-decoration: underline;
  }
</style>
