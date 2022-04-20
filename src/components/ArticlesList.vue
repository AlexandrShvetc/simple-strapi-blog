<template>
  <div>
    <div class="row">
      <router-link
          v-for="article in articles.data"
          :to="{ path: '/article/' + article.id }"
          class="uk-link-reset"
          :key="article.id"
      >
        <div class="col-6">
          <p>
            <!--                id="category"-->
            <!--                v-if="article.category"-->
            <!--                class="uk-text-uppercase"-->
            <!--              >-->
            <!--                {{ article.attributes.category.data.attributes.title}}-->
            <img :src="api_url + article.attributes.image.data[0].attributes.url" alt="">
          </p>

          <p><b>{{ article.attributes.Title }}</b></p>
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
    articles: {}
  },
  computed: {

  }
};
</script>
