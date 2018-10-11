<template>
  <div>
    <div>总价合计：{{totalPrice}}</div>
    <Apple></Apple>
    <Banana></Banana>
  </div>
</template>

<script>
  import Apple from '@/components/shopCar/Apple'
  import Banana from '@/components/shopCar/Banana'

  export default {
    components: {Apple, Banana},
    name: "SetStating",
    computed: {
      totalPrice() {
        return this.$store.state.totalPrice
      }
    },
  }
</script>

<style scoped>

</style>
