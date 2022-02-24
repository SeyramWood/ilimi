<template>
  <main>
    <navigation>
      <li>
        <a class="scroll" href="#about">{{ $t("pages.home.nav.about") }}</a>
      </li>
      <li>
        <a class="scroll" href="#donate">{{ $t("pages.home.nav.donate") }}</a>
      </li>
      <li>
        <a class="scroll" href="#team">{{ $t("pages.home.nav.admissions") }}</a>
      </li>
      <li>
        <a class="scroll" href="#price">{{ $t("pages.home.nav.academics") }}</a>
      </li>
      <li>
        <a class="scroll" href="#student-life">{{
          $t("pages.home.nav.student")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="#work">{{ $t("pages.home.nav.ilimi") }}</a>
      </li>
      <li>
        <a class="scroll" href="#iilab">{{ $t("pages.home.nav.iilab") }}</a>
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

    <Donate />

    <Admissions />

    <Academics />

    <StudentLife />

    <IlimiExperience />

    <IIlab />

    <Newsletter />

    <Contact />

    <Footer />
  </main>
</template>

<script>
import Navigation from "../components/page/Navigation";
import Banner from "../components/page/Banner";
import About from "../components/page/About";
import Donate from "../components/page/Donate";
import Admissions from "../components/page/Admissions";
import Academics from "../components/page/Academics";
import StudentLife from "../components/page/StudentLife";
import IlimiExperience from "../components/page/IlimiExperience";
import IIlab from "../components/page/IIlab";
import Newsletter from "../components/page/Newsletter";
import Contact from "../components/page/Contact";
import Footer from "../components/page/Footer";
export default {
  name: "Home",
  components: {
    Navigation,
    Banner,
    About,
    Donate,
    Admissions,
    Academics,
    StudentLife,
    IlimiExperience,
    IIlab,
    Newsletter,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>