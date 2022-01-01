<template>
  <main>
    <navigation>
      <li><a class="scroll" href="#home">Home</a></li>
      <li><a class="scroll" href="#about">About</a></li>
      <li><a class="scroll" href="#team">Admissions</a></li>
      <li><a class="scroll" href="#price">Scholarship</a></li>
      <li><a class="scroll" href="#work">Ilimi Experience</a></li>
      <li><a class="scroll" href="#contact">Contact</a></li>
    </navigation>

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