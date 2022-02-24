<template>
  <main class="donate-page">
    <navigation>
      <li>
        <a class="scroll" href="/#home">{{ $t("pages.home.nav.home") }}</a>
      </li>
      <li>
        <a class="scroll" href="/#about">{{ $t("pages.home.nav.about") }}</a>
      </li>
      <li>
        <a class="scroll" href="/#team">{{
          $t("pages.home.nav.admissions")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="/#price">{{
          $t("pages.home.nav.scholarship")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="/#work">{{ $t("pages.home.nav.ilimi") }}</a>
      </li>
      <li>
        <a class="scroll" href="/#contact">{{
          $t("pages.home.nav.contact")
        }}</a>
      </li>
      <li class="navigation lang">
        <ul>
          <li :class="[getLocale === 'en' && 'active']" role="button">
            <a role="button" @click="changeLocale('en')">EN</a>
          </li>
          <li :class="[getLocale === 'fr' && 'active']" role="button">
            <a role="button" @click="changeLocale('fr')">FR</a>
          </li>
        </ul>
      </li>
    </navigation>

    <Banner :title="$tc('pages.home.banner.cta', 2)" />

    <div class="donate">
      <div class="donate__cta">
        <p>
          {{ $t("pages.donate.cta") }}
        </p>
      </div>
      <div class="donate__wrapper">
        <div class="donate__wrapper__content">
          <h3>{{ $t("pages.donate.content.h3") }}</h3>
          <h1>{{ $t("pages.donate.content.h1") }}</h1>
          <p v-html="$t(`pages.donate.content.p`)"></p>
        </div>
      </div>
      <div class="donate__info">
        <div class="donate__info__card">
          <div class="donate__info__header">
            <h1>{{ $t("pages.donate.info.h1") }}</h1>
            <p v-html="$t(`pages.donate.info.p`)"></p>
          </div>
          <div class="adonate__info__main">
            <s-accordions>
              <s-accordion>
                <template #header>
                  <h1>{{ $t(`pages.donate.info.info-main.h1-1`) }}</h1>
                </template>
                <div class="collapse__content">
                  <p>{{ $t(`pages.donate.info.info-main.p`) }}</p>
                  <p v-html="$t(`pages.donate.info.info-main.address`)"></p>
                </div>
              </s-accordion>
              <s-accordion>
                <template #header>
                  <h1>{{ $t(`pages.donate.info.info-main.h1-2`) }}</h1>
                </template>
                <div class="collapse__content">
                  <p v-html="$t(`pages.donate.info.info-main.p-2`)"></p>
                </div>
              </s-accordion>
            </s-accordions>
          </div>
        </div>
        <div class="donate__info__card">
          <div class="donate__info__header mt">
            <h1>{{ $t(`pages.donate.info.info-card.h1-1`) }}</h1>
          </div>
          <div class="adonate__info__main">
            <s-accordions>
              <s-accordion>
                <template #header>
                  <h1>{{ $t(`pages.donate.info.info-card.h1-2`) }}</h1>
                </template>
                <div class="collapse__content">
                  <div class="bank-png">
                    <img src="/../template/img/orabank.png" alt="" srcset="" />
                  </div>
                </div>
              </s-accordion>
            </s-accordions>
          </div>
        </div>
      </div>
    </div>
    <Contact />

    <Footer />
  </main>
</template>

<script>
import Navigation from "../components/page/Navigation";
import Banner from "../components/page/Banner";
import About from "../components/page/About";
import Admissions from "../components/page/Admissions";
import IlimiExperience from "../components/page/IlimiExperience";
import Academics from "../components/page/Academics";
import Contact from "../components/page/Contact";
import Footer from "../components/page/Footer";
import SAccordions from "../components/accordion/SAccordions";
import SAccordion from "../components/accordion/SAccordion";
export default {
  name: "Home",
  components: {
    Navigation,
    Banner,
    About,
    Admissions,
    Academics,
    IlimiExperience,
    Contact,
    Footer,
    SAccordions,
    SAccordion,
  },
};
</script>

<style lang="scss" scoped>
</style>