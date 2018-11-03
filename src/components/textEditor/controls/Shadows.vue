<template>
    <div id="app-shadows">
        <el-switch active-text="on" inactive-text="off" v-model="shadow.disabled"></el-switch>
        <el-row>
            <el-col :span="4">
                <br>
                X
            </el-col>
            <el-col :span="20">
                <el-slider :min="shadow.x.min" :max="shadow.x.max" v-model="shadow.x.current" :disabled="!shadow.disabled"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <br>
                Y
            </el-col>
            <el-col :span="20">
                <el-slider :min="shadow.y.min" :max="shadow.y.max" v-model="shadow.y.current" :disabled="!shadow.disabled"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4">
                <br>
                Blur
            </el-col>
            <el-col :span="20">
                <el-slider :min="shadow.blur.min" :max="shadow.blur.max" v-model="shadow.blur.current" :disabled="!shadow.disabled"></el-slider>
            </el-col>
        </el-row>
        <el-color-picker v-model="shadow.color.current" :predefine="shadow.color.predefineColors" show-alpha @change="addPredefineColors($event)" :disabled="!shadow.disabled"></el-color-picker>
    </div>
</template>

<script>
  export default {
    name: 'Shadows',
    props: ['bdshadow'],
    data () {
      return {
        title: 'Размер шрифта',
        shadow: this.bdshadow
      }
    },
    methods: {
      addPredefineColors(e){
        if(e) {
        this.shadow.color.predefineColors.push(e);
        }
      }
    }
  }
</script>

<style>
</style>
