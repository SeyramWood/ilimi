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
            {{ $t("pages.home.contact.title") }}
          </h1>

          <!-- <div
            class="lead wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.contact.cta`)"
          ></div> -->

          <div class="row">
            <div
              class="col-sm-12 col-lg-6 wow fadeInUp"
              data-wow-offset="80"
              data-wow-duration="2s"
            >
              <!-- <h2>Do you need a website,<br />have a question or comment?</h2> -->
              <address>
                ILIMI | A.D.U.<br />
                Boulevard Tanimoune<br />
                Village de la Francophonie<br />
                BP 11160<br />
                Niamey<br />
                Niger
              </address>

              <ul class="fa-ul">
                <li>
                  <i class="fa-li fa fa-globe"></i>
                  <a href="https://www.ilimi.edu.ne" style="color: white"
                    >www.ilimi.edu.ne | Official Website</a
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:infos@ilimi.edu.ne" style="color: white"
                    >infos@ilimi.edu.ne | Information Desk</a
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:oga@ilimi.edu.ne" style="color: white"
                    >oga@ilimi.edu.ne | Office of Global Advancement</a
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:admissions@ilimi.edu.ne" style="color: white"
                    >admissions@ilimi.edu.ne | Admissions & Recruitment</a
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:talent@ilimi.edu.ne" style="color: white"
                    >talent@ilimi.edu.ne | Human Resource</a
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:talent@ilimi.edu.ne" style="color: white"
                    >english@ilimi.edu.ne | English Program</a
                  >
                </li>
                <li style="margin-bottom: 2rem">
                  <i class="fa-li fa fa-envelope"></i>
                  <a href="mailto:talent@ilimi.edu.ne" style="color: white"
                    >academics@ilimi.edu.ne | Academic Programs</a
                  >
                </li>

                <li>
                  <i class="fa-li fa fa-phone"></i>
                  <span class=""
                    ><a href="tel:+22792396868" style="color: white"
                      >(+227) 92 39 68 68</a
                    ></span
                  >
                </li>
                <li>
                  <i class="fa-li fa fa-phone"></i>
                  <span class=""
                    ><a href="tel:+22793396868" style="color: white"
                      >(+227) 93 39 68 68</a
                    ></span
                  >
                </li>
              </ul>

              <ul class="social-icons">
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <a
                    href="https://web.facebook.com/aduniversalis?_rdc=10&amp;_rdr"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa fa-facebook"></i
                  ></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                >
                  <a
                    href="https://twitter.com/aduleads?lang=fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <a
                    href="https://fr.linkedin.com/school/african-development-university/"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa fa-linkedin"></i
                  ></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="2s"
                >
                  <a
                    href="https://instagram.com/africandevelopmentuniversalis"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa fa-instagram"></i
                  ></a>
                </li>
                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="1.5s"
                >
                  <a
                    href="https://www.youtube.com/channel/UCitZsNH69Rivpki-WO7W7Iw"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="fa fa-youtube"></i
                  ></a>
                </li>

                <li
                  class="wow fadeIn"
                  data-wow-offset="80"
                  data-wow-duration="2s"
                  data-wow-delay="1.5s"
                  v-for="i in 6"
                  :key="i"
                >
                  <a
                    href="https://www.youtube.com/channel/UCitZsNH69Rivpki-WO7W7Iw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div
              class="col-sm-12 col-lg-6 wow fadeInUp"
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