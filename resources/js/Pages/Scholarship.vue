<template>
  <main>
    <navigation>
      <li>
        <a class="scroll" href="/#about">{{ $t("pages.home.nav.about") }}</a>
      </li>
      <li>
        <a class="scroll" href="/#donate">{{ $t("pages.home.nav.donate") }}</a>
      </li>

      <li>
        <a class="scroll" href="/#team">{{
          $t("pages.home.nav.admissions")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="/#price">{{
          $t("pages.home.nav.academics")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="/#student-life">{{
          $t("pages.home.nav.student")
        }}</a>
      </li>
      <li>
        <a class="scroll" href="/#work">{{ $t("pages.home.nav.ilimi") }}</a>
      </li>
      <li>
        <a class="scroll" href="/#iilab">{{ $t("pages.home.nav.iilab") }}</a>
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

    <Banner :title="$tc('pages.home.banner.cta', 3)" />

    <section class="scholarship__about" id="about">
      <main class="scholarship__about__description">
        <section class="scholarship__about__description__left">
          <article>
            <div
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <h1 class="">{{ $t("pages.scholarship.left.title") }}</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <p
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="4s"
              data-wow-delay="1s"
            >
              {{ $t("pages.scholarship.left.p-1") }}
            </p>
            <p
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="5s"
              data-wow-delay="1s"
            >
              {{ $t("pages.scholarship.left.p-2") }}
            </p>
          </article>
        </section>
        <section class="scholarship__about__description__right">
          <article>
            <div
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <h1 class="">{{ $t("pages.scholarship.right.list-1.title") }}</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="4s"
              data-wow-delay="1s"
            >
              <li>{{ $t("pages.scholarship.right.list-1.lists.1") }}</li>
              <li>{{ $t("pages.scholarship.right.list-1.lists.2") }}</li>
              <li>{{ $t("pages.scholarship.right.list-1.lists.3") }}</li>
              <li>{{ $t("pages.scholarship.right.list-1.lists.4") }}</li>
              <li>{{ $t("pages.scholarship.right.list-1.lists.5") }}</li>
            </ul>

            <div
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <h1 class="">{{ $t("pages.scholarship.right.list-2.title") }}</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="4s"
              data-wow-delay="1s"
            >
              <li>{{ $t("pages.scholarship.right.list-2.lists.1") }}</li>
              <li>{{ $t("pages.scholarship.right.list-2.lists.2") }}</li>
            </ul>

            <div
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="3s"
              data-wow-delay="1s"
            >
              <h1 class="">{{ $t("pages.scholarship.right.list-3.title") }}</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="4s"
              data-wow-delay="1s"
            >
              <li>{{ $t("pages.scholarship.right.list-3.lists.1") }}</li>
              <li>{{ $t("pages.scholarship.right.list-3.lists.2") }}</li>
              <li>{{ $t("pages.scholarship.right.list-3.lists.3") }}</li>
            </ul>
          </article>
        </section>
      </main>
    </section>

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
export default {
  name: "Scholarship",
  components: {
    Navigation,
    Banner,
    About,
    Admissions,
    Academics,
    IlimiExperience,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>