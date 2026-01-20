<template>
  <form
    @submit.prevent="odoslatObjednavku"
    class="form max-w-md mx-auto"
  >
    <input
      v-model="meno"
      placeholder="Meno"
      class="input"
    />

    <input
      v-model="auto"
      placeholder="Model auta"
      class="input"
    />

    <select v-model="sluzba" class="input">
      <option disabled value="">Vyberte službu</option>
      <option
        v-for="s in sluzby"
        :key="s.id"
        :value="s.nazov"
      >
        {{ s.nazov }}
      </option>
    </select>

    <p v-if="error" class="text-red-500 text-sm mt-2">
      Vyplňte všetky polia
    </p>

    <button
      type="submit"
      class="button mt-4"
      :disabled="!isValid"
    >
      Odoslať objednávku
    </button>
  </form>
</template>

<script>
import { useOrderStore } from "../stores/orderStore";

export default {
  name: "OrderForm",
  data() {
    return {
      meno: "",
      auto: "",
      sluzba: "",
      error: false,
      store: useOrderStore()
    };
  },
  computed: {
    sluzby() {
      return this.store.sluzby;
    },
    isValid() {
      return this.meno && this.auto && this.sluzba;
    }
  },
  methods: {
    odoslatObjednavku() {
      if (!this.isValid) {
        this.error = true;
        return;
      }

      this.store.pridajObjednavku({
        meno: this.meno,
        auto: this.auto,
        sluzba: this.sluzba
      });

      this.meno = "";
      this.auto = "";
      this.sluzba = "";
      this.error = false;
    }
  }
};
</script>
