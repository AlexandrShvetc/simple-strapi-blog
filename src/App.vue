<template>
  <div class="h-100" id="app">
    <div class="main_wrapper">
      <Nav/>
      <div id="app" class="container">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {Nav, Footer}
};
</script>

<style>
html, body {
  font-size: 18px;
}

a {
  text-decoration: none;
}

#category {
  font-family: Staatliches;
  font-weight: 500;
}

#title {
  letter-spacing: 0.4px;
  font-size: 22px;
  font-size: 1.375rem;
  line-height: 1.13636;
}

#banner {
  margin: 20px;
  height: 800px;
}

#editor {
  font-size: 16px;
  font-size: 1rem;
  line-height: 1.75;
}

.uk-navbar-container {
  background: #fff !important;
  font-family: Staatliches;
}

img:hover {
  opacity: 1;
  transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
