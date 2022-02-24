<template>
  <footer>
    <div class="center footer">
      <!-- UP TO TOP -->
      <div class="wow bounce" data-wow-offset="80" data-wow-duration="2s">
        <a href="#home" class="scroll">
          <span class="fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x"></i>
            <i class="fa fa-angle-double-up fa-stack-1x fa-inverse"></i> </span
        ></a>
      </div>

      <div
        id="copyright"
        class="wow bounceIn"
        data-wow-offset="80"
        data-wow-duration="2s"
      >
        <span
          >&copy;2017 - {{ new Date().getUTCFullYear() }}
          {{ $t("pages.home.footer.copyright") }}</span
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
</style>