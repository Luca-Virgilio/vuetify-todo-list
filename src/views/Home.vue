<template>
  <div class="home-container">
    <v-container class="pa-8">
      <h3>Welcome</h3>
    </v-container>
    <AddTodo @addTodo="createItem" />
    <v-card outlined>
      <v-list-item v-for="todo in todos" :key="todo.id">
        <Todo :todo="todo" @delate="delateItem" />
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import Todo from "../components/Todo";
import AddTodo from "../components/AddTodo";

export default {
  name: "Home",
  components: {
    Todo,
    AddTodo,
  },

  data: () => ({
    todos: [
      {
        id: 1,
        title: "First toDo",
        completed: false,
      },
      {
        id: 2,
        title: "2nd toDo",
        completed: true,
      },
      {
        id: 3,
        title: "3th toDo",
        completed: false,
      },
    ],
  }),
  methods: {
    delateItem(id) {
      // console.log("id", id);
      this.todos = this.todos.filter((item) => item.id != id);
    },
    createItem(item) {
      // console.log("add item");
      this.todos = [...this.todos, item];
    },
  },
};
</script>

<style scoped>
.v-list-item.theme--light {
  padding: 0;
}
.home-container{
  background-color: #ede7f6 !important
}
</style>
