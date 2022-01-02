<template>
  <main>
    <navigation>
      <li>
        <a class="scroll" href="#home">{{ $t("pages.home.nav.home") }}</a>
      </li>
      <li>
        <a class="scroll" href="#about">{{ $t("pages.home.nav.about") }}</a>
      </li>
      <li>
        <a class="scroll" href="#team">{{ $t("pages.home.nav.admissions") }}</a>
      </li>
      <li>
        <a class="scroll" href="#price">{{
          $t("pages.home.nav.scholarship")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="#work">{{ $t("pages.home.nav.ilimi") }}</a>
      </li>
      <li>
        <a class="scroll" href="#contact">{{ $t("pages.home.nav.contact") }}</a>
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

    <Banner :title="$tc('pages.home.banner.cta', 1)" />

    <About />

    <Admissions />

    <Academics />

    <IlimiExperience />

    <Blog />

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
import Blog from "../components/page/Blog";
import Contact from "../components/page/Contact";
import Footer from "../components/page/Footer";
export default {
  name: "Home",
  components: {
    Navigation,
    Banner,
    Admissions,
    About,
    IlimiExperience,
    Academics,
    Blog,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>