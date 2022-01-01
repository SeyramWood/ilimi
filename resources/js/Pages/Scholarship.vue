<template>
  <main>
    <navigation>
      <li><a class="scroll" href="/#home">Home</a></li>
      <li><a class="scroll" href="/#about">About</a></li>
      <li><a class="scroll" href="/#team">Admissions</a></li>
      <li><a class="scroll" href="/#price">Scholarship</a></li>
      <li><a class="scroll" href="/#work">Ilimi Experience</a></li>
      <li><a class="scroll" href="/#contact">Contact</a></li>
    </navigation>

    <Banner title="SCHOLARHIPS" />

    <section class="scholarship__about" id="about">
      <main class="scholarship__about__description">
        <section class="scholarship__about__description__left">
          <article>
            <div
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 class="">À propos</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <!-- <p>
                Les « Scholars Program Partners » de la Fondation Mastercard est
                une initiative mondiale visant à éduquer et à former la
                prochaine génération de leaders qui contribueront au progrès
                social et économique du continent Africain. La Mastercard
                Foundation et L’African Development Universalis (A.D.U.) ont le
                plaisir de vous annoncer les bourses Mastercard Foundation
                Scholars Program à A.D.U.
              </p> -->
            <p
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-anchor-placement="bottom-bottom"
            >
              Ce programme offre une bourse d’études complète aux étudiants,
              cette bourse permet à des jeunes issus de communautés
              économiquement défavorisées, qui ont fait preuve de excellence
              scolaire et de potentiel de leadership, d'accéder à une éducation
              de qualité et pertinente. Le Mastercard Foundation Scholars
              Program fournit un soutien financier, social, académiques et
              dispose d’un de soutien complet comprenant un éventail de services
              de mentorat et accompagne leur transition vers des opportunités
              d’emploi et entreprenariat.
            </p>
            <p
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-anchor-placement="bottom-bottom"
            >
              Ce programme qui n’est par ailleurs implémenté que dans de
              prestigieuses universités comme : Stanford, Berkeley et Wellesley
              aux Etats Unis; Université de Toronto et McGill au Canada;
              Sciences Po en France; Universite de Cape Town, Makerere, Ashesi
              et ALU en Afrique, Et est porté en Afrique francophone avec
              l’université Gaston Berger au Sénégal, 2iE au Burkina Faso et
              A.D.U. au Niger.
            </p>
          </article>
        </section>
        <section class="scholarship__about__description__right">
          <article>
            <div
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 class="">La bourse</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-anchor-placement="bottom-bottom"
            >
              <li>Les frais de scolarité</li>
              <li>L’hébergement</li>
              <li>Matériels scolaires</li>
              <li>Transport</li>
              <li>Allocations mensuelles</li>
            </ul>

            <div
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 class="">Les critères</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-anchor-placement="bottom-bottom"
            >
              <li>
                Posséder un BAC ou un diplôme équivalent avec un excellent
                parcours académique.
              </li>
              <li>Démontrer un besoin clair de soutien financier</li>
            </ul>

            <div
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-anchor-placement="bottom-bottom"
            >
              <h1 class="">Programmes</h1>
              <div class="line">
                <div class="line__kite"></div>
                <div class="line__main"></div>
                <div class="line__kite"></div>
              </div>
            </div>
            <ul
              class="about-title"
              data-aos="fade-up"
              data-aos-duration="1300"
              data-aos-anchor-placement="bottom-bottom"
            >
              <li>Droit privé</li>
              <li>
                Business Administration (Comptabilité, Gestion, Systèmes
                d’information, Marketing, Ressources Humaines…)
              </li>
              <li>Intelligence Artificielle (Informatique)</li>
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
import Blog from "../components/page/Blog";
import Contact from "../components/page/Contact";
import Footer from "../components/page/Footer";
export default {
  name: "Scholarship",
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