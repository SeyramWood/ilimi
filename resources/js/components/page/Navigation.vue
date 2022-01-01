<template>
  <div id="header">
    <div class="col-sm-12 col-lg-12">
      <div class="row">
        <!--LOGO-->
        <div id="logo">
          <a class="scroll" href="#home"
            ><img src="template/img/logo.png" alt=""
          /></a>
        </div>
        <!--//LOGO-->

        <!--MENU-->
        <ul id="menu">
          <slot />
        </ul>
        <!--//MENU-->
        <!--RESPONSIVE TOGGLE-->
        <div id="nav-toggle">
          <i class="fa fa-bars"></i>
        </div>
        <!--//RESPONSIVE TOGGLE-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
</style>