<template>
  <div>
    <div>总价合计：{{totalPrice}}</div>
    <Apple></Apple>
    <Banana></Banana>
    <button @click="testUrl">testUrl</button>
  </div>
</template>

<script>
  import Apple from '@/components/shopCar/Apple'
  import Banana from '@/components/shopCar/Banana'

  export default {
    components: {Apple, Banana},
    name: "SetStating",
    methods:{
      testUrl(){
        this.$router.push({path: '/Login'})
      }
    },
    computed: {
      totalPrice() {
        return this.$store.state.totalPrice
      }
    },
  }
</script>

<style scoped>

</style>
