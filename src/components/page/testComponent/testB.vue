<template>
  <div>
    {{dataNun}}<br>
    <label>用户名：</label><input type="text" v-model.trim="myVlaue" placeholder="请输入账户名">
    {{myValueWidtnNum}}
    <input type="text" v-model="myVlaue"><br>
    1000
    <input v-model="val"/>
    <br>
    {{getMyvalWitchnum()}}
  </div>
</template>

<script>
  export default {
    name: "testB",
    data() {
      return {
        dataNun: 10,
        myVlaue: '10086',
        val: '404'
      }
    },
    watch: {
      val(val, oldVal) {
        console.log(val + "val" + '/n' + oldVal)
      }
    },
    computed: {
      myValueWidtnNum() {
        let myName = this.myVlaue.replace(/\d/g, '')
        console.log(myName)
        return (
          Date.now()
        )
      }
    },
    methods: {
      getMyvalWitchnum() {
        return this.myVlaue.replace(/\d/g, '')
      }
    },

  }
</script>

<style scoped>
  input {
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 22px;
    border: 1px salmon solid;
  }
</style>
