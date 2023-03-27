<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Users App</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/users">Users</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="showSearch">
          <b-form-input
            size="sm"
            class="mr-sm-2"
            placeholder="Search"
            v-model="searchText"
            @keydown.enter="searchMethod"
          ></b-form-input>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface HeaderViewData {
  searchText: string;
}

export default defineComponent({
  name: "HeaderView",

  data(): HeaderViewData {
    return {
      searchText: "",
    };
  },

  props: {
    showSearch: {
      type: Boolean as () => boolean,
      required: true,
    },
  },

  computed: {
    title(): string {
      return this.$route.path == "/" ? "Home" : "Users";
    },
  },

  emits: {
    search: (value: string) => typeof value === "string" && value.length > 0,
  },

  methods: {
    searchMethod(): void {
      this.$emit("search", this.searchText);
    },
  },
});
</script>

<style>
nav a.nav-link.router-link-exact-active.router-link-active {
  color: white;
}
</style>
