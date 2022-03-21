<template>
  <section id="iilab" style="padding-top: 0">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <h1
            class="wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.iilab.title`)"
          ></h1>

          <div
            class="lead wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.iilab.cta`)"
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
                  href="iilab/programs-and-activities.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/thumbs/ilab.jpg" alt="" />
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
                  href="iilab/programs-and-activities.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.iilab.thumb.1`) }}</a
                >
              </li>

              <!--2-->
              <li class="cbp-item">
                <a href="iilab/events.html" class="cbp-caption cbp-singlePage">
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/thumbs/events.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.iilab.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="iilab/events.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.iilab.thumb.2`) }}</a
                >
              </li>
              <!--3-->
              <li class="cbp-item">
                <a
                  href="iilab/our-entrepreneurs.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img
                      src="template/img/thumbs/iiLABEntrepreneurs.jpg"
                      alt=""
                    />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.iilab.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="iilab/our-entrepreneurs.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.iilab.thumb.3`) }}</a
                >
              </li>
              <!--4-->
              <li class="cbp-item">
                <a
                  href="iilab/testimonials.html"
                  class="cbp-caption cbp-singlePage"
                >
                  <div class="cbp-caption-defaultWrap">
                    <img src="template/img/thumbs/testimonials.jpg" alt="" />
                  </div>
                  <div class="cbp-caption-activeWrap">
                    <div class="cbp-l-caption-alignCenter">
                      <div class="cbp-l-caption-body">
                        <div class="cbp-l-caption-text">
                          {{ $t(`pages.home.iilab.hover-text`) }}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="iilab/testimonials.html"
                  class="cbp-l-grid-blog-title cbp-singlePage"
                  >{{ $t(`pages.home.iilab.thumb.4`) }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!--CLIENTS-->
      <div class="wow fadeIn col-lg-10 col-lg-offset-1" data-wow-offset="60">
        <div class="pad45"></div>
        <div id="clients">
          <div class="item">
            <img src="template/img/clients/logo1.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo2.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo3.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo4.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo5.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo6.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo7.jpg" alt="" />
          </div>
          <!-- <div class="item">
            <img src="template/img/clients/logo8.jpg" alt="" />
          </div>
          <div class="item">
            <img src="template/img/clients/logo9.jpg" alt="" />
          </div> -->
        </div>
        <div class="pad45"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IIlab",
};
</script>

<style lang="scss" scoped>
</style>