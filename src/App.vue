<template>
  <div id="app">
    <datav />
  </div>
</template>

<script>
import datav from './components/datav/index.vue'

export default {
  name: 'App',
  components: {
    datav
  },
  data() {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: rgb(18, 64, 134);
  border-radius: 20px;
}

/* 设置滚动条滑块的样式 */
::-webkit-scrollbar-thumb {
  background-color: #2c3e50;
  border-radius: 5px;
}

/* 设置滚动条滑块在hover状态下的样式 */
::-webkit-scrollbar-thumb:hover {
  background-color: #2c3e50;
}
</style>
