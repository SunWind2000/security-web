<template>
  <div class="head-bg">
    <div><img src="../assets/logo1.png" alt="logo" class="logo" /></div>
    <div class="head-nav">
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
      >
        <!-- 动态顶部菜单栏加载 -->
        <div v-for="(item, index) in menuItems" :key="index">
          <el-sub-menu
            v-if="item.children"
            :index="item.name"
            style="width: 110px"
          >
            <template #title>{{ item.text }}</template>
            <div v-for="(subItem, i) in item.children" :key="index + i">
              <el-sub-menu v-if="subItem.children" :index="subItem.name">
                <template #title>{{ subItem.text }}</template>
                <div
                  v-for="(threeItem, k) in subItem.children"
                  :key="index + i + k"
                >
                  <el-menu-item :index="threeItem.name">
                    {{ threeItem.text }}
                  </el-menu-item>
                </div>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.name">
                {{ subItem.text }}
              </el-menu-item>
            </div>
          </el-sub-menu>
          <el-menu-item v-else :index="item.name">{{ item.text }}</el-menu-item>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      userImg:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    };
  },
  computed: {
    // 加载顶部菜单栏
    menuItems() {
      return this.$store.state.menuItems;
    },
  },
};
</script>

<style scoped>
.head-bg {
  width: 100%;
  height: 90px;
  z-index: 100;
  box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 4%);
}
.head-nav {
  float: left;
  width: 80%;
  margin-top: 10px;
}
.logo {
  float: left;
  width: 140px;
}
.h-right {
  display: flex;
  align-items: center;
}
.head-user {
  float: right;
  width: 10%;
  height: 36px;
  border-radius: 100px;
  background: #f7f8fa;
  margin-top: 10px;
}
.user-img-c {
  width: 44px;
  height: 44px;
  background: #ddd;
  border-radius: 50%;
  margin: 0 40px;
  overflow: hidden;
}
</style>
