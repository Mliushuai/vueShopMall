<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      light router
    >
      <template
        v-for="(item,index) in $router.options.routes" v-if="!item.hidden"
      >
        <el-menu-item :index="item.path">
          <router-link :to="item.path">
            <i class="fa" :class="item.class"></i>{{item.name}}
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </div>

</template>

<script>
  export default {
    name: "NavMenu",
    /**
     * data 实例化数据
     * @returns {{navData: *[]}}
     */
    data() {
      return {
        nav: [],
        navIndex: 0,
      }
    },
    /**
     * mounted 钩子函数 实力化时 渲染组件数据
     */
    mounted: function () {
      this.changGet();
    },
    /**
     * vue 中函数操作方式
     */
    methods: {
      /**
       * 测试接通mock
       */
      changGet() {
        this.$axios.get('/api/data').then(res => {
          this.nav = res.data.data
        })
      },
      gotoAddress(path, index) {
        this.navIndex = index;
        // 路由跳转
        this.$router.push(path)
      },
      /**
       * 检索当前路径
       * @param path
       */
      checkRouterLocal(path) {
        // 查找当前路由下标高亮
        console.log(path)
        this.navIndex = this.nav.findIndex(item => item.path === path);
      }
    },
    beforeCreate() {
      if (this.$route.path === '/') {
        this.$router.push({path: '/homeindex'})
      }
    },
    watch: {
      "$route"() {
        // 获取当前路径
        let path = this.$route.path;
        // 检索当前路径
        this.checkRouterLocal(path);
      }
    },
  }
</script>
<style>

</style>
