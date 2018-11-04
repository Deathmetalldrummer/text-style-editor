<template>
    <div class="app-controls">
        <el-tabs v-model="activeName">
            <el-tab-pane label="Fonts" name="tab1">
              <Fonts v-if="activeName === 'tab1'" :component_id="component_id"></Fonts>
            </el-tab-pane>
            <el-tab-pane label="Interval" name="tab2">
              <Interval v-if="activeName === 'tab2'" :component_id="component_id"></Interval>
            </el-tab-pane>
            <el-tab-pane label="Shadows" name="tab3">
              <Shadows v-if="activeName === 'tab3'" :component_id="component_id"></Shadows>
            </el-tab-pane>
            <el-tab-pane label="Position" name="tab4">
              <Position v-if="activeName === 'tab4'" :component_id="component_id"></Position>
            </el-tab-pane>
            <el-tab-pane label="Background" name="tab5">
              <Background v-if="activeName === 'tab5'" :component_id="component_id"></Background>
            </el-tab-pane>
            <el-tab-pane label="Transform" name="tab6">
              <Transform v-if="activeName === 'tab6'" :component_id="component_id"></Transform>
            </el-tab-pane>
        </el-tabs>
        <br>
        
    </div>
</template>

<script>
import Fonts from './Fonts'
import Interval from './Interval'
import Shadows from './Shadows'
import Position from './Position'
import Background from './Background'
import Transform from './Transform'

  export default {
    name: 'Controls',
    components: {
      Fonts,
      Interval,
      Shadows,
      Position,
      Background,
      Transform
    },
    props: ['component_id'],
    data () {
      return {
        title: 'Welcome to controls',
        activeName: 'tab1'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
