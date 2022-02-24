<template>
  <section class="donate__wrapper" id="donate">
    <div class="donate__wrapper__content">
      <div class="testimony-avatar">
        <img src="/../template/img/patrick_awuah.jpg" alt="" srcset="" />
      </div>
      <q>{{ $t("pages.home.donation.q") }}</q>
      <p v-html="$t(`pages.home.donation.p-1`)"></p>
      <h1>{{ $t("pages.home.donation.h") }}</h1>
      <p v-html="$t(`pages.home.donation.p-2`)"></p>
      <a
        href="/donate"
        class="scroll btn d-btn inverse wow bounceIn"
        data-wow-offset="80"
        data-wow-duration="2s"
        >{{ $t("pages.home.donation.btn") }}</a
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "Donate",
};
</script>

<style lang="scss" scoped>
</style>