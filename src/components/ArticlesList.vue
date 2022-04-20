<template>
  <div>
    <h1>All articles</h1>
    <div class="row">
      <router-link
          v-for="article in articles.data"
          :key="article.id"
          :to="{ path: '/article/' + article.id }"
          class="col-6 article-list-center"
      >
        <div>
          <img :src="api_url + article.attributes.image.data[0].attributes.url" alt="image">
          <p>{{ article.attributes.Title }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
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
            data: [{
              attributes: {
                url: '',
              },
            }],
          },
        },
      }],
    },
  },
  computed: {}
};
</script>
<style scoped>
h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 700;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 40px;
}

.article-list-center:nth-child(odd) {
  display: flex;
  justify-content: flex-end;
}
</style>