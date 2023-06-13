<template>
  <div class="filter">
    <div class="filter-current-select">
      <span class="placeholder">{{ currentItem ? currentItem.label : placeholder }}</span>
      <span class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: {
      // {label: xxx, value: xxx}
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentItem: null
    }
  }
}
</script>

<style lang="less" scoped>
.filter {
  min-width: 80px;
  background-color: #fff;
  color: #ccc;
  .filter-current-select {
    vertical-align: text-top;
    .placeholder {
      display: inline-block;
    }
    .icon {
      display: inline-block;
      padding: 0;
      margin: 0;
      width: 30px;
      // height: 30px;
      background-color: skyblue;
    }
  }
}
</style>
