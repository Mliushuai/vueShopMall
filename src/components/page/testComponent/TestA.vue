<template>
    <div>
      <p>{{meta}}</p>
      <button @click="MyEvent">父组件</button>
    </div>
</template>

<script>
    export default {
        name: "TestA",
      data(){
          return{
            meta:"Test A",
            hello:'hello world'
          }
      },
      methods:{
        onCome() {
          console.log('onCome')
        },
        MyEvent(){
          this.$emit('my-event' , this.hello)
        }
      },
    }
</script>

<style scoped>

</style>
