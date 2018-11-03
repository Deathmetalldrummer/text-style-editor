<template>
    <el-radio-group v-model="prop.value">
        <el-radio-button v-for="item in prop.list" :key="item" :label="item">{{item}}</el-radio-button>
    </el-radio-group>
</template>

<script>
  export default {
    name: 'Unit',
    props: ['prop'],
    data () {
      return {
        unitObj: this.prop,
        list: this.prop.list
      }
    }
  }
</script>

<style>
</style>
