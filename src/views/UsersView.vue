<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <header-view @search="setSearchText" :showSearch="true" />
        </b-col>
      </b-row>
      <b-row class="my-2">
        <b-col cols="4">&nbsp;</b-col>
        <b-col cols="4" align-self="center">
          <h1>Users List</h1>
        </b-col>
        <b-col cols="4" align-self="center">
          <b-button variant="primary" @click="setUsers">Reload</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <user-list :users="shownUsers" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderView from "@/components/layout/HeaderView.vue";
import UserList from "@/components/UserList.vue";
import { loadUsers } from "@/api";
import { User } from "@/types/user";

const MAX_USERS = 30;

interface UsersViewData {
  users: User[];
  size: number;
  searchText: string;
}

export default defineComponent({
  name: "UserView",

  components: {
    UserList,
    HeaderView,
  },

  data(): UsersViewData {
    return {
      users: [],
      size: 10,
      searchText: "",
    };
  },

  computed: {
    shownUsers(): User[] {
      if (this.searchText) {
        let t = this.searchText.toLowerCase();

        const u = this.users.filter((user: User) => {
          const fn = user.firstName.toLowerCase();
          const ln = user.lastName.toLowerCase();
          return fn.includes(t) || ln.includes(t);
        });
        return u;
      } else {
        return this.users;
      }
    },
  },

  created() {
    this.setUsers();
  },

  methods: {
    setSize(): void {
      this.size = Math.ceil(Math.random() * MAX_USERS);
    },

    setSearchText(text: string): void {
      this.searchText = text;
    },

    async setUsers() {
      this.setSize();
      const apiUsers = await loadUsers(this.size);
      this.users = this.mapUsers(apiUsers);
    },

    mapUsers(users: any[]): User[] {
      return users.map((user) => {
        const uid: string = user.uid;
        const first_name: string = user.first_name;
        const last_name: string = user.last_name;
        const date_of_birth: string = user.date_of_birth;
        const avatar: string = user.avatar;
        const phone_number: string = user.phone_number;
        return {
          uid: uid,
          firstName: first_name,
          lastName: last_name,
          birthDate: date_of_birth,
          avatar: avatar,
          phone: phone_number,
        } as User;
      });
    },
  },
});
</script>
