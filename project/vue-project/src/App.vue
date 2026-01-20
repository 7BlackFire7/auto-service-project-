<template>
  <div class="app-container">
    <Navbar />
    <main class="app-main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #121212;
  color: #f5f5f5;
}

.app-main {
  flex: 1;
}
</style>
