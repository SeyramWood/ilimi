<template>
  <section>
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <h1
              class="wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              {{ $t("pages.home.about.title") }}
            </h1>

            <div
              class="lead wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
              v-html="$t(`pages.home.about.cta`)"
            ></div>
          </div>

          <div class="col-sm-12 col-lg-6">
            <p class="wow fadeIn" data-wow-offset="80" data-wow-duration="2s">
              {{ $t("pages.home.about.text-left") }}
            </p>
          </div>

          <div class="col-sm-12 col-lg-6">
            <p class="wow fadeIn" data-wow-offset="80" data-wow-duration="2s">
              {{ $t("pages.home.about.text-right") }}
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12 pad15">
            <!--BUTTONS-->
            <a
              href="#contact"
              class="scroll btn marg-right10 wow bounceIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              >{{ $t("pages.home.about.btn") }}</a
            >

            <!-- <a
              href="#work"
              class="scroll btn wow bounceIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              >OUR WHY</a
            > -->
            <div class="pad45"></div>

            <!--TEAM MEMBERS-->
            <div id="grid-container" class="cbp-l-grid-team">
              <ul class="cbp-l-grid-team">
                <!--1-->
                <li class="cbp-item">
                  <a
                    href="https://michaellejean.ca/welcome"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cbp-caption"
                  >
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/team/1.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <div class="cbp-l-caption-text">
                            {{ $t("pages.home.about.hover-text") }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="ajax/team1.html"
                    class="cbp-singlePage cbp-l-grid-team-name"
                    >Michaëlle Jean</a
                  >
                  <div class="cbp-l-grid-team-position">
                    {{ $tc("pages.home.about.position", 1) }}
                  </div>
                </li>

                <!--2-->
                <li class="cbp-item">
                  <a
                    href="https://www.linkedin.com/in/kaderkaneye"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="cbp-caption"
                  >
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/team/2.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <div class="cbp-l-caption-text">
                            {{ $t("pages.home.about.hover-text") }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="ajax/team2.html"
                    class="cbp-singlePage cbp-l-grid-team-name"
                    >Kader Kaneye</a
                  >
                  <div class="cbp-l-grid-team-position">
                    {{ $tc("pages.home.about.position", 2) }}
                  </div>
                </li>

                <!--3-->
                <!-- <li class="cbp-item">
                  <a href="ajax/team3.html" class="cbp-caption cbp-singlePage">
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/team/3.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <div class="cbp-l-caption-text">VIEW PROFILE</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="ajax/team3.html"
                    class="cbp-singlePage cbp-l-grid-team-name"
                    >Fati N'zi-Hassane</a
                  >
                  <div class="cbp-l-grid-team-position">Board Member</div>
                </li> -->

                <!--4-->
                <!-- <li class="cbp-item">
                  <a href="ajax/team4.html" class="cbp-caption cbp-singlePage">
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/team/4.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <div class="cbp-l-caption-text">VIEW PROFILE</div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="ajax/team4.html"
                    class="cbp-singlePage cbp-l-grid-team-name"
                    >Marq Cole</a
                  >
                  <div class="cbp-l-grid-team-position">Thinker</div>
                </li> -->
              </ul>
            </div>
            <!--//TEAM MEMBERS-->

            <div class="pad60"></div>
          </div>
        </div>
      </div>
    </section>

    <!--MILESTONES-->

    <section id="charts">
      <div class="well">
        <div class="dark_overlay">
          <div class="container">
            <h1 class="wow fadeIn" data-wow-offset="80" data-wow-duration="2s">
              {{ $t("pages.home.about.impact.title") }}
            </h1>

            <!--1-->
            <div
              class="col-sm-4 col-lg-4 text-center pie wow bounceIn"
              data-wow-delay="1s"
            >
              <span class="chart1">
                <span class="percent">70%</span>
              </span>
              <p class="center">{{ $t("pages.home.about.impact.70") }}</p>
            </div>
            <!--2-->
            <div
              class="col-sm-4 col-lg-4 text-center bouncein pie wow bounceIn"
              data-wow-delay="1.5s"
            >
              <span class="chart2">
                <span class="percent">75%</span>
              </span>
              <p class="center">{{ $t("pages.home.about.impact.75") }}</p>
            </div>
            <!--3-->
            <div
              class="col-sm-4 col-lg-4 text-center bouncein pie wow bounceIn"
              data-wow-delay="1.8s"
            >
              <span class="chart3">
                <span class="percent">90%</span>
              </span>
              <p class="center">{{ $t("pages.home.about.impact.90") }}</p>
            </div>
          </div>
          <div class="pad30"></div>
        </div>
      </div>
    </section>
    <!--//MILESTONES-->
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
</style>