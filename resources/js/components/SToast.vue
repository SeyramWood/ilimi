<template>
  <div
    v-if="html"
    id="snackbar"
    :class="[value ? 'show' : 'hide']"
    v-html="html"
  ></div>
  <div v-else id="snackbar" :class="[value ? 'show' : 'hide']"><slot /></div>
</template>

<script>
export default {
  name: "SToast",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    html: {
      default: "",
    },
  },
  watch: {
    value(v) {
      if (v) {
        setTimeout(() => {
          this.close();
        }, 4000);
      }
    },
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  min-height: 50px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  // text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s backwards;
  animation: fadein 0.5s backwards;
}
#snackbar.hide {
  visibility: hidden; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadeout 0.5s 2.5s backwards;
  animation: fadeout 0.5s 2.5s backwards;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
</style>