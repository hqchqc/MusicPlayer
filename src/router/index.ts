import { createRouter, createWebHistory } from "vue-router";

// lazyLoad
const LaunchScreenVue = () => import("@/views/LaunchScreen/LaunchScreen.vue");
const ExploreView = () => import("@/views/ExploreView/ExploreView.vue");
const CollectionView = () =>
  import("@/views/CollectionView/CollectionView.vue");
const HomeView = () => import("@/views/HomeView/HomeView.vue");
const ProfileView = () => import("@/views/ProfileView/ProfileView.vue");
const LoginScreen = () => import("@/views/LoginScreen/LoginScreen.vue");
const LoginPhone = () =>
  import("@/views/LoginScreen/childComps/LoginPhone.vue");
const RegisterPhone = () =>
  import("@/views/LoginScreen/childComps/RegisterPhone.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      redirect: "/launchScreen",
    },
    {
      path: "/launchScreen",
      name: "launchScreen",
      component: LaunchScreenVue,
      meta: {
        isShowTabBar: false,
      },
    },
    {
      path: "/login",
      name: "login",
      component: LoginScreen,
      meta: {
        isShowTabBar: false,
      },
    },
    {
      path: "/login/phone",
      name: "loginPhone",
      component: LoginPhone,
      meta: {
        isShowTabBar: false,
      },
    },
    {
      path: "/register/phone",
      name: "registerPhone",
      component: RegisterPhone,
      meta: {
        isShowTabBar: false,
      },
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
      meta: {
        isShowTabBar: true,
      },
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
      meta: {
        isShowTabBar: true,
      },
    },
    {
      path: "/collection",
      name: "collection",
      component: CollectionView,
      meta: {
        isShowTabBar: true,
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        isShowTabBar: true,
      },
    },
  ],
});

export default router;
