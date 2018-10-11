<template>
  <div>
    <button @click="addOne">加一个香蕉</button>
    <button @click="minusOne">减一个香蕉</button>
    <span>价格</span>
  </div>
</template>

<script>
  export default {
    name: "Banana",
    data() {
      return {
        price: 10
      }
    },
    methods: {
      addOne() {
        this.$store.commit('increment', this.price)
      },
      minusOne() {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>

<style scoped>

</style>
