<template>
    <div id="app-fonts">
        <h2>{{title}}</h2>
        <el-select v-model="font.fontFamily.value" placeholder="Select Font">
            <el-option v-for="item in font.fontFamily.options" :key="item" :label="item" :value="item"></el-option>
        </el-select>
        <el-slider v-model="font.fontSize.current" :min="font.fontSize.min" :max="font.fontSize.max"></el-slider>
        <Unit :prop="font.px"></Unit>
        <br>
        <h2>насыщенность, декоративность</h2>
        <el-checkbox v-model="font.fontWeight" :true-label="'bold'" :false-label="0">Bold</el-checkbox>
        <el-checkbox v-model="font.fontStyle" :true-label="'italic'" :false-label="0">Italic</el-checkbox>
        <br>
        <el-checkbox-group v-model="font.textDecoration">
            <el-checkbox-button label="overline">overline</el-checkbox-button>
            <el-checkbox-button label="line-through">Strike</el-checkbox-button>
            <el-checkbox-button label="underline">Underline</el-checkbox-button>
        </el-checkbox-group>
        <h4>Text transform</h4>
        <el-radio-group v-model="font.transform">
            <el-radio-button label="none">none</el-radio-button>
            <el-radio-button label="capitalize">capitalize</el-radio-button>
            <el-radio-button label="uppercase">uppercase</el-radio-button>
            <el-radio-button label="lowercase">lowercase</el-radio-button>
        </el-radio-group>
        <h4>Text color</h4>
        <el-color-picker v-model="font.color.current" :predefine="font.color.predefineColors" show-alpha
                         @change="addPredefineColors($event)" @active-change="activeChange($event)"></el-color-picker>
    <button @click="logi()">log</button>
    </div>
</template>

<script>
  import Unit from '../../module/unit'

  export default {
    name: 'Fonts',
    props: ['component_id'],
    components: {
      Unit
    },
    data () {
      return {
        title: 'Размер шрифта',
        font: this.$store.getters.get__font(this.component_id)
      }
    },
    methods: {
      addPredefineColors (e) {
        if (e) {
          this.font.color.predefineColors.push(e)
        }
      },
      activeChange (e) {
        this.font.color.current = e
      },
      logi(){
        console.log(this.font.fontSize.current);
        console.log(this.$store.getters.get__font(this.component_id).fontSize.current);
      }
    },
    watch: {
     // font: {
     //   handler () {
     //     console.log(this.font.fontSize.current);
     //     console.log(this.$store.getters.get__font(this.component_id).fontSize.current);
     //     // this.$store.commit('font__set', {id: this.component_id, value: this.font})
     //   },
     //   deep: true
     // }
    }
  }
</script>

<style>
</style>
