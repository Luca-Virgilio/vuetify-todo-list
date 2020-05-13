<template>
  <v-container fluid>
    <v-row justify="center" allign="center">
      <h1>{{title}}</h1>
    </v-row>
    <v-card outlined>
      <v-list-item-group>
        <v-list-item v-for="(todo, i) in todos" :key="i">
          <v-list-item-content>
            <div class="overline mb-4">{{`item ${todo.id}`}}</div>
            <v-list-item-title class="headline mb-1">{{todo.title}}</v-list-item-title>
            <v-list-item-subtitle>{{todo.desc}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "TodoList",

  data: () => ({
    title: "Vuetify todo List!!!",
    todos: [
      { id: 1, title: "1st todo", desc: "every monday ...." },
      { id: 2, title: "2nd todo", desc: "every tuesday ...." },
      { id: 3, title: "3rd todo", desc: "every wednesday ...." }
    ]
  })
};
</script>
