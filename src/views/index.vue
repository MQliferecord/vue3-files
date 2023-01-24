<template>
  <div class="grid">
    <van-grid clickable :column-num="3">
      <van-grid-item icon="todo-list-o" text="待办" to="/todo" />
      <van-grid-item icon="description" text="文件" to="/files" />
      <van-grid-item icon="notes-o" text="日记" />
      <van-grid-item icon="calendar-o" text="图片" to="/images" />
      <van-grid-item icon="comment-o" text="评论" />
      <van-grid-item icon="closed-eye" text="主题" to="/theme"/>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "index",
};
</script>

<style>
.grid{
    margin: 0.1rem 0;
}
</style>