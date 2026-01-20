<template>
  <div>
    <h1 class="text-3xl font-bold mb-6">Všetky objednávky</h1>
    <OrdersTable />
  </div>
</template>
<script>
import OrdersTable from "../components/OrdersTable.vue";
export default { name: "OrdersView", components: { OrdersTable } };
</script>
