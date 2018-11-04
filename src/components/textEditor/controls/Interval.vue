<template>
    <div id="app-interval">
        <el-row>
            <el-col :span="10">
                Межстрочный интервал
            </el-col>
            <el-col :span="14">
                <el-slider v-model="interval.line.current" :min="interval.line.min" :max="interval.line.max"></el-slider>
            </el-col>
        </el-row>
        <Unit :prop="interval.line.px"></Unit>
        <br>
        <br>
        <br>
        <el-row>
            <el-col :span="10">
                Межбуквенный интервал
            </el-col>
            <el-col :span="14">
                <el-slider v-model="interval.letter.current" :min="interval.letter.min" :max="interval.letter.max"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                Интервал между словами
            </el-col>
            <el-col :span="14">
                <el-slider v-model="interval.word.current" :min="interval.word.min" :max="interval.word.max"></el-slider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Unit from '../../module/unit'
  export default {
    name: 'Interval',
    props: ['component_id'],
    components: {
      Unit
    },
    data () {
      return {
        title: 'Размер шрифта',
          interval: this.$store.getters.get__interval(this.component_id)
      }
    },
    watch: {
     interval: {
       handler () {
         this.$store.dispatch('interval', {id: this.component_id, value: this.interval})
       },
       deep: true
     }
    }
  }
</script>

<style>
</style>
