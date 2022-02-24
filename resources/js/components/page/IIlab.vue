<template>
  <section id="iilab">
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

          <!--SERVICE 1-->
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
              <strong>{{ $t("pages.home.admissions.service.1.title") }}</strong>
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
              <strong>{{ $t("pages.home.admissions.service.2.title") }}</strong>
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
              <strong>{{ $t("pages.home.admissions.service.3.title") }}</strong>
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
              <i class="fa fa-users"></i>
            </div>
            <h6>
              <strong>{{ $t("pages.home.admissions.service.4.title") }}</strong>
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
</template>

<script>
export default {
  name: "IIlab",
};
</script>

<style lang="scss" scoped>
</style>