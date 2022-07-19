<template>
  <section>
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <h1
              class="wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              {{ $t("pages.home.admissions.title") }}
            </h1>
            <div class="section-image">
              <img
                src="/../template/img/admissions.jpg"
                alt=""
                srcset=""
                height="5rem"
              />
            </div>
            <div
              class="lead wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
              v-html="$t(`pages.home.admissions.cta`)"
            ></div>
            <div
              class="lead wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              <a
                :href="
                  locale === 'en'
                    ? 'https://forms.office.com/r/gPqfs1BE2q'
                    : 'https://bit.ly/3yW5SCL'
                "
                target="_blank"
                >{{ $t(`pages.home.admissions.link`) }}</a
              >
            </div>

            <!--SERVICE 1-->
            <div
              class="col-sm-3 col-lg-3 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="1s"
            >
              <div class="service">
                <i class="fa fa-users"></i>
              </div>
              <h6>
                <strong>{{
                  $t("pages.home.admissions.service.1.title")
                }}</strong>
              </h6>
              <p>
                {{ $t("pages.home.admissions.service.1.text") }}
              </p>
            </div>

            <!--SERVICE 2-->
            <div
              class="col-sm-3 col-lg-3 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="1.5s"
            >
              <div class="service">
                <i class="fa fa-magic"></i>
              </div>
              <h6>
                <strong>{{
                  $t("pages.home.admissions.service.2.title")
                }}</strong>
              </h6>
              <p>
                {{ $t("pages.home.admissions.service.2.text") }}
              </p>
            </div>

            <!--SERVICE 3-->
            <div
              class="col-sm-3 col-lg-3 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="2s"
            >
              <div class="service">
                <i class="fa fa-tasks"></i>
              </div>
              <h6>
                <strong>{{
                  $t("pages.home.admissions.service.3.title")
                }}</strong>
              </h6>
              <p>
                {{ $t("pages.home.admissions.service.3.text") }}
              </p>
            </div>

            <!--SERVICE 4-->
            <div
              class="col-sm-3 col-lg-3 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="1s"
            >
              <div class="service">
                <i class="fa fa-laptop"></i>
              </div>
              <h6>
                <strong>{{
                  $t("pages.home.admissions.service.4.title")
                }}</strong>
              </h6>
              <p v-html="$t(`pages.home.admissions.service.4.text`)"></p>
            </div>

            <!--SERVICE 5-->
            <!-- <div
              class="col-sm-4 col-lg-4 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="1.5s"
            >
              <div class="service">
                <i class="fa fa-lightbulb-o"></i>
              </div>
              <h6>Great Ideas</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour. Few can name an umpteen ferryboat that isn't an
                ansate plain. A bait is a distance's helium.
              </p>
            </div> -->

            <!--SERVICE 6-->
            <!-- <div
              class="col-sm-4 col-lg-4 text-center wow fadeIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              data-wow-delay="2s"
            >
              <div class="service">
                <i class="fa fa-camera-retro"></i>
              </div>
              <h6>Photography</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour. Few can name an umpteen ferryboat that isn't an
                ansate plain. A bait is a distance's helium.
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <!--WE LIKE TICKER-->
    <section id="ticker">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <h1
              class="like wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
              style="text-transform: capitalize"
            >
              {{ $t("pages.home.admissions.why") }}<br />
              <span class="ticker"></span>
            </h1>
          </div>
        </div>
      </div>
    </section>
    <!--//WE LIKE TICKER-->

    <!--CHARTS-->
    <!-- <section id="charts">
      <div class="well">
        <div class="dark_overlay">
          <div class="container">
            <h1 class="wow fadeIn" data-wow-offset="80" data-wow-duration="2s">
              Our Skills
            </h1>


            <div
              class="col-sm-4 col-lg-4 text-center pie wow bounceIn"
              data-wow-delay="1s"
            >
              <span class="chart1">
                <span class="percent">70%</span>
              </span>
              <p class="center">Women & Gender Equality</p>
            </div>

            <div
              class="col-sm-4 col-lg-4 text-center bouncein pie wow bounceIn"
              data-wow-delay="1.5s"
            >
              <span class="chart2">
                <span class="percent">75%</span>
              </span>
              <p class="center">Scholarships & Financial Aid</p>
            </div>

            <div
              class="col-sm-4 col-lg-4 text-center bouncein pie wow bounceIn"
              data-wow-delay="1.8s"
            >
              <span class="chart3">
                <span class="percent">90%</span>
              </span>
              <p class="center">Internships & Placement</p>
            </div>
          </div>
          <div class="pad30"></div>
        </div>
      </div>
    </section> -->
    <section id="milestones">
      <div class="well">
        <div class="dark_overlay1">
          <div class="container">
            <h1 class="wow fadeIn" data-wow-offset="80" data-wow-duration="2s">
              {{ $t("pages.home.admissions.stats.title") }}
            </h1>

            <div class="pad45"></div>

            <div class="col-sm-4 col-lg-4 text-center">
              <div
                class="counter wow bounceIn"
                data-wow-offset="80"
                data-wow-duration="2s"
              >
                <div id="counter-1"></div>
                <p class="light">
                  {{ $t("pages.home.admissions.stats.text-1") }}
                </p>
              </div>
            </div>

            <div class="col-sm-4 col-lg-4 text-center">
              <div
                class="counter wow bounceIn"
                data-wow-offset="80"
                data-wow-duration="2s"
              >
                <div id="counter-2"></div>
                <p class="light">
                  {{ $t("pages.home.admissions.stats.text-2") }}
                </p>
              </div>
            </div>

            <div class="col-sm-4 col-lg-4 text-center">
              <div
                class="counter wow bounceIn"
                data-wow-offset="80"
                data-wow-duration="2s"
              >
                <div id="counter-3"></div>
                <p class="light">
                  {{ $t("pages.home.admissions.stats.text-3") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "Admissions",
};
</script>

<style lang="scss" scoped>
</style>
