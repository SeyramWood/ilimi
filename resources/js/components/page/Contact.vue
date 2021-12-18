<template>
  <section id="contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <h1
            class="wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
          >
            Contact
          </h1>

          <div
            class="lead wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
          >
            Sometimes <strong>magic</strong> is just someone
            <strong>spending</strong> more time on something than anyone else
            might reasonably expect.
          </div>

          <div class="row">
            <div
              class="col-sm-6 col-lg-6 wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              <h2>Do you need a website,<br />have a question or comment?</h2>

              <p>
                Flair Design Studio,<br />
                23 Mornington Crescent,<br />
                Camden High Street,<br />
                London NW1 7JE
              </p>

              <ul class="fa-ul">
                <li>
                  <i class="fa-li fa fa-phone inverse"></i>
                  <span class="inverse">+44 020 2345 1987</span>
                </li>
                <li>
                  <i class="fa-li fa fa-envelope inverse"></i>
                  <a href="mailto:#">name@example.com</a>
                </li>
                <li>
                  <i class="fa-li fa fa-globe inverse"></i>
                  <a href="#">www.example.com</a>
                </li>
              </ul>

              <ul class="social-icons">
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <a href="#"><i class="fa fa-twitter"></i></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <a href="#"><i class="fa fa-facebook"></i></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <a href="#"><i class="fa fa-github"></i></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="1.5s"
                >
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="2s"
                >
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="2.5s"
                >
                  <a href="#"><i class="fa fa-dribbble"></i></a>
                </li>
              </ul>
            </div>

            <div
              class="col-sm-6 col-lg-6 wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              <div class="contact_form">
                <div id="note"></div>
                <div id="fields">
                  <form id="ajax-contact-form">
                    <input
                      class="col-xs-12 col-md-12"
                      type="text"
                      name="name"
                      value=""
                      placeholder="Name"
                    />
                    <input
                      class="col-xs-12 col-md-12"
                      type="text"
                      name="email"
                      value=""
                      placeholder="Email"
                    />
                    <input
                      class="col-xs-12 col-md-12"
                      type="text"
                      name="subject"
                      value=""
                      placeholder="Subject"
                    />
                    <textarea
                      name="message"
                      id="message"
                      class="col-xs-12 col-md-12"
                      placeholder="Message"
                    ></textarea>
                    <div class="clear"></div>
                    <input
                      type="submit"
                      class="btn marg-right10"
                      value="submit"
                    />
                    <input type="reset" class="btn" value="reset" />
                    <div class="clear"></div>
                  </form>
                </div>
              </div>
              <!-- // End FORM -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pad60"></div>
  </section>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
</style>