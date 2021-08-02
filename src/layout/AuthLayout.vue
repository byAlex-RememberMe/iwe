<template>
  <div>
    <app-message class="message"></app-message>
    <router-view></router-view>
  </div>
  
</template>

<script>
import AppMessage from '../components/ui/AppMessage.vue'
export default {
  components: { AppMessage },

}
</script>

<style scoped>
.message{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 23%;
}
@media (max-height: 899px){
  .message {
    top: 0;
    width: 100%;
  }
}
</style>