<template>
  <v-container fluid>
    <v-row justify="center" allign="center">
      <h1>{{title}}</h1>
    </v-row>
    <v-card outlined>
      <!-- <v-list-item-group>
        <v-list-item v-for="(todo, i) in todos" :key="i">
          <v-list-item-content>
            <div class="overline mb-4">{{`item ${todo.id}`}}</div>
            <v-list-item-title class="headline mb-1">{{todo.title}}</v-list-item-title>
            <v-list-item-subtitle>{{todo.desc}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>-->
      <template>
        <v-data-table
          :headers="headers"
          :items="tests"
          item-key="id"
          class="elevation-1"
          ref="myTable"
        >
          <template v-slot:top>
            <v-btn @click="reverte">Change</v-btn>
          </template>

          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.name" :data-id="item.id" :id="'test'+item.id">
                <td>
                  <v-btn color="info" style="cursor: move" class="sortHandle">Move</v-btn>
                </td>
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.desc }}</td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </template>
    </v-card>
  </v-container>
</template>


<script>
import { Sortable, MultiDrag } from "sortablejs";
Sortable.mount(new MultiDrag());
export default {
  name: "TodoList",

  data: () => ({
    title: "Vuetify todo List!!!",
    selected: [],
    singleSelect: null,
    sortMount:null,
    todos: [
      { id: 1, title: "1st todo", desc: "every monday ...." },
      { id: 2, title: "2nd todo", desc: "every tuesday ...." },
      { id: 3, title: "3rd todo", desc: "every wednesday ...." },
      { id: 4, title: "4st todo", desc: "every monday ...." },
      {
        id: 5,
        title: "5nd todo",
        desc: "every tuesday ....",
        superset_id: "aaa"
      },
      {
        id: 6,
        title: "6rd todo",
        desc: "every wednesday ....",
        superset_id: "aaa"
      },
      { id: 7, title: "7st todo", desc: "every monday ...." },
      { id: 8, title: "8nd todo", desc: "every tuesday ...." },
      { id: 9, title: "9rd todo", desc: "every wednesday ...." }
    ],
    headers: [
      { text: "", value: "" },
      { text: "Id", value: "id" },
      { text: "Title", value: "title" },
      { text: "Description", value: "desc" }
    ]
  }),
  methods: {
    reverte() {
      const copyArr = [...this.todos];
      copyArr.splice(4, 1, { id: 10, name: "test" });
      this.todos = copyArr;
    }, 
    onSelect(evt){
      console.log()
       const i = evt.newIndicies[0].index;
        console.log("onSelect", i); // The selected item

        const strItem = 'test'+(i+2);
        console.log(strItem);
        console.log(this.$refs)
        const ele =  document.getElementById(strItem);


        console.log(ele);
        Sortable.utils.select(ele);
    },
  },
  computed: {
    tests: {
      get() {
        return this.todos;
      }
    }
  },
  mounted() {
    let table = this.$refs.myTable.$el.getElementsByTagName("tbody")[0];
    console.log(table);
    const _self = this;
    this.sortMount = Sortable.create(table, {
      sort: true,
      multiDrag: true,
      selectedClass: "selected",
      handle: ".sortHandle",
      onEnd(e) {
        console.log("onEnd", e);
        // const rowSelected = _self.todos.splice(oldIndex, 2);
        // _self.todos.splice(newIndex, 0, ...rowSelected);
      },
      onSelect: _self.onSelect
     

    });
  }
};
</script>
<style>
.selected {
  background-color: #f9c7c8 !important;
  border: solid red 1px !important;
  z-index: 1 !important;
}
</style>