<template>
  <div>
    <b-col align-self="start">
      <b-card
        :title="fullName"
        :img-src="user.avatar"
        img-alt="User"
        img-top
        tag="article"
        style="max-width: 20rem"
        class="mb-2"
      >
        <b-card-text>
          {{ format(user.birthDate) }}
        </b-card-text>
        <b-card-text>
          {{ user.phone }}
        </b-card-text>
      </b-card>
    </b-col>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { User } from "@/types/user";

export default defineComponent({
  name: "UserItem",
  props: {
    user: {
      type: Object as () => User,
      required: true,
    },
  },

  computed: {
    fullName(): string {
      return `${this.user.firstName} ${this.user.lastName}`;
    },
  },

  methods: {
    format(date: string): string {
      const dt = new Date(date);
      return dt.toLocaleDateString();
    },
  },
});
</script>

<style scoped>
/* .card {
  display: inline-block;
  padding: 0.5rem 0;
  width: 300px;
  background: white;
  border: 0.2rem solid #aaa;
  margin-bottom: 2rem;
  border-radius: 1rem;
  color: black;
} */
</style>
