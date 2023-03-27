<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <header-view :showSearch="false" />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img alt="Vue logo" src="@/assets/logo.png" />
          <h1>Welcome to Your Vue.js + Typescript Users App</h1>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HeaderView from "@/components/layout/HeaderView.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    HeaderView,
  },
});
</script>
