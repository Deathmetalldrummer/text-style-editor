<template>
    <div id="app-position">
        <h2>{{title}}</h2>
        <el-radio-group v-model="position.pos">
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
    props: ['component_id'],
    data () {
      return {
        title: 'Позиционирование',
        position: this.$store.getters.get__position(this.component_id)
      }
    },
    watch: {
     position: {
       handler () {
         this.$store.dispatch('position', {id: this.component_id, value: this.position})
       },
       deep: true
     }
    }
  }
</script>

<style>
</style>
