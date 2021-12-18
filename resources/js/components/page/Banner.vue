<template>
  <section>
    <div
      class="wallpapered top-video"
      data-wallpaper-options='{"source":{
		"webm":"template/video/NycTrafficH264.webm",
		"mp4":"template/video/NycTrafficH264.mp4",
		"ogg":"template/video/NycTrafficH264.ogv",
		"poster":"template/video/ny.jpg"}}'
    >
      <div class="video_overlay">
        <!--ANIMATED TEXT-->
        <div id="content">
          <div
            class="heart wow bounceInDown"
            data-wow-duration="3s"
            data-wow-delay="7s"
          ></div>
          <div class="byline wow slideInLeft pad30" data-wow-delay="7s">
            creative inspiration
          </div>
          <h1
            class="wow bounceInDown"
            data-wow-duration="3s"
            data-wow-delay="4s"
          >
            WE'RE DESIGNERS!
          </h1>
          <div
            class="name wow bounceInDown"
            data-wow-duration="3s"
            data-wow-delay="2s"
          >
            FLAIR DESIGN STUDIO
          </div>
          <div class="text-center">
            <a href="#about" class="scroll">
              <i
                class="fa fa-caret-down fa-inverse fa-3x ilink wow rotateIn"
                data-wow-duration="1s"
                data-wow-delay="8s"
              ></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!--BIG IMAGE-->
    <section id="big_image"></section>
  </section>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
</style>