<template>
  <!-- <span>
    <v-list-item-action>
      <v-checkbox :input-value="todo.completed" color="primary"></v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
    </v-list-item-content>
   <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
</span> -->
  <!-- <div class="todo-item"> -->
    <v-list-item style="background-color:#D1C4E9;  padding: 0 10px;"> 
    <v-checkbox :input-value="todo.completed" color="black" @click="todo.completed = !todo.completed"></v-checkbox>
    <v-list-item-title color="black" :class={}>{{
      todo.title
    }}</v-list-item-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon color="black" @click="$emit('delate',todo.id)">mdi-delete</v-icon>
    </v-btn>
    </v-list-item>
  <!-- </div> -->
</template>

<script>
export default {
  name: "todo",
  props: ["todo"],
  data: () => ({}),
};
</script>
<style scoped>

</style>
