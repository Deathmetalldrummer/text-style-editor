<template>
    <div class="previewComponent">
        <div class="textPreview" v-for="(item, index) in data" :class="positionClass(item.position.pos)"
             :style="offsetStyle(index)">
            <div class="style_text_preview" :style="item.style_preview">
                {{item.name}} {{item.name}} {{item.name}} {{item.name}} {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'PreviewCom',
    props: ['preview'],
    data () {
      return {
        title: 'Component Container',
        data: this.preview
      }
    },
    methods: {
      offsetStyle (e) {
        let thisCom = this.data[e]
        let pos = thisCom.position.pos
        let margin = {}
        let right = thisCom.position.offset[1] - thisCom.position.offset[3]
        let bottom = thisCom.position.offset[2] - thisCom.position.offset[0]
        let left = thisCom.position.offset[3] - thisCom.position.offset[1]
        let top = thisCom.position.offset[0] - thisCom.position.offset[2]

        margin.marginRight = (right >= 0) ? right + 'px' : '0px'
        margin.marginBottom = (bottom >= 0) ? bottom + 'px' : '0px'
        margin.marginLeft = (left >= 0) ? left + 'px' : '0px'
        margin.marginTop = (top >= 0) ? top + 'px' : '0px'

        if (pos === 2 || pos === 5 || pos === 8) {
          margin.marginLeft = left + 'px'
          margin.marginRight = right + 'px'
        }
        if (pos === 4 || pos === 5 || pos === 6) {
          margin.marginTop = top + 'px'
          margin.marginBottom = bottom + 'px'
        }

        return margin
      },
      positionClass (e) {
        let sectionN = 'section' + e
        return sectionN
      },
    }
  }
</script>

<style scope>
    .previewComponent {
        position: relative;
        width: 100%;
        height: 100%;
        /*background-color: #ff7979;*/
    }

    .textPreview {
        position: absolute;
        width: 200px;
        height: 200px;
        display: inline-block;
        /*background-color: #000;*/
    }

    .section1 {
        left: 0;
        top: 0
    }

    .section2 {
        left: 50%;
        transform: translateX(-50%);
        top: 0
    }

    .section3 {
        right: 0;
        top: 0
    }

    .section4 {
        left: 0;
        transform: translateY(-50%);
        top: 50%
    }

    .section5 {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
    }

    .section6 {
        right: 0;
        transform: translateY(-50%);
        top: 50%
    }

    .section7 {
        left: 0;
        bottom: 0
    }

    .section8 {
        left: 50%;
        transform: translateX(-50%);
        bottom: 0
    }

    .section9 {
        bottom: 0;
        right: 0
    }
</style>
