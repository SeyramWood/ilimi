<template>
  <section id="student-life">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <h1
            class="wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
          >
            {{ $t("pages.home.student.title") }}
          </h1>

          <div
            class="lead wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.student.cta`)"
          ></div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 col-lg-12 pad30 wow fadeIn"
          data-wow-offset="80"
          data-wow-duration="2s"
        >
          <div id="grid-container4" class="cbp-l-grid-team">
            <ul class="cbp-l-grid-team">
              <!--1-->
              <li class="cbp-item">
                <a
                  href="student-life/clubs-and-activities.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/blog/a3.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.student.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="student-life/clubs-and-activities.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.student.benefit.1`) }}</a
                >
              </li>

              <!--2-->
              <li class="cbp-item">
                <a
                  href="student-life/career-services.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/blog/a4.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.student.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="student-life/career-services.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.student.benefit.2`) }}</a
                >
              </li>
              <!--3-->
              <li class="cbp-item">
                <a
                  href="student-life/health-and-wellness.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/blog/a4.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.student.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="student-life/health-and-wellness.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.student.benefit.3`) }}</a
                >
              </li>
              <!--4-->
              <li class="cbp-item">
                <a
                  href="student-life/housing-services-and-dining.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/blog/a4.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.student.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="student-life/housing-services-and-dining.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.student.benefit.4`) }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="pad30"></div>
  </section>
</template>

<script>
export default {
  name: "StudentLife",
};
</script>

<style lang="scss" scoped>
</style>