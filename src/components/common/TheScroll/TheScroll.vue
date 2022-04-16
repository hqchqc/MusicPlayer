<script setup lang="ts">
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import { onMounted, ref } from "vue";

type position = {
  x: number;
  y: number;
};
interface PropsType {
  /**
   * 1 滚动的时候会派发scroll事件，会截流。
   * 2 滚动的时候实时派发scroll事件，不会截流。
   * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
   */
  probeType?: 1 | 2 | 3;
  /**
   * 点击列表是否派发click事件
   */
  click?: boolean;
  /**
   * 是否开启横向滚动
   */
  scrollX?: boolean;
  /**
   * 是否派发滚动事件
   */
  listenScroll?: boolean;
  /**
   * 是否派发滚动到底部的事件，用于上拉加载
   */
  pullup?: () => string;
  /**
   * 是否派发顶部下拉的事件，用于下拉刷新
   */
  pulldown?: () => string;
  /**
   * 是否派发列表滚动开始的事件
   */
  beforeScroll?: boolean;
}
interface EmitsType {
  (e: "beforeScroll"): void;
  (e: "scroll", position: position): void;
  (e: "afterScroll"): void;
}

const props = defineProps<PropsType>();
const emit = defineEmits<EmitsType>();
BScroll.use(ObserveDOM);
let bScroll: BScroll;
const wrapper = ref(null);

onMounted(() => {
  if (!wrapper.value) return;
  const {
    probeType,
    click,
    scrollX,
    listenScroll,
    pullup,
    pulldown,
    beforeScroll,
  } = props;
  bScroll = new BScroll(wrapper.value, {
    scrollX,
    probeType,
    click,
    observeDOM: true, // 开启 observe-dom 插件
  });
  /**
   * 如果开启了滚动前事件触发
   */
  if (beforeScroll) {
    bScroll.on("beforeScrollStart", () => emit("beforeScroll"));
  }
  /**
   * 如果开启了滚动(滚动中)事件触发
   */
  if (listenScroll) {
    bScroll.on("scroll", (position: position) => emit("scroll", position));
  }
  /**
   * 如果开启了滚动结束事件触发
   */
  if (beforeScroll) {
    bScroll.on("scrollEnd", () => emit("afterScroll"));
  }
  /**
   * 是否派发滚动到底部事件，用于上拉加载
   */
  if (pullup) {
    bScroll.on("pullingUp", async () => {
      try {
        const msg = await pullup();
        if (msg) {
          bScroll.finishPullUp();
        }
      } catch (e) {
        bScroll.finishPullUp();
      }
    });
  }
  /**
   * 是否派发顶部下拉的事件，用于下拉刷新
   */
  if (pulldown) {
    bScroll.on("pullingDown", async () => {
      try {
        const msg = await pulldown();
        if (msg) {
          bScroll.finishPullDown();
        }
      } catch (e) {
        bScroll.finishPullDown();
      }
    });
  }
});
</script>

<template>
  <div
    :class="
      props.scrollX ? 'overflow-hidden whitespace-nowrap' : 'overflow-hidden'
    "
    ref="wrapper"
  >
    <div :class="props.scrollX ? 'inline-block' : 'block'">
      <slot></slot>
    </div>
  </div>
</template>
