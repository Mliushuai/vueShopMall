<template>
  <div>
    {{msg}}<br>
    <div @click="showData">456</div>
    {{number}}
    <button @click="emitMyEvent">emitMyEvent</button>
    <br>
    <slot name="headers">no headers</slot>
  </div>
</template>

<script>
  export default {
    props:['number'],
    name: "ChildVueCom",
    data() {
      return {
        msg: '123',
        hello:'子组件传递内容'
      }
    },
    methods:{
      showData(){
        alert('123')
      },
      emitMyEvent(){
        this.$emit('my-event',this.hello)
      }
    },
  }
</script>

<style scoped>

</style>
