vue
<template>
  <Transition name="dialog-fade">
    <div class="popup" v-if="visible" ref="popupDom">
      <div class="popup-content">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'Popup',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    maskClose: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(nv) {
      if (nv) {
        this.$nextTick(() => {
          this.initEvent()
        })
      }
    }
  },
  beforeDestroy() {
    this.rmEvent()
  },
  methods: {
    initEvent() {
      if (this.maskClose) {
        this.$refs.popupDom.addEventListener('click', this.close)
      }
    },
    rmEvent() {
      if (this.maskClose) {
        this.$refs.popupDom.removeEventListener('click', this.close)
      }
    },
    close() {
      if (this.$listeners['update:visible']) {
        this.$emit('update:visible', false)
      } else {
        this.$emit('close', false)
      }
    }
  }
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.popup-content {
  /* background-color: white; */
  padding: 16px;
  overflow: hidden;
}

.dialog-fade-enter-active {
  animation: modal-fade-in 0.5s;
}

.dialog-fade-leave-active {
  animation: modal-fade-out 0.5s;
}

@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}

@keyframes modal-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes modal-fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
