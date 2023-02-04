
<template>
  <div class="files-upload">
    <div class="h-singleimg">
        <!--使用active-class显示点击高亮，to进行页面路由跳转-->
        <router-link active-class="active" :to="{name:'singleImg'}">
            单图片上传 
        </router-link>
    </div>
    <div class="h-multiimg">
        <router-link active-class="active" :to="{name:'multiImg'}">
            多图片上传 
        </router-link>
    </div>
    <div class="h-video">
        <router-link active-class="active" :to="{name:'video'}">
            视频上传 
        </router-link>
    </div>
  </div>
  <!--放置要跳转的页面内容-->
  <router-view></router-view>
</template>

<script>
</script>


<style lang="scss">
.files-upload{
    margin:0.22rem 0;
    height:0.4rem;
    display:flex;
    font-size:0.17rem;
    align-items: center;
    box-sizing:border-box;
    .h-singleimg,
    .h-multiimg,
    .h-video{
        flex:1;
        border-radius:0.1rem;
        text-align: center;
    }
}
</style>
