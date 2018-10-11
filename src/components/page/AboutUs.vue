<template>
  <div>
    <TestA @my-event="onCome"></TestA>
    <p>{{msg}}</p>
    <button @click.stop="submitValue">点击提交</button>
    <input @keydown.13="onKenDown" placeholder="1000">
    <form action="goPass">
      <label>用户名：</label>
      <input type="text" v-model="joinUs" placeholder="joinUs">
      <p>{{joinUs}}</p>
      <input type="checkbox" v-model="MyBox" value="1">
      <input type="checkbox" v-model="MyBox" value="2">
      <select name="" id="" v-model="OnSlect">
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
      <p>{{MyBox}}</p>
      <p>{{OnSlect}}</p>
      <select v-model="selections">
        <option v-for="(item) in selectOption" :value="item.value">{{item.name}}</option>
      </select>
      <p>{{selections}}</p>
      <input v-model.lazy="inputValues"/><span>{{inputValues}}</span><br>
      <input v-model.trim="inputValues"/><span>{{inputValues}}</span>
    </form>
  </div>
</template>

<script>
  import TestA from '@/components/page/testComponent/TestA'

  export default {
    name: "AboutUs",
    components: {
      TestA: TestA
    },
    data() {
      return {
        inputValues: "77777",
        selections: [],
        selectOption: [
          {name: "lily", value: 1},
          {name: "wang", value: 26},
        ],
        msg: "this is data ",
        joinUs: "10000",
        MyBox: [],
        OnSlect: []
      }
    },
    methods: {
      submitValue() {
        console.log('this is from')
      },
      onKenDown() {
        console.log('on key down')
      },
      onCome(parnA) {
        console.log('onCome', parnA)
      }
    }
  }
</script>

<style>

</style>
