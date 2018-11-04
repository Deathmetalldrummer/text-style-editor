<template>
    <div class="container">
        <div class="container__list">
            <ListCom></ListCom>
        </div>
        <button class="fff4444" @click="log()">log</button>
        <div class="container__preview">
            <PreviewCom></PreviewCom>
        </div>


    </div>
</template>

<script>
  import ListCom from './componentList/listContainer'
  import PreviewCom from './componentList/previewContainer'

  export default {
    name: 'Container',
    components: {
      ListCom,
      PreviewCom
    },
    data () {
      return {
        msg: 'Welcome to Container',
      }
    },
    methods: {
      log(){
        console.log(this.$store.getters.get__listComponents);
      }
    }
  }
</script>

<style scoped>
.fff4444 {
  position: relative;
  z-index: 99999999999;
}
    .container {
        display: flex;
        flex-flow: row nowrap;
        /*border: 1px solid black;*/
    }

    .container__list {
        flex-basis: 30%;
    }

    .container__preview {
        flex-basis: 70%;
    }
</style>
