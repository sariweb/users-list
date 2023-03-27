<template>
  <b-container>
    <!-- <div class="">
      <div>Count: {{ shownUsers.length }}</div>
      <search-bar @search="filter" />
      <div v-if="searchText">
        <button class="btn" @click="searchText = ''">Reset</button>
        <span class="filter">{{ searchText }}</span>
      </div>
    </div> -->
    <b-row>
      <user-item v-for="user in users" :key="user.uid" :user="user" />
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserItem from "./UserItem.vue";
// import SearchBar from "./SearchBar.vue";
import { User } from "@/types/user";

// interface UserListData {
//   searchText: string;
//   filteredUsers: User[];
// }

export default defineComponent({
  name: "UserList",

  props: {
    users: {
      type: Array as () => User[],
      required: true,
    },
  },

  // data(): UserListData {
  //   return {
  //     searchText: "",
  //     filteredUsers: [],
  //   };
  // },

  // computed: {
  //   shownUsers(): User[] {
  //     let t = this.searchText;
  //     if (t) {
  //       t = t.toLowerCase();
  //       return this.users.filter((user: User) => {
  //         const fn = user.firstName.toLowerCase();
  //         const ln = user.lastName.toLowerCase();
  //         return fn.includes(t) || ln.includes(t);
  //       });
  //     } else {
  //       return this.users;
  //     }
  //   },
  // },

  // methods: {
  //   filter(text: string): void {
  //     this.searchText = text;
  //   },
  // },

  components: {
    UserItem,
    // SearchBar,
  },
});
</script>

<style>
/* .card-container {
  margin: 2rem 0;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
}

.row {
  padding: 02rem 1rem;
  display: flex;
  justify-content: space-evenly;
}

.filter {
  padding: 0 1rem;
  margin: 0 1rem;
  background: #ccc;
  border: 0.1rem solid #555;
  color: #555;
}

.btn {
  padding: 0 1rem;
  margin: 0 1rem;
} */
</style>
