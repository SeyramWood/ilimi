<template>
  <section id="work">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-12">
          <h1
            class="wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.ilimi.title`)"
          ></h1>
          <div
            class="lead wow fadeInRightBig"
            data-wow-offset="80"
            data-wow-duration="2s"
            v-html="$t(`pages.home.ilimi.cta`)"
          ></div>

          <!--FILTERS-->
          <div id="filters-container" class="cbp-l-filters-button">
            <button
              data-filter="*"
              class="cbp-filter-item-active cbp-filter-item"
            >
              {{ $t("pages.home.ilimi.filter-btn.all")
              }}<span class="cbp-filter-counter"></span>
            </button>
            <button data-filter=".academics" class="cbp-filter-item">
              {{ $t("pages.home.ilimi.filter-btn.academics")
              }}<span class="cbp-filter-counter"></span>
            </button>
            <button data-filter=".non-academics" class="cbp-filter-item">
              {{ $t("pages.home.ilimi.filter-btn.non-academics")
              }}<span class="cbp-filter-counter"></span>
            </button>
            <button data-filter=".alumni" class="cbp-filter-item">
              {{ $t("pages.home.ilimi.filter-btn.alumni")
              }}<span class="cbp-filter-counter"></span>
            </button>
          </div>

          <!--PORTFOLIO-->
          <div class="cbp-l-grid-project">
            <div id="grid-container3" class="cbp-l-grid-projects">
              <ul>
                <!--academics-->
                <li class="cbp-item academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/gallery/thumb/ilimi.png" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.om") }}</h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/ilimi.png"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.om`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cbp-item academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/resource.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.cf") }}</h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/resource.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.cf`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cbp-item academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/library.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.l") }}</h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/library.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.l`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cbp-item academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/strategy.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.e-l") }}</h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/strategy.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.el`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <!--non-academics-->
                <li class="cbp-item non-academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/student-life.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.sl") }}</h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/student-life.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.sl`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- <li class="cbp-item non-academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/resource.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.c") }}</h6>
                          
                          <a
                            href="template/img/gallery/resource.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.c`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> -->
                <li class="cbp-item non-academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/gallery/thumb/ilab.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>
                            {{ $t("pages.home.ilimi.filter-title.iilab") }}
                          </h6>
                          <!-- <a
                            href="ajax/project1.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/ilab.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            data-title="iiLAB"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- <li class="cbp-item non-academics">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/strategy.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.gs") }}</h6>
                         
                          <a
                            href="template/img/gallery/strategy.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="$t(`pages.home.ilimi.filter-title.gs`)"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> -->

                <!--alumni-->
                <li class="cbp-item alumni">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img src="template/img/gallery/thumb/alumni.jpg" alt="" />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.oa") }}</h6>
                          <!-- <a
                            href="ajax/project2.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/alumni.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            data-title="A.D.U Alumni"
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cbp-item alumni">
                  <div class="cbp-caption">
                    <div class="cbp-caption-defaultWrap">
                      <img
                        src="template/img/gallery/thumb/business.jpg"
                        alt=""
                      />
                    </div>
                    <div class="cbp-caption-activeWrap">
                      <div class="cbp-l-caption-alignCenter">
                        <div class="cbp-l-caption-body">
                          <h6>{{ $t("pages.home.ilimi.filter-title.blr") }}</h6>
                          <!-- <a
                            href="ajax/project2.html"
                            class="cbp-singlePage cbp-l-caption-buttonLeft"
                            ><i class="fa fa-link"></i
                          ></a> -->
                          <a
                            href="template/img/gallery/business.jpg"
                            class="cbp-lightbox cbp-l-caption-buttonRight"
                            :data-title="
                              $t(`pages.home.ilimi.filter-title.blr`)
                            "
                          >
                            <i class="fa fa-eye"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <!--LOAD MORE BUTTON-->
            <!-- <div class="cbp-l-loadMore-button">
              <a href="ajax/loadMore.html" class="cbp-l-loadMore-button-link">
                <i
                  class="fa fa-plus-circle wow load pulse"
                  data-wow-iteration="infinite"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  id="bottom"
                  title=""
                  data-original-title="load more"
                ></i>
              </a>
            </div> -->
            <!--//LOAD MORE BUTTON-->
          </div>
          <div class="pad45"></div>
        </div>
        <!--//END PORTFOLIO-->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IlimiExperience",
  components: {},
  data: () => ({}),

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>