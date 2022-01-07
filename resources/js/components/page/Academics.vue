<template>
  <section>
    <section id="price">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <h1
              class="wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              {{ $t("pages.home.scholarship.title") }}
            </h1>

            <div
              class="lead wow fadeInRightBig"
              data-wow-offset="80"
              data-wow-duration="2s"
              v-html="$t(`pages.home.scholarship.cta`)"
            ></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-12">
            <div class="row">
              <div id="pricing" class="container text-center">
                <!--1-->
                <div
                  class="col-sm-6 col-lg-4 wow bounceIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <div class="price-plan">
                    <div class="price-plan-top">
                      <a class="price-plan-link">
                        <h2>
                          {{
                            $t("pages.home.scholarship.details.benefits.title")
                          }}
                        </h2>
                        <div class="price">
                          <!-- <span class="dollar">$</span>
                          <span class="amt annual">6</span>
                          <span class="mo">/mo</span>
                          <p class="price-breakdown">
                            Pay yearly or $10 per month
                          </p> -->
                        </div>
                      </a>
                    </div>
                    <div class="info-wrapper">
                      <ul class="list-group">
                        <li>
                          {{
                            $t("pages.home.scholarship.details.benefits.list.1")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.benefits.list.2")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.benefits.list.3")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.benefits.list.4")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.benefits.list.5")
                          }}
                        </li>
                      </ul>
                      <a
                        href="https://applications.eduappgh.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn"
                        >{{ $t("pages.home.scholarship.details.btn") }}</a
                      >
                    </div>
                  </div>
                </div>
                <!-- //end-->

                <!--2-->
                <div
                  class="col-sm-6 col-lg-4 wow bounceIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <div class="price-plan">
                    <div class="price-plan-top">
                      <a class="price-plan-link">
                        <h2>
                          {{
                            $t("pages.home.scholarship.details.criteria.title")
                          }}
                        </h2>
                        <!-- <div class="price">
                          <span class="dollar">$</span>
                          <span class="amt annual">2</span>
                          <span class="mo">/mo</span>
                          <p class="price-breakdown">
                            Pay yearly or $10 per month
                          </p>
                        </div> -->
                      </a>
                    </div>
                    <div class="info-wrapper">
                      <ul class="list-group">
                        <li>
                          {{
                            $t("pages.home.scholarship.details.criteria.list.1")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.criteria.list.2")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.criteria.list.3")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.criteria.list.4")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.criteria.list.5")
                          }}
                        </li>
                      </ul>
                      <a
                        href="https://applications.eduappgh.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn"
                        >{{ $t("pages.home.scholarship.details.btn") }}</a
                      >
                    </div>
                  </div>
                </div>
                <!--//end-->

                <!--3-->
                <div
                  class="col-sm-6 col-lg-4 wow bounceIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <div class="price-plan">
                    <div class="price-plan-top">
                      <a class="price-plan-link">
                        <h2>
                          {{
                            $t("pages.home.scholarship.details.programs.title")
                          }}
                        </h2>
                        <!-- <div class="price">
                          <span class="dollar">$</span>
                          <span class="amt annual">7</span>
                          <span class="mo">/mo</span>
                          <p class="price-breakdown">
                            Pay yearly or $10 per month
                          </p>
                        </div> -->
                      </a>
                    </div>
                    <div class="info-wrapper">
                      <ul class="list-group">
                        <li>
                          {{
                            $t("pages.home.scholarship.details.programs.list.1")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.programs.list.2")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.programs.list.3")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.programs.list.4")
                          }}
                        </li>
                        <li>
                          {{
                            $t("pages.home.scholarship.details.programs.list.5")
                          }}
                        </li>
                      </ul>
                      <a
                        href="https://applications.eduappgh.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn"
                      >
                        {{ $t("pages.home.scholarship.details.btn") }}</a
                      >
                    </div>
                  </div>
                </div>
                <!--//end-->

                <!--4-->
                <!-- <div
                  class="col-sm-6 col-lg-3 wow bounceIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <div class="price-plan">
                    <div class="price-plan-top">
                      <a class="price-plan-link">
                        <h2>Premium</h2>
                        <div class="price">
                          <span class="dollar">$</span
                          ><span class="amt annual">50</span>
                          <span class="mo">/mo</span>
                          <p class="price-breakdown">
                            Pay yearly or $10 per month
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="info-wrapper">
                      <ul class="list-group">
                        <li><strong>80GB</strong> Disk Space</li>
                        <li><strong>1000GB</strong> Monthly Bandwidth</li>
                        <li>
                          <i class="fa fa-star-o"></i>
                          <strong>Unlimited</strong> Email Accounts
                        </li>
                        <li><strong>Unlimited</strong> Subdomains</li>
                      </ul>
                      <a href="#" class="btn">APPLY</a>
                    </div>
                  </div>
                </div> -->
                <!--//end-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--//VIDEO SECTION STARTS-->
    <div class="donate__wrapper">
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
          class="scroll btn inverse wow bounceIn"
          data-wow-offset="80"
          data-wow-duration="2s"
          >{{ $t("pages.home.donation.btn") }}</a
        >
      </div>
    </div>
    <!-- <div class="wallpapered video-section donate-bg">
      <div class="video_overlay">
        <div id="video_content">
          <div
            class="col-sm-12 col-lg-10 col-lg-offset-1 text-center wow fadeInUp"
            data-wow-offset="80"
            data-wow-duration="2s"
          >
            <q>
              I visited A.D.U. in 2019 and was really struck by the enthusiasm
              of the students, and the high praise that employers that I met had
              for A.D.U. students. Corporate Niger described A.D.U. students the
              same way Corporate Ghana describes Ashesi students. But I could
              also tell that A.D.U. was struggling financially. I left feeling
              that there was a spark here that needed an opportunity to grow,
              and I wondered how Ashesi and I could help.</q
            >
            <p>
              Patrick Awuah, <br />Founder and President, Ashesi University,
              Ghana
            </p>
            <a
              href="#contact"
              class="scroll btn wow bounceIn"
              data-wow-offset="80"
              data-wow-duration="2s"
              >DONATE</a
            >
          </div>
        </div>
      </div>
    </div> -->
    <!--//VIDEO SECTION ENDS-->
  </section>
</template>

<script>
export default {
  name: "Academics",
};
</script>

<style lang="scss" scoped>
</style>