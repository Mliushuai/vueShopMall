<template>
  <div>
    <input type="text" v-model="showData">
    1000 <br>
    <ChildVueCom
      :number='showData'
      @my-event='getMyEvent'
    >
      <p slot="headers">这是个插槽</p>
    </ChildVueCom>
    <keep-alive>
      <div :is="currentView"></div>
    </keep-alive>
    <button @click="show=!show">Toggle</button>
    <br>
    <transition name="fade" mode="out-in">
      <p v-show="show">show data </p>
    </transition>
    <transition name="fade">
      <p v-if="show" key="1">show data </p>
      <p v-else="show" key="2">show data 000</p>
    </transition>
    <transition name="my-trans">
      <p v-show="show">show data </p>
    </transition>

    <div style="border: 1px seagreen solid">
      <ComA></ComA>
      <ComB></ComB>
    </div>
    <transition name="my-trans" mode="out-in">
      <div :is="currentView"></div>
    </transition>
    <button @click="toggleCom">toggleCom</button>
  </div>
</template>

<script>
  import ChildVueCom from '@/components/page/testComponent/ChildVueCom'
  import ComA from '@/components/page/testComponent/ComA'
  import ComB from '@/components/page/testComponent/ComB'

  export default {
    name: "FontEnd",
    components: {ChildVueCom, ComA, ComB},
    data() {
      return {
        showData: 12,
        currentView: 'ComA',
        show: true
      }
    },
    methods: {
      getMyEvent(one) {
        console.log("1" + one)
      },
      toggleCom() {
        if (this.currentView === 'ComA') {
          this.currentView = 'ComB'
        }
        else {
          this.currentView = 'ComA'
        }
      }
    }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-out;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .my-trans-enter-active, .my-trans-leave-active {
    transition: all .5s ease-out;
  }

  .my-trans-enter {
    transform: translateY(-500px);
    opacity: 0;
  }

  .my-trans-leave-active {
    transform: translateY(500px);
    opacity: 0;
  }
</style>
