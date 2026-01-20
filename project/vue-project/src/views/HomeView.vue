<template>
  <div>
    <h1 class="container">Vitajte v AutoServis!</h1>

    <div class="container">
      <ServiceCard
        v-for="s in sluzby"
        :key="s.id"
        :sluzba="s"
      />
    </div>

    <OrderForm />
    <OrdersTable />
  </div>
</template>

<script>
import ServiceCard from "../components/ServiceCard.vue";
import OrderForm from "../components/OrderForm.vue";
import OrdersTable from "../components/OrdersTable.vue";
import { useOrderStore } from "../stores/orderStore";

export default {
  name: "HomeView",
  components: {
    ServiceCard,
    OrderForm,
    OrdersTable
  },
  data() {
    return {
      store: useOrderStore()
    };
  },
  computed: {
  sluzby() {
    return this.store.sluzby.slice(0, 1);
    }
  }
};
</script>
