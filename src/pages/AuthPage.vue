<template>
  <div class="container auth">    
    <div class="row">
      <div class="auth__form p-3">
          <div class="text-center">
            <h1 class="auth__logo">IWe</h1>
          </div>
          
          <form class="form-control" @submit.prevent="onSubmit">
            <div class="m-3 form__control__inputs" :class="{ invalid: eError }">
              <label for="email"></label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Email"
                @blur="eBlur"
              />
              <small class="text-danger" v-if="eError">{{ eError }}</small>
            </div>

            <div class="m-3 form__control__inputs" :class="{ invalid: pError }">
              <label for="password"></label>
              <input
                type="password"
                id="password"
                placeholder="Пароль"
                v-model="password"
                @blur="pBlur"
              />
              <small class="text-danger" v-if="pError"> {{ pError }} </small>
            </div>
            <div class="auth__form__item__btn m-3">
              <button
                class="btn btn-outline-primary btn-sm"
                type="submit"
                :disabled="isSubmitting || isTooManyAttempts"
              >
                Войти
              </button>
            </div>
            <div class="text-danger m-3" v-if="isTooManyAttempts">
              Вы слишком часто пытаетесь войти в систему. Попробуйте позже.
            </div>
          </form>

          <div class="mt-2 auth__signup">
            У вас ещё нет аккаунта?
            <router-link 
              to="/signUp"
              class="auth__signup__item"
            >
              Зарегистрироваться
            </router-link>
          </div>
          <!-- ./auth__form__item -->
      </div>
      <!-- ./col -->
    </div>
    <!-- ./row -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { error } from "@/utils/error.js";
import { useLoginForm } from "@/use/login-form.js";
export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    if (route.query.message) {
      store.dispatch("setMessage", {
        value: error(route.query.message),
        type: "warning",
      });
    }
    return { ...useLoginForm()};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");

.auth {
  display: flex;
  justify-content: center;
  align-items:center;
  height: 100vh;

  background-image: url("../images/iphone2.png");
  background-repeat: no-repeat;
  background-size: 432px;
  background-position: center;
}
.auth__form{
  width: 376px;
}
.auth__form__item__btn {
  display: flex;
  align-items: stretch;
  flex-direction: column;
}
.auth__signup{
  display: flex;
  justify-content: space-evenly;
  text-decoration: none;
}
.auth__signup__item{
  text-decoration: none;
}
.auth__signup__item:hover {  
  text-shadow: 0 0 5px yellowgreen;
}
.auth__logo {
  font-size: 140px;
  font-family: "Cookie", cursive;
}

.form__control__inputs {
  display: flex;
  flex-direction: column;
}
.iphone__img {
  height: 800px;
}


/* MEDIA */

/* MAX-WIDTH */
@media (max-width: 971px) {
  .auth {
    background-image: none;
  }
}

@media (max-width: 350px) {
  .auth__form{
    width: 320px;
  }
}
/* MAX-HEIGHT */
@media (max-height: 899px) {
  .auth {
    background-image: none;
  }
}

</style>