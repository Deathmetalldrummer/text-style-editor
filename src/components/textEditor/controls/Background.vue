<template>
    <div id="app-background">
        <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-remove="handleRemove"
                :on-preview="handlePreview"
                :on-success="uploadSuccess"
                :limit="1"
                multiple
                :file-list="fileList2"><i class="el-icon-upload"></i>
            <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
        </el-upload>
        <el-color-picker v-model="bg.color.current" :predefine="bg.color.predefineColors" show-alpha show-alpha
                         @change="addPredefineColors($event)"></el-color-picker>
        <section>
            <h4>repeat:</h4>
            <el-radio-group v-model="bg.repeat" :disabled="!this.bg.upload">
                <el-radio-button label="repeat">repeat</el-radio-button>
                <el-radio-button label="repeat-y">repeat-y</el-radio-button>
                <el-radio-button label="repeat-x">repeat-x</el-radio-button>
                <el-radio-button label="no-repeat">no-repeat</el-radio-button>
                <el-radio-button label="space">space</el-radio-button>
                <el-radio-button label="round">round</el-radio-button>
            </el-radio-group>
        </section>
        <section>
            <h4>fixed:</h4>
            <el-radio-group v-model="bg.attachment" :disabled="!bg.upload">
                <el-radio-button label="fixed">fixed</el-radio-button>
                <el-radio-button label="scroll">scroll</el-radio-button>
                <el-radio-button label="local">local</el-radio-button>
            </el-radio-group>
        </section>
        <section>
            <h4>size:</h4>
            <el-row>
                <el-col :span="4">
                    <br>
                    X
                </el-col>
                <el-col :span="20">
                    <el-slider v-model="sizeSlider[0]" :min="bg.size.min[0]" :max="bg.size.max[0]"
                               @input="changeSlider($event)" :disabled="!bg.upload">x
                    </el-slider>
                </el-col>
            </el-row>
            <el-switch v-model="lock" active-text="lock" inactive-text="unlock" @change="changeSwitch()"
                       :disabled="!bg.upload">lock
            </el-switch>
            <el-row>
                <el-col :span="4">
                    <br>
                    Y
                </el-col>
                <el-col :span="20">
                    <el-slider v-model="sizeSlider[1]" :min="bg.size.min[1]" :max="bg.size.max[1]"
                               @input="changeSlider($event)" :disabled="!bg.upload">y
                    </el-slider>
                </el-col>
            </el-row>
            <el-radio-group v-model="cover" @change="changeRadio()" :disabled="!bg.upload">
                <el-radio-button label="contain">contain</el-radio-button>
                <el-radio-button label="cover">cover</el-radio-button>
                <el-radio-button label="auto">auto</el-radio-button>
            </el-radio-group>
        </section>
    </div>
</template>

<script>
  export default {
    name: 'Background',
    props: ['bdbg'],
    data () {
      return {
        fileList2: [],
        bg: this.bdbg,
        lock: false,
        sizeSlider: this.bdbg.size.current,
        cover: this.bdbg.size.value
      }
    },
    computed: {},
    methods: {
      uploadSuccess (response, file, list) {
        this.bg.url = file.url
        this.bg.upload = true
      },
      handlePreview (file, list) {
      },
      handleRemove (file, fileList) {
        this.bg.upload = false
      },
      changeSlider (e) {
        this.cover = '';
        if(this.lock) {
          this.sizeSlider[0] = e;
          this.sizeSlider[1] = e;
          this.sizeSlider[0] = this.sizeSlider[1];
          this.bg.size.value = e + 'px';
        } else {
          this.bg.size.value = this.sizeSlider[0] + 'px ' + this.sizeSlider[1] +'px';
        }
      },
      changeSwitch () {
        if (this.lock) {
          this.sizeSlider[0] = this.sizeSlider[1] = this.sizeSlider[0]
        }
      },
      changeRadio () {
        this.bg.size.value = this.cover
      },
      addPredefineColors (e) {
        if (e) {
          this.bg.color.predefineColors.push(e)
        }
      }
    }
  }
</script>

<style>
</style>
