<template>
  <div class="todolist">
    <van-form @submit.prevent="addTodo()">
      <van-field
        v-model="newtodo"
        name="newtodo"
        label="TODO"
        center
        clearable
        placeholder="请输入待办事项"
      >
        <template #button>
          <van-button icon="plus" round type="default" @click="addTodo" />
        </template>
      </van-field>
    </van-form>
    <div class="todo-label"><span>todolist</span></div>
    <ul class="todo-items">
      <li class="todo-item" v-for="(todo, index) in todos" :key="index">
        <div>
          <van-icon name="circle" />
          <span :class="{ done: todo.done }">
            {{ todo.content }}
          </span>
        </div>
        <van-button
          icon="minus"
          round
          type="default"
          @click="removeTodo"
          v-show="!todo.done"
        >
        </van-button>
      </li>
      <br />
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "todo",
  setup() {
    const newtodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "",
      },
    ];
    const todosData = JSON.parse(localStorage.getItem("todos")) || defaultData;
    const todos = ref(todosData);
    function addTodo() {
      console.log(newtodo.value);
      if (newtodo.value) {
        todos.value.push({
          done: false,
          content: newtodo.value,
        });
        newtodo.value = "";
      }
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }
    function removeTodo(todo, index) {
      todo.done = !todo.done;
      todos.value.splice(index, 1);
      saveData();
    }
    return {
      todos,
      newtodo,
      addTodo,
      removeTodo,
      saveData,
    };
  },
};
</script>

<style lang="scss">
.todolist {
  margin: 0.22rem 0;
  .todo-label {
    margin: 0.22rem 0;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 0.22rem;
    text-align: center;
  }
  .todo-items {
    .todo-item {
      padding: 0 0.22rem;
      display: flex;
      justify-content: space-between;
      font-size: 0.2rem;
      height: 0.44rem;
      line-height: 0.44rem;
    }
  }
}
</style>