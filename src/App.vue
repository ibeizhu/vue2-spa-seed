<template>
  <div>
    <nav-menu></nav-menu>
    <side-menu></side-menu>
    <div class="view-wrap">
      <router-view></router-view>
    </div>
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
  @import "styles/app.less";
  .view-wrap{
    margin-left: 190px;
    padding-top: 70px;
  }
</style>
