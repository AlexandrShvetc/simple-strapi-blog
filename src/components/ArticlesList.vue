<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="article in articles.data"
          :to="{ path: '/article/' + article.id }"
          class="uk-link-reset"
          :key="article.id"
        >
          <div class="uk-card uk-card-muted">
            <div class="uk-card-body">
              <p>
<!--                id="category"-->
<!--                v-if="article.category"-->
<!--                class="uk-text-uppercase"-->
<!--              >-->
<!--                {{ article.attributes.category.data.attributes.title}}-->
              </p>
              <p><b>{{ article.attributes.Title }}</b></p>
            </div>
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
      api_url: process.env.VUE_APP_STRAPI_API_URL || "http://localhost:1337",
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
