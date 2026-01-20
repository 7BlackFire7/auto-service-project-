<template>
  <table class="table">
    <thead>
      <tr class="bg-gray-200">
        <th class="border p-2">Meno</th>
        <th class="border p-2">Auto</th>
        <th class="border p-2">Služba</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="objednavky.length === 0">
        <td colspan="3" class="p-2 text-center text-gray-500">
          Žiadne objednávky
        </td>
      </tr>
      <tr
        v-for="objednavka in objednavky"
        :key="objednavka.id"
      >
        <td class="border p-2">{{ objednavka.meno }}</td>
        <td class="border p-2">{{ objednavka.auto }}</td>
        <td class="border p-2">{{ objednavka.sluzba }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useOrderStore } from "../stores/orderStore";

export default {
  name: "OrdersTable",
  data() {
    return {
      store: useOrderStore()
    };
  },
  computed: {
    objednavky() {
      return this.store.objednavky;
    }
  }
};
</script>
