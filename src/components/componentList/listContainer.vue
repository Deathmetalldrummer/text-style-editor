<template>
    <div class="listComponent">
        <ul class="list">
            <li class="listComponent__item" v-for="item,index in list">{{item.name}}
                <el-button type="primary" icon="el-icon-edit" @click="item.dialogVisible = true"></el-button>
                <el-dialog title="Tips" :visible.sync="item.dialogVisible" width="90%">
                    <div class="container__wrapper">
                        <Controls class="container__item container__item_controls" :component_id="index"></Controls>
                        <Preview class="container__item container__item_preview" :component_id="index"></Preview>
                    </div>
                    <span slot="footer" class="dialog-footer">
                            <el-button @click="item.dialogVisible = false">Cancel</el-button>
                            <el-button type="primary" @click="item.dialogVisible = false;styleConfirm(item)">Confirm</el-button>
                        </span>
                </el-dialog>
                <el-row>
                    <el-col :span="24">
                        <el-radio-group v-model="item.position.pos">
                            <el-radio-button :label="1">top left</el-radio-button>
                            <el-radio-button :label="2">top center</el-radio-button>
                            <el-radio-button :label="3">top right</el-radio-button>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-radio-group v-model="item.position.pos">
                            <el-radio-button :label="4">center left</el-radio-button>
                            <el-radio-button :label="5">center</el-radio-button>
                            <el-radio-button :label="6">center right</el-radio-button>
                        </el-radio-group>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-radio-group v-model="item.position.pos">
                            <el-radio-button :label="7">bottom left</el-radio-button>
                            <el-radio-button :label="8">bottom center</el-radio-button>
                            <el-radio-button :label="9">bottom right</el-radio-button>
                        </el-radio-group>
                    </el-col>
                </el-row>

                <el-row :gutter="15">
                    <el-col :span="8" :offset="8">
                        <el-slider v-model="item.position.offset[0]" :min="0" :max="100" @input="" vertical
                                   height="100px"></el-slider>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col :span="8">
                        <el-slider v-model="item.position.offset[3]" :min="0" :max="100"></el-slider>
                    </el-col>
                    <el-col :span="8" :offset="8">
                        <el-slider v-model="item.position.offset[1]" :min="0" :max="100"></el-slider>
                    </el-col>
                </el-row>
                <el-row :gutter="15">
                    <el-col :span="8" :offset="8">
                        <el-slider v-model="item.position.offset[2]" :min="0" :max="100" vertical
                                   height="100px"></el-slider>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script>
  import Controls from '../textEditor/controls/Controls'
  import Preview from '../textEditor/preview/Preview'

  export default {
    name: 'ListCom',
    props: ['list'],
    components: {
      Controls,
      Preview
    },
    data () {
      return {
        title: 'Component List'
      }
    },
    methods: {
      styleConfirm(item) {
        item.style_preview = item.style.preview;
      }
    }
  }
</script>

<style>
    .list {
        list-style: none;
        padding-left: 0;
        text-align: left;
    }

    .listComponent__item {
        padding: 10px;
    }

    .listComponent__item + .listComponent__item {
        border-top: 1px solid #ccc;
    }

    .container__wrapper {
        display: flex;
    }

    .container__item {
        padding: 10px;
    }

    .container__item + .container__item {
        border-left: 1px solid #ccc;
    }

    .container__item_controls {
        flex-basis: 40%;
    }

    .container__item_preview {
        flex-basis: 60%;
    }

</style>
