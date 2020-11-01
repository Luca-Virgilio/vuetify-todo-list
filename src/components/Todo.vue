<template>
  <span>
    <v-list-item-action>
      <v-checkbox :input-value="todo.completed" color="primary"></v-checkbox>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title>{{ todo.title }}</v-list-item-title>
    </v-list-item-content>
  </span>
</template>

<script>
export default {
    name:"todo",
    props:["todo"],
    data: ()=>({
        
    })
}
</script>