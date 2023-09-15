---
title: Vue + Ts 实现TodoList
icon: typescript
date: 2022-08-06
category: TypeScript
tag:
  - demo
---

先为我们的应用安装 UI 框架，这样视觉上会好看些

```
npm install element-plus --save
```

安装好之后，在 main.ts 中注册组件并导入样式文件：

```ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

createApp(App).use(router).use(ElementPlus).mount("#app");
```

创建一个 `types` 文件夹，用来存放项目中类型声明文件，比如我们这个 todo 应用，可以创建一个 `todo.ts`:

```ts
export interface Todo {
  id: number;
  title: string;
  done: boolean;
}
```

- 然后在 `components` 文件夹下新建 `TodoList.vue`，这个组件用来实现处理每个待办事项的操作逻辑;
- 实现添加待办事项的组件，同样在 `components` 中创建 `AddTodo.vue`;
- 实现 `add`，`remove`，`toggle` 这三个方法，并封装成一个工具函数: 在 src 目录中创建 `utils` 文件夹，然后创建 `todoAction.ts`，用来承载具体的业务逻辑;

::: code-tabs#language
@tab TodoList.vue

```vue
<template>
  <div class="todo-item">
    <el-checkbox v-model="todo!.done" />
    <el-alert
      class="alert"
      :title="todo!.title"
      :type="todo!.done ? 'success' : 'warning'"
      :closable="false"
      @click="toggle"
    />
    <el-button type="danger" @click="remove">删除</el-button>
  </div>
</template>

<script lang="ts">
import { defineProps, defineEmits, PropType } from "vue";
import { Todo } from "@/types/todo.js";
</script>
<script setup lang="ts">
const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
  },
});
const emit = defineEmits(["toggle", "remove"]);

const toggle = () => {
  emit("toggle", props.todo?.id);
};

const remove = () => {
  // 感叹号用于强调这个字段一定存在
  emit("remove", props.todo!.id);
};
</script>
<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.alert {
  margin: 0 20px;
}
</style>
```

@tab AddTodo.vue

```vue
<template>
  <div class="add-todo">
    <el-input type="text" v-model="state.inputValue" />
    <el-button @click="onClick" class="add-button" type="primary"
      >添加</el-button
    >
  </div>
</template>

<script lang="ts">
import { reactive, defineEmits } from "vue";

interface State {
  inputValue: string;
}
</script>
<script lang="ts" setup>
const emit = defineEmits(["add"]);

const state = reactive<State>({
  inputValue: "",
});
const onClick = () => {
  emit("add", state.inputValue);
  state.inputValue = "";
};
</script>

<style scoped>
.add-todo {
  display: flex;
}

.add-button {
  margin-left: 20px;
}
</style>
```

@tab todoAction.ts

```ts
import { Ref } from "vue";
import { Todo } from "@/types/todo";

export default (todos: Ref<Todo[]>) => {
  // 实现添加一个待办事项
  const addTodo = (title: string) => {
    todos.value = [
      ...todos.value,
      {
        id: todos.value.length + 1,
        title,
        done: false,
      },
    ];
  };
  // 实现移除一个待办事项
  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
  // 更新待办事项的状态
  const toggleTodo = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (!todo) return;
    todo.done = !todo.done;
  };

  return {
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
```

:::

`addTodo` 用来实现添加一个待办事项，`removeTodo` 用来实现移除一个待办事项，`toggleTodo` 用来更新待办事项的状态。最后我们来实现父组件，创建 `Todo.vue` 文件：

```vue
<template>
  <div class="wrapper">
    <TodoList
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @toggle="toggleTodo"
      @remove="removeTodo"
    />
    <AddTodo @add="addTodo" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Todo } from "../types/todo";
</script>
<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import todoAction from "@/utils/todoAction";
const initialTodos: Todo[] = [
  {
    id: 1,
    title: "学习类型体操基础姿势",
    done: false,
  },
  {
    id: 2,
    title: "在Vue3中使用TS",
    done: false,
  },
  {
    id: 3,
    title: "炒菜：葱爆牛肉",
    done: false,
  },
];

const todos = ref<Todo[]>(initialTodos);
const { addTodo, removeTodo, toggleTodo } = todoAction(todos);
</script>

<style>
.wrapper {
  width: 500px;
  margin: auto;
}
</style>
```

![todolist-ts.gif](https://riddler.oss-cn-shanghai.aliyuncs.com/blog/todolist-ts.gif)

## 参考

- [Vue3 TypeScript 使用教程 - 实战 Vue3 element-plus 开发「待办清单」](https://kalacloud.com/blog/vue3-typescript-tutorial-examples/#%E4%BD%BF%E7%94%A8-vue3-typescript--element-plus-%E5%BC%80%E5%8F%91%E5%BE%85%E5%8A%9E%E6%B8%85%E5%8D%95%E5%AE%9E%E4%BE%8B)
