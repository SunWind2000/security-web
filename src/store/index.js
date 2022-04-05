import { createStore } from 'vuex';

export default createStore({
  state: {
    // 显示全局加载
    isShowLoading: false,
    // 顶部菜单栏
    menuItems: [
      {
        name: '/index',
        text: '首页',
      },
      {
        name: '/webSecurity',
        text: '网络安全',
        children: [
          {
            name: '/child1',
            text: '子项目1',
          },
          {
            name: '/child2',
            text: '子项目2',
          },
          {
            name: '/child3',
            text: '子项目3',
          },
        ],
      },
      {
        name: '/learnSource',
        text: '学习资源',
        children: [
          {
            name: '/child1',
            text: '子项目1',
          },
          {
            name: '/child2',
            text: '子项目2',
          },
          {
            name: '/child3',
            text: '子项目3',
          },
        ],
      },
      {
        name: '/about',
        text: '个人博客',
      },
    ],
  },
  getters: {},
  mutations: {
    setMenus(state, items) {
      state.menuItems = [...items];
    },
    setLoading(state, isShowLoading) {
      state.isShowLoading = isShowLoading;
    },
  },
  actions: {},
  modules: {},
});
