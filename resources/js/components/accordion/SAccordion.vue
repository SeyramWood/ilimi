<template>
  <div class="s__accordian__content">
    <div class="s__accordians">
      <div class="s__accordians__header">
        <template v-if="isHeaderSlot">
          <header class="collapse__header">
            <div class="collapse__header__left">
              <div class="collapse__header__left__title">
                <slot name="header"></slot>
              </div>
              <div
                class="collapse__header__left__icon"
                :class="[visible ? 'isActive' : 'inActive']"
              >
                <span class="icon" @click="open()">
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
            </div>
            <slot name="headerContent"></slot>
          </header>
        </template>
        <template v-else>
          <ul>
            <li @click="open()" :class="[visible ? 'isActive' : 'inActive']">
              <div class="left">
                <span :class="['label', `${sub ? 'sub' : ''}`]">{{
                  label
                }}</span>
                <span class="icon">
                  <i class="fa fa-chevron-down"></i>
                </span>
              </div>
              <div class="right">
                <span class="label">{{ labelRight }}</span>
              </div>
            </li>
          </ul>
        </template>
      </div>
      <transition
        name="accordion"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <article v-show="visible" class="s__accordians__content">
          <slot></slot>
        </article>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "SAccordion",
  inject: ["SAccordion", "defaultIndex"],
  props: {
    label: {
      require: true,
      type: String,
    },
    labelRight: {
      default: "",
      type: String,
    },
    badge: {
      type: Number,
      default: NaN,
    },
    sub: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    visible() {
      return this.index === this.SAccordion.active;
    },
  },
  created() {
    this.$nextTick(() => {
      if (this.$slots.header) {
        this.isHeaderSlot = true;
      }
    });
    this.index = this.SAccordion.count++;
    if (this.defaultIndex === 0 || this.defaultIndex) {
      this.index = this.defaultIndex;
      this.SAccordion.active = this.defaultIndex;
    }
  },
  data() {
    return {
      activeAccordian: false,
      accordianIndex: null,
      activeIndex: null,
      isHeaderSlot: false,
      selectAccordian: null,
      index: null,
    };
  },
  methods: {
    open() {
      if (this.visible) {
        this.SAccordion.active = null;
      } else {
        this.SAccordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../sass/mixins";
$primary: #050505;
$text: #26262693;
$active: #000000;
$white: #ffffff;
.s__accordians {
  width: 100%;
  &__header {
    width: 100%;
    & > ul {
      width: 100%;
      padding-left: 0 !important;
      list-style-type: none;
      & > li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        font-size: 1.2rem;
        user-select: none;
        margin: 0.5rem 0;
        &:not(:last-child) {
          margin: 0.5rem 1rem 0.5rem 0;
        }
        color: $text;
        border-radius: 3px;
        & > .left > span {
          font-weight: bold;
          letter-spacing: 0.05rem;
          transition: color 0.2s ease-in;
          &.sub {
            font-weight: 200;
          }
        }
        &:hover > .left > span {
          color: $active;
        }
      }
    }
  }
  &__content {
    width: 100%;
  }
}
.isActive {
  & > .left > .label {
    color: $active;
  }
  & > .left > .icon {
    display: inline-block;
    animation: icon-rotate-up 0.2s ease-in-out forwards;
    & > i {
      color: $active;
    }
  }
  & > .icon {
    display: inline-block;
    animation: icon-rotate-up 0.2s ease-in-out forwards;
    & > i {
      color: $active;
    }
  }
}
.inActive {
  & > .left > .icon {
    animation: icon-rotate-down 0.2s ease-in-out forwards;
  }
  & > .icon {
    animation: icon-rotate-down 0.2s ease-in-out forwards;
  }
}
@keyframes icon-rotate-up {
  0% {
    opacity: 0.5;
    transform: rotate(0deg);
  }
  100% {
    opacity: 1;
    transform: rotate(-180deg);
  }
}
@keyframes icon-rotate-down {
  0% {
    opacity: 0.5;
    transform: rotate(-180deg);
  }
  100% {
    opacity: 1;
    transform: rotate(0deg);
  }
}
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}
.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
