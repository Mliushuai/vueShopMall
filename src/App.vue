<template>
  <div id="app">
    <el-container>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
      <el-header>
        <headerindex></headerindex>
        <navmenu></navmenu>
      </el-header>
      <el-main>
        <div class="content">
          <div>
            <transition name="fade" mode="out-in">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </el-main>
      <div class="showMin">
        {{totalPrice}}
      </div>
      <el-footer>
        Footer
        <p>{{newTotalPrice}}</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import NavMenu from '@/components/config/NavMenu'
  import HeaderIndex from '@/components/config/HeaderIndex'
  import FooterIndex from '@/components/config/FooterIndex'
  import '@/common/style/Reset.css'

  export default {
    name: 'app',
    components: {
      'navmenu': NavMenu,
      'headerindex': HeaderIndex,
      'footerindex': FooterIndex,
    },
    data(){
      return{
        value1:""
      }
    },
    //computed 计算属性
    computed: {
      newTotalPrice() {
        //使用 getters 获取 store 中的state数据
        return this.$store.getters.getTotal
      },
      totalPrice() {
        if (this.$store.state.totalPrice < 0) {
          alert("不能再减了")
          return this.$store.state.totalPrice = 0
        }
        return this.$store.state.totalPrice
      }
    }
  }

</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s ease-out;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .showMin {
    width: 200px;
    height: 80px;
    font-size: 20px;
    line-height: 80px;
    text-align: center;
    background-color: darkgray;
  }
</style>
