<template>
  <div>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6">Naše služby</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard
          v-for="s in sluzby"
          :key="s.id"
          :sluzba="s"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue";
import { useOrderStore } from "../stores/orderStore";

export default {
  name: "ServicesView",
  components: {
    ServiceCard
  },
  data() {
    return {
      store: useOrderStore()
    };
  },
  computed: {
    sluzby() {
      return this.store.sluzby;
    }
  }
};
</script>
