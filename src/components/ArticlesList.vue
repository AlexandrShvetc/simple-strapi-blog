<template>
  <div>
    <div class="row" id="my-table">
      <div v-for="article in itemsForList"
           :key="article.id"
           class="col-12 col-md-6 d-flex justify-content-center">
        <router-link
            :to="{ path: '/article/' + article.id }"
        >
          <div>
            <img :src="api_url + article.attributes.image.data.attributes.url" alt="image" @error="errorImage">
            <p>{{ article.attributes.Title }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        align="center"
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      perPage: 4,
      currentPage: 1,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "https://cheapdeep-strapiblog.herokuapp.com",
      state: process.env.NODE_ENV
    };
  },
  props: {
    articles: {
      data: [{
        id: '',
        attributes: {
          Text: '',
          Title: '',
          image: {
            data: {
              attributes: {
                url: '',
              },
            },
          },
        },
      }],
    },
  },
  computed: {
    rows() {
      return this.articles.data.length-1
    },
    itemsForList() {
      const newArray = this.articles.data.slice(0, this.articles.data.length - 1)
      return newArray.slice(
          (this.currentPage - 1) * this.perPage,
          this.currentPage * this.perPage,
      );
      // return this.articles.data.slice(
      //     (this.currentPage - 1) * this.perPage,
      //     this.currentPage * this.perPage,
      // );
    }
  },
  methods: {
    errorImage( event ){
      event.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
      // console.clear();
    },

  },
};
</script>
<style scoped>
p {
  margin-top: 20px;
  margin-bottom: 60px;
}

a {
  text-align: center;
}
</style>