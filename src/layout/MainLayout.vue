<template>
  <div >
    <the-navbar />
    <div>
      <app-message />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import AppMessage from "@/components/ui/AppMessage.vue";
export default {
  components: { TheNavbar, AppMessage, TheNavbar },
};
</script>

<style scopred>

</style>