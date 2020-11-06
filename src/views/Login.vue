<template>
  <v-container class="text-center">
    <v-card flat class="flex">
      <v-card-title>
        <h2>Login</h2>
      </v-card-title>
      <v-form>
        <v-text-field v-model="username" label="email"></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
        ></v-text-field>
        <v-card-actions>
          <v-btn primary large block depressed @click="login">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    login() {
      // fake login
      console.log("login", this.username, this.password);
      this.$store.dispatch('doLogin',this.username);
      this.$router.push({name:"user"});
    },
  },
};
</script>
