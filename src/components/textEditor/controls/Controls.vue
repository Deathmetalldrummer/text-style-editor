<template>
    <div class="app-controls">
        <el-tabs v-model="activeName">
            <el-tab-pane label="Fonts" name="tab1">
                <Fonts :component_id="component_id"></Fonts>
            </el-tab-pane>
            <el-tab-pane label="Interval" name="tab2">
            </el-tab-pane>
            <el-tab-pane label="Shadows" name="tab3">
            </el-tab-pane>
            <el-tab-pane label="Position" name="tab4">
            </el-tab-pane>
            <el-tab-pane label="Background" name="tab5">
            </el-tab-pane>
            <el-tab-pane label="Transform" name="tab6">
            </el-tab-pane>
        </el-tabs>
        <br>
        
    </div>
</template>

<script>
import Fonts from './Fonts'
// import Interval from './Interval'
// import Shadows from './Shadows'
// import Position from './Position'
// import Background from './Background'
// import Transform from './Transform'

  export default {
    name: 'Controls',
    components: {
      Fonts,
      // Interval,
      // Shadows,
      // Position,
      // Background,
      // Transform
    },
    props: ['component_id'],
    data () {
      return {
        title: 'Welcome to controls',
        activeName: 'tab1'
      }
    },
    methods: {
      logi () {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
