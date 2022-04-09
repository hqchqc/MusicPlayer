import { createRouter, createWebHistory } from "vue-router";

// lazyLoad
const LaunchScreenVue = () => import("@/views/LaunchScreen/LaunchScreen.vue");
const ExploreView = () => import("@/views/ExploreView/ExploreView.vue");
const CollectionView = () =>
  import("@/views/CollectionView/CollectionView.vue");
const HomeView = () => import("@/views/HomeView/HomeView.vue");
const ProfileView = () => import("@/views/ProfileView/ProfileView.vue");

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
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/explore",
      name: "explore",
      component: ExploreView,
    },
    {
      path: "/collection",
      name: "collection",
      component: CollectionView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
  ],
});

export default router;
