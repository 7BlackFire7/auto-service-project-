<template>
  <header class="navbar">
    <div class="navbar__container">
      <div class="navbar__logo">AutoServis</div>

      <nav class="navbar__menu">
        <router-link to="/" class="navbar__link">Domov</router-link>
        <router-link to="/services" class="navbar__link">Služby</router-link>
        <router-link to="/orders" class="navbar__link">Objednávky</router-link>
        <router-link to="/contact" class="navbar__link">Kontakt</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
