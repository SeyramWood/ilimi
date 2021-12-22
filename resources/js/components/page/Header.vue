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
          <li><a class="scroll" href="#home">Home</a></li>
          <li><a class="scroll" href="#about">About</a></li>
          <li><a class="scroll" href="#team">Admissions</a></li>
          <li><a class="scroll" href="#price">Scholarship</a></li>
          <li><a class="scroll" href="#work">Ilimi Experience</a></li>
          <!-- <li><a class="scroll" href="blog.html">Blog</a></li> -->
          <li><a class="scroll" href="#contact">Contact</a></li>
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
  name: "Header",
};
</script>

<style lang="scss" scoped>
</style>