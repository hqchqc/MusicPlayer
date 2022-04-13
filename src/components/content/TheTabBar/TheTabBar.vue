<script setup lang="ts">
import homeActive from "@/assets/icons/Fill/Home.svg";
import homeInactive from "@/assets/icons/Outline/Home.svg";
import exploreActive from "@/assets/icons/Fill/Search.svg";
import exploreInactive from "@/assets/icons/Outline/Search.svg";
import collectionActive from "@/assets/icons/Fill/Heart.svg";
import collectionInactive from "@/assets/icons/Outline/Heart.svg";
import profileActive from "@/assets/icons/Fill/Profile.svg";
import profileInactive from "@/assets/icons/Outline/Profile.svg";

const tabbar = [
  {
    text: "Home",
    activeImg: homeActive,
    inActiveImg: homeInactive,
    toPath: "/home",
  },
  {
    text: "Explore",
    activeImg: exploreActive,
    inActiveImg: exploreInactive,
    toPath: "/explore",
  },
  {
    text: "Collection",
    activeImg: collectionActive,
    inActiveImg: collectionInactive,
    toPath: "/collection",
  },
  {
    text: "Profile",
    activeImg: profileActive,
    inActiveImg: profileInactive,
    toPath: "/profile",
  },
];
</script>

<template>
  <van-tabbar
    route
    active-color="#FB233B"
    inactive-color="#A5A5A5"
    :fixed="false"
    class="rounded-xl"
  >
    <van-tabbar-item
      v-for="tabItem in tabbar"
      :key="tabItem.text"
      :to="tabItem.toPath"
      replace
    >
      <span> {{ tabItem.text }} </span>
      <template #icon="props">
        <img :src="props.active ? tabItem.activeImg : tabItem.inActiveImg" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
