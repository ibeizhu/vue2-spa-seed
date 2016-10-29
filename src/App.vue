<template>
  <div>
    <nav-menu></nav-menu>
    <side-menu></side-menu>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </div>
</template>

<script>
import NavMenu from 'components/common/navMenu'
import SideMenu from 'components/common/sideMenu'
export default {
  name: 'app',
  components: {
    NavMenu,SideMenu
  },
  data(){
    return {

    }
  }
}
</script>

<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
