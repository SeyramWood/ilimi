<template>
  <section id="newsletter">
    <div class="well">
      <!-- style="margin-bottom: 15rem" -->
      <div class="dark_overlay">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-lg-10 col-lg-offset-1 text-center">
              <!-- <h2 class="fadeInUp text-center quote">
                It's art if it can't be explained. It's
                <strong>fashion</strong> if no one asks for an explanation. It's
                design if it doesn't need <strong>explanation.</strong>
              </h2> -->

              <section class="home__newsletter">
                <div class="home__newsletter__wrapper">
                  <form @submit.prevent="subscribe()" class="form">
                    <h1 class="fadeInUp">
                      {{ $t("pages.home.newsletter.title") }}
                    </h1>
                    <div class="input__wrapper">
                      <input
                        type="email"
                        id="yourmail@gmail.com"
                        placeholder="yourmail@gmail.com"
                        aria-label="yourmail@gmail.com"
                        v-model="subscriber"
                      />
                      <button
                        type="submit"
                        class="append"
                        :disabled="isSubmitting"
                      >
                        <template v-if="isSubmitting">
                          <img
                            src="/../template/img/loader-36.svg"
                            alt="loader"
                            srcset=""
                          />
                        </template>
                        <template v-else>
                          {{ $t("pages.home.newsletter.btn") }}
                        </template>
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    <s-toast v-model="toast"> {{ toastMsg }} </s-toast>
  </section>
</template>

<script>
import SToast from "../SToast";

export default {
  name: "Newsletter",
  components: {
    SToast,
  },
  data: () => ({
    isSubmitting: false,
    subscriber: "",
    subscriberError: "",
  }),

  methods: {
    subscribe() {
      this.isSubmitting = true;
      this.$axios
        .post(
          "http://dashboard.eduappgh.com/dashboard/subscribe-to-newsletter",
          { email: this.subscriber }
        )
        .then((res) => {
          if (res.data.ok) {
            this.isSubmitting = false;
            this.showToast("Thank you for subscribing to our newsletter!");
          }
        })
        .catch((err) => {
          this.isSubmitting = false;
          this.showToast(err.response.data.errors.email[0] || "");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>