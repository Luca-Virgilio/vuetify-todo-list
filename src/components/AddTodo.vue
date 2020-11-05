<template>
  <v-card color="deep-purple lighten-5" outlined>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="8" md="4">
            <v-text-field
              ref="nameInput"
              color="deep-purple darken-3"
              v-model="title"
              :rules="titleRules"
              label="Title"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4" md="2" class="flex">
            <v-btn
              depressed
              small
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="createTodo"
              >Create</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddTodo",
  data() {
    return {
      valid: false,
      title: "",
      titleRules: [
        (v) => !!v || "Name is required",
        (v) => v.length > 3 || "Name must be more than 3 characters",
      ],
    };
  },
  methods: {
    createTodo() {
      const newTodo = {
        id: uuidv4(),
        title: this.title,
        completed: false,
      };
      console.log("new Todo", newTodo);
      this.title = "";
      this.$refs.nameInput.isResetting = true;
      this.$emit("addTodo", newTodo);
    },
  },
};
</script>
