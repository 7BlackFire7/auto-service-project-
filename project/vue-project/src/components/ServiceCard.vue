<template>
  <div class="service-card">
    <div class="image-wrapper">
      <img
        v-if="sluzba.image"
        :src="sluzba.image"
        :alt="sluzba.nazov"
      />
    </div>

    <h3 class="font-bold text-lg">{{ sluzba.nazov }}</h3>
    <p class="text-sm text-gray-300">{{ sluzba.popis }}</p>
    <p class="text-blue-400 font-semibold mt-2">
      {{ sluzba.cena }} €
    </p>
  </div>
</template>


<script>
export default {
  name: "ServiceCard",
  props: {
    sluzba: {
      type: Object,
      required: true
    }
  }
};
</script>
