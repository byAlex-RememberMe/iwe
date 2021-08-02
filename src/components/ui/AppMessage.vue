<template>
  <div v-if="message" class="alert alert-warning" :class="[message.type]">
    <div class="alert__block">
      <p class="text-danger" v-if="title">{{title}}</p>
      <span class="alert-close" @click="close">&times;</span>
    </div>
    <p>{{message.value}}</p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup(){
    const store = useStore()
    const TITLE_MAP = {
      primary:'Успешно!',
      danger:'Ошибка!',
      warning:'Внимание!',
    }
    const message = computed(()=> store.state.message)
    const title = computed(()=>message.value?TITLE_MAP[message.value.type]:null)
    return {
      message,
      title,
      close:()=>store.commit('clearMessage')
    }
  }
}
</script>

<style scoped>
.alert{
  display: flex;
  flex-direction: column;
}
.alert__block{
  display: flex;
  justify-content: space-between;
}
.text-danger{
  margin-right: 4px;
}
</style>