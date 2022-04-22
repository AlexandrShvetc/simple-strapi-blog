<template>
  <div >
    <nav id="nav" class="navbar navbar-expand-lg navbar-light">
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
  },
  created() {
    this.myShadowListener()
  },
  methods: {
    myShadowListener(){
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav')
        if(window.scrollY > 40)
          nav.classList.add('shadow-my')
        else
          nav.classList.remove('shadow-my')
      })
    },
  },
};
</script>
