<template>
    <div id="app-position">
        <h2>{{title}}</h2>
        <el-radio-group v-model="bdposition.pos">
            <el-radio-button label="left">Left</el-radio-button>
            <el-radio-button label="center">Center</el-radio-button>
            <el-radio-button label="right">Right</el-radio-button>
            <el-radio-button label="justify">Justify</el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    name: 'Position',
    props: ['bdposition'],
    data () {
      return {
        title: 'Позиционирование',
      }
    }
  }
</script>

<style>
</style>
