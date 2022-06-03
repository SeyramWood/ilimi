<template>
  <section class="banner">
    <div class="banner__top">
      <div class="banner_overlay">
        <div id="content">
<!--          <div class="byline wow slideInLeft pad30" data-wow-delay="7s">-->
<!--            African Development Universalis-->
<!--          </div>-->
<!--          <h1-->
<!--            class="wow bounceInDown"-->
<!--            data-wow-duration="3s"-->
<!--            data-wow-delay="4s"-->
<!--          >-->
<!--            {{ title }}!-->
<!--          </h1>-->
<!--          <div-->
<!--            class="name wow bounceInDown"-->
<!--            data-wow-duration="3s"-->
<!--            data-wow-delay="2s"-->
<!--          >-->
<!--            {{ $t("pages.home.banner.values") }}-->
<!--          </div>-->
          <div class="text-center">
            <a href="#about" class="scroll">
              <i
                class="fa fa-caret-down fa-inverse fa-3x ilink wow rotateIn"
                data-wow-duration="1s"
                data-wow-delay="8s"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--BIG IMAGE-->
    <section class="banner__below"></section>
  </section>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
