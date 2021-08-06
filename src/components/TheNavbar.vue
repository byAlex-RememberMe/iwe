<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar__logo">
        IWe
      </div>
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarLinks"
          aria-controls="navbarLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="nav collapse navbar-collapse" id="navbarLinks">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/messages">Сообщения</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/help">Помощь</router-link>
          </li>
          <li>
            <a class="nav-link" href="#" @click.prevent="logout">Выход</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit("logout");
        router.push("/auth");
      },
      open: () => store.commit("openSidebar"),
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");
.container {
  width: 975px;
  padding: 0 20px;
}
.nav {
  justify-content: flex-end;
}

.navbar__logo {
  font-size: 4.75rem;
  font-family: "Cookie", cursive;
  color: #fff;
}

@media (max-width: 768px) {
  .navbar__logo {
    font-size: 3rem;
  }
}
</style>