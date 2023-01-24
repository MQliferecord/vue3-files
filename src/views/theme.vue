<template>
  <div class="dropdown-menu">
    <span>主题样式</span>
    <van-dropdown-menu>
      <van-dropdown-item
        v-model="value"
        :options="defaultOPT"
        overlay
        @change="changeTheme"
      >
        <template #right-icon>
          <van-icon name="success" />
        </template>
      </van-dropdown-item>
    </van-dropdown-menu>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "theme",
  setup() {
    const value = ref(0);
    const body = document.body;
    let defaultOPT = [
      { text: "白昼模式", value: 0 },
      { text: "黑夜模式", value: 1 },
    ];
    console.log(value.value)
    const themeVal = JSON.parse(localStorage.getItem("themeVal")) || value.value;
    console.log(defaultOPT)
    onMounted(()=>value.value)
    const changeTheme = () => {
      console.log(themeVal)
      console.log(value.value)
      localStorage.setItem("themeVal", JSON.stringify(value.value));
      
      const black = "#ffffff";
      const white = "#000000";
      const graywhite = "#ccc";
      const grayblack = "#c0c0c0";
      const getThemeMap = (isLight) => {
        return {
          "theme-white-active-color": isLight ? black : white,
          "theme-white-background-color": isLight ? white : black,
          "theme-white-non-active-color": isLight ? graywhite : grayblack,
        };
      };
      const themeMap = getThemeMap(defaultOPT[0].value !== value.value);
      Object.keys(themeMap).forEach((key) => {
        body.style.setProperty(`--${key}`, themeMap[key]);
      });
    };

    return {
      value,
      defaultOPT,
      changeTheme,
    };
  },
};
</script>

<style>
.dropdown-menu {
  margin: 0.22rem 0;
}
</style>