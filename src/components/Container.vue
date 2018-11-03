<template>
    <div class="container">
        <div class="container__list">
            <ListCom :list="componentList"></ListCom>
        </div>
        <button @click="log()">log</button>
        <div class="container__preview">
            <PreviewCom :preview="componentList"></PreviewCom>
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
        componentList: this.$store.getters.get__listComponents
      }
    }
  }
</script>

<style scoped>
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
