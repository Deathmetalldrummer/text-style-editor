<template>
    <div id="app-transform">
        <h3>Rotate</h3>
        <el-switch active-text="3D" v-model="rotate3d"></el-switch>
        <el-row>
            <el-col :span="4"><br>X</el-col>
            <el-col :span="19">
                <el-slider v-model="rotate.rotateX" :min="rotate.min" :max="rotate.max" @input="rotateComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Y</el-col>
            <el-col :span="19">
                <el-slider v-model="rotate.rotateY" :min="rotate.min" :max="rotate.max" @input="rotateComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Z</el-col>
            <el-col :span="19">
                <el-slider v-model="rotate.rotateZ" :min="rotate.min" :max="rotate.max" @input="rotateComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Rotate</el-col>
            <el-col :span="19">
                <el-slider v-model="rotate.rotate" :min="rotate.min" :max="rotate.max" @input="rotateComputed"></el-slider>
            </el-col>
        </el-row>
        <br>
        <h3>Scaling</h3>
        <el-switch active-text="3D" v-model="scale3d"></el-switch>
        <el-row>
            <el-col :span="4"><br>X</el-col>
            <el-col :span="19">
                <el-slider v-model="scale.scaleX" :min="scale.min" :max="scale.max"  :step="0.1" @input="scalingComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Y</el-col>
            <el-col :span="19">
                <el-slider v-model="scale.scaleY" :min="scale.min" :max="scale.max"  :step="0.1" @input="scalingComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Z</el-col>
            <el-col :span="19">
                <el-slider v-model="scale.scaleZ" :min="scale.min" :max="scale.max"  :step="0.1" @input="scalingComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Scale</el-col>
            <el-col :span="19">
                <el-slider v-model="scale.scale" :min="scale.min" :max="scale.max"  :step="0.1" @input="scalingComputed"></el-slider>
            </el-col>
        </el-row>
        <br>
        <h3>Skewing</h3>
        <el-row>
            <el-col :span="4"><br>Scew</el-col>
            <el-col :span="19">
                <el-slider v-model="skewing.skew" :min="skewing.min" :max="skewing.max" @input="skewingComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>X</el-col>
            <el-col :span="19">
                <el-slider v-model="skewing.skewX" :min="skewing.min" :max="skewing.max" @input="skewingComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Y</el-col>
            <el-col :span="19">
                <el-slider v-model="skewing.skewY" :min="skewing.min" :max="skewing.max" @input="skewingComputed"></el-slider>
            </el-col>
        </el-row>
        <br>
        <h3>Translation</h3>
        <el-switch active-text="3D" v-model="translation3d"></el-switch>
        <el-row>
            <el-col :span="4"><br>X</el-col>
            <el-col :span="19">
                <el-slider v-model="translation.translateX" :min="translation.min" :max="translation.max" @input="translationComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Y</el-col>
            <el-col :span="19">
                <el-slider v-model="translation.translateY" :min="translation.min" :max="translation.max" @input="translationComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Z</el-col>
            <el-col :span="19">
                <el-slider v-model="translation.translateZ" :min="translation.min" :max="translation.max" @input="translationComputed"></el-slider>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="4"><br>Translate</el-col>
            <el-col :span="19">
                <el-slider v-model="translation.translate" :min="translation.min" :max="translation.max" @input="translationComputed"></el-slider>
            </el-col>
        </el-row>
        <br>
        <h3>Perspective</h3>
        <el-row>
            <el-col :span="4"><br>Perspective</el-col>
            <el-col :span="19">
                <el-slider v-model="perspective.value" @input="perspectiveComputed"></el-slider>
            </el-col>
        </el-row>
        <br>
        <!--<h3>Matrix</h3>-->
        <!--<el-switch active-text="3D" v-model="d3"></el-switch>-->
        <!--<el-slider v-model="rotate.rotateX" @input="rotateComputed"></el-slider>-->
        <!--<el-slider v-model="rotate.rotateY" @input="rotateComputed"></el-slider>-->
        <!--<el-slider v-model="rotate.rotateZ" @input="rotateComputed"></el-slider>-->
        <!--<el-slider v-model="rotate.rotate" @input="rotateComputed"></el-slider>-->
    </div>
</template>

<script>
  export default {
    name: 'Transform',
    props: ['component_id'],
    data () {
      var transform = this.$store.getters.get__transform(this.component_id);
      return {
        transform,
        rotate: transform.rotation,
        scale: transform.scaling,
        skewing: transform.skewing,
        translation: transform.translation,
        perspective: transform.perspective,
        rotate3d: false,
        translation3d: false,
        scale3d: false
      }
    },
    methods: {
      scaleFormatTooltip (val) {
        return val / 10
      }
    },
    computed: {
      rotateComputed () {
        if (this.rotate3d) {
          this.rotate.preview = 'rotate3d(' + this.rotate.rotateX + ', ' + this.rotate.rotateY + ', ' + this.rotate.rotateZ + ', ' + this.rotate.rotate + 'deg) '
        } else {
          this.rotate.preview = ((this.rotate.rotate) ? 'rotate(' + this.rotate.rotate + 'deg) ' : '') +
            ((this.rotate.rotateX) ? 'rotateX(' + this.rotate.rotateX + 'deg) ' : '') +
            ((this.rotate.rotateY) ? 'rotateY(' + this.rotate.rotateY + 'deg) ' : '') +
            ((this.rotate.rotateZ) ? 'rotateZ(' + this.rotate.rotateZ + 'deg) ' : '')
        }
      },
      scalingComputed () {
        if (this.scale3d) {
          this.scale.preview = 'scale3d(' + this.scale.scaleX + ', ' + this.scale.scaleY + ', ' + this.scale.scaleZ + ') '
        } else {
          this.scale.preview = ((~this.scale.scale) ? 'scale(' + this.scale.scale + ') ' : '') +
            ((~this.scale.scaleX) ? 'scaleX(' + this.scale.scaleX + ') ' : '') +
            ((~this.scale.scaleY) ? 'scaleY(' + this.scale.scaleY + ') ' : '') +
            ((~this.scale.scaleZ) ? 'scaleZ(' + this.scale.scaleZ + ') ' : '')
        }
      },
      skewingComputed () {
        this.skewing.preview = ((~this.skewing.skew) ? 'skew(' + this.skewing.skew + 'deg, ' + this.skewing.skew + 'deg) ' : '') +
          ((~this.skewing.skewX) ? 'skewX(' + this.skewing.skewX + 'deg) ' : '') +
          ((~this.skewing.skewY) ? 'skewY(' + this.skewing.skewY + 'deg) ' : '')
      },
      translationComputed () {
        if (this.translation3d) {
          this.translation.preview = 'translated(' + this.translation.translateX + ', ' + this.translation.translateY + ', ' + this.translation.translateZ + ', ' + this.translation.translate + ') '
        } else {
          this.translation.preview = ((this.translation.translate) ? 'translate(' + this.translation.translate + 'px) ' : '') +
            ((this.translation.translateX) ? 'translateX(' + this.translation.translateX + 'px) ' : '') +
            ((this.translation.translateY) ? 'translateY(' + this.translation.translateY + 'px) ' : '') +
            ((this.translation.translateZ) ? 'translateZ(' + this.translation.translateZ + 'px) ' : '')
        }
      },
      perspectiveComputed () {
        this.perspective.preview = ((this.perspective.value) ? 'perspective(' + this.perspective.value + 'px) ' : '')
      }
    },
    watch: {
     transform: {
       handler () {
         console.log(this.transform);
         this.$store.dispatch('transform', {id: this.component_id, value: this.transform})
       },
       deep: true
     }
    }
  }
</script>

<style>
</style>
