<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">NORDIC ROSE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item nav-link active" v-for="category in categories.data" v-bind:key="category.id">
            <router-link
                :to="{ path: '/category/' + category.id }"
                :key="category.id"
            >
              {{ category.attributes.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

<!--    <nav class="uk-navbar-container" uk-navbar>-->
<!--      <div class="uk-navbar-left">-->
<!--        <ul class="uk-navbar-nav">-->
<!--          <li>-->
<!--            <a href="/">NORDIC ROSE</a>-->
<!--          </li>-->
<!--        </ul>-->
<!--      </div>-->

<!--      <div class="uk-navbar-right">-->
<!--        <ul class="uk-navbar-nav">-->

<!--        </ul>-->
<!--      </div>-->
<!--    </nav>-->
  </div>
</template>

<style scoped>
.navbar{
  color:#E6E6E6 ;
  border-bottom: 1px solid;
}
.navbar-collapse{
  justify-content: flex-end;
}
.router-link-exact-active {
  border-bottom: 4px solid;
  padding-bottom: 20px;
;
}
.nav-link{
font-size: 20px
}

</style>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: []
    };
  },
  apollo: {
    categories: gql`
query Categories{
categories {
  data {
    id
    attributes{
      title
    }
  }
}
}
    `
  }
};
</script>
