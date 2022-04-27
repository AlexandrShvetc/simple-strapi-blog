<template>
  <div>
    <b-navbar id="nav" class="navbar" toggleable="lg">
      <b-navbar-brand href="/">NORDIC ROSE</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <ul class="navbar-nav">
            <li v-for="category in categories.data" v-bind:key="category.id" class="nav-item nav-link active">
              <router-link
                  :key="category.id"
                  :to="{ path: '/category/' + category.id }"
              >
                {{ category.attributes.title }}
              </router-link>
            </li>
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.shadow-my {
  box-shadow: 0 0.1rem 0.5rem rgb(0 0 0 / 15%);
}

.navbar {
  color: #E6E6E6;
  border-bottom: 1px solid;
  position: fixed;
  z-index: 2;
  background: #ffffff;
  width: 100%;
  padding: 10px 20px;
  left: 0;
  top: 0 ;
  transition: 0.5s;
}

.navbar-collapse {
  justify-content: flex-end;
}

.router-link-exact-active {
  border-bottom: 4px solid;
  padding-bottom: 20px;;
}

.nav-link {
  font-size: 20px
}

@media (max-width: 991px) {
  .router-link-exact-active {
    border-bottom: none;
    padding-bottom: 0;
    color: #757575;
  }

  .navbar-nav {
    align-items: center;
  }
}
</style>

<script>
import gql from "graphql-tag";

export default {
  name: "Nav",
  data() {
    return {
      categories: [],
      isActive: false,
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
  },
  created() {
    this.myShadowListener()
  },
  methods: {
    myShadowListener() {
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav')
        if (window.scrollY > 40)
          nav.classList.add('shadow-my')
        else
          nav.classList.remove('shadow-my')
      })
    },
  },
};
</script>
