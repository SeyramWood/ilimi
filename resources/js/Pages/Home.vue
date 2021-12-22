<template>
  <main>
    <Header />

    <Banner />

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
import Header from "../components/page/Header";
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
    Header,
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