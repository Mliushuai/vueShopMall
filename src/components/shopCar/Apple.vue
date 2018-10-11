<template>
  <div>
    <button @click="addOne">加一个苹果</button>
    <button @click="minusOne">减一个苹果</button>
    <span>价格</span>
  </div>
</template>

<script>
  export default {
    name: "Apple",
    data() {
      return {
        price: 5
      }
    },
    methods: {
      /**
       * addOne 采用接收action方式进行触发更新
       */
      addOne() {
        // this.$store.commit('increment',this.price)
        this.$store.dispatch('increase',this.price)
      },
      /**
       * minusOne 采用mutations方式进行触发更新
       */
      minusOne() {
        this.$store.commit('decrement',this.price)
      }
    }
  }
</script>

