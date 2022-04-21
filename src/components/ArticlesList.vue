<template>
  <div>
    <div class="row">
      <div v-for="article in articles.data"
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
  methods: {
    errorImage( event ){
      event.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
      // console.clear();
    }
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