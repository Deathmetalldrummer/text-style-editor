<template>
    <div id="app-interval">
        <el-row>
            <el-col :span="10">
                Межстрочный интервал
            </el-col>
            <el-col :span="14">
                <el-slider v-model="intervalComponent.line.current" :min="intervalComponent.line.min" :max="intervalComponent.line.max"></el-slider>
            </el-col>
        </el-row>
        <Unit :prop="intervalComponent.line.px"></Unit>
        <br>
        <br>
        <br>
        <el-row>
            <el-col :span="10">
                Межбуквенный интервал
            </el-col>
            <el-col :span="14">
                <el-slider v-model="intervalComponent.letter.current" :min="intervalComponent.letter.min" :max="intervalComponent.letter.max"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10">
                Интервал между словами
            </el-col>
            <el-col :span="14">
                <el-slider v-model="intervalComponent.word.current" :min="intervalComponent.word.min" :max="intervalComponent.word.max"></el-slider>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Unit from '../../module/unit'
  export default {
    name: 'Interval',
    props: ['bdinterval'],
    components: {
      Unit
    },
    data () {
      return {
        title: 'Размер шрифта',
        intervalComponent: this.bdinterval
      }
    }
  }
</script>

<style>
</style>
