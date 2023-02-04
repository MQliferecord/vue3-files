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
      /**
      * 首先这里只设定了“白昼”和“黑夜”两种模式
      * 1. 判断当前显示在页面的模式的value是否等于白昼模式
      *   （1）这里value必须是响应式数据;
      *   （2）使用onMounted去监视相关的value。
      *   （3）多种模式可以使用map将value存为key,对应样式存为val
      * 2. 根据isLight去调整css特定的api的值
      * 3. 然后调用body.style.setProperty去覆盖global.css中的参数
      * 4. 为了更好的对样式进行统一管理，在style/global.css下写好要覆盖的数据
      */
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
