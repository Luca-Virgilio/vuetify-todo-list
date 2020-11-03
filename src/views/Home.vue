<template>
  <div class="Home-container">
    <v-list-item v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" @delate="delateItem"/>       
    </v-list-item>
  </div>
</template>


<script>
import Todo from '../components/Todo';

export default {
  name: "Home",
  components: {
    Todo
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
  methods:{
    delateItem (id){
      console.log("id",id);
      this.todos = this.todos.filter(item => item.id != id);
    }
  }
};
</script>

<style scoped>
.v-list-item.theme--light{
  padding: 0;
}
</style>