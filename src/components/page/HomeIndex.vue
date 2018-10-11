<!--<script src="../../../build/check-versions.js"></script>-->
<template>
  <div>
    home
    <button @click="addMins">addMins</button>
    <ul>
      <li v-for="item in list">{{ item.name +"--"+item.age}}</li>
    </ul>
    <a
      :href="Link"
      :title="list"
    >Link</a>
    <componentA :dataA="dataA"></componentA>
    <span v-bind:class="classStr">400</span>
    <span v-bind:class="classNames">404</span>
    <p v-if="isPartA">10086</p>
    <p v-else>10010</p>
    <p v-show="!isPartA">isPartB</p>
    <button @click="toggle">toggle</button>
    <button @click="getParam">getParam</button>
    <router-view></router-view>
  </div>
</template>

<script>
  import componentA from '@/components/page/changPage/componentA'

  export default {
    name: "HomeIndex",
    components: {componentA: componentA},
    data() {
      return {
        classNames: {
          'red-font': true,
          'blue-font': false
        },
        classStr: 'red-font',
        isPartA: false,
        dataA: 'dataA',
        Link: "http://www.baidu.com",
        list: [
          {name: "add", age: '20'},
          {name: "pdd", age: '30'}
        ]
      }
    },
    methods: {
      addMins() {
        this.list.push({name: "cdd", age: '40'})
        if (this.list.length > 4) {
          this.list.push({name: "ufp", age: '80'})
        }
      },
      toggle() {
        this.isPartA = !this.isPartA
      },
      getParam(){
        console.log(this.$route.params)
      }
    } 
  }
</script>

<style scoped>

</style>
