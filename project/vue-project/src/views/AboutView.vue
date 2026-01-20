<template>
  <div>
    <main class="page-container">
      <h1 class="page-title">Наши услуги</h1>

      <ServicesGrid />
    </main>
  </div>
</template>

<script>
import ServicesGrid from "../components/ServicesGrid.vue";

export default {
  name: "ServicesView",
  components: {
    ServicesGrid
  }
};
</script>
