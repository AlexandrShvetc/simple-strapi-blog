<template>
  <div>
    <p><b> {{ posts1.data.attributes.Title }}</b></p>
    {{ posts1.data.attributes.Text }}
    <img :src="api_url + posts1.data.attributes.image.data[0].attributes.url" alt="img">
<!--    <div-->
<!--      v-if="article.image"-->
<!--      id="banner"-->
<!--      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"-->
<!--      :data-src="api_url + article.image.url"-->
<!--      uk-img-->
<!--    >-->
<!--      <h1>{{ article.title }}</h1>-->
<!--    </div>-->

<!--    <div class="uk-section">-->
<!--      <div class="uk-container uk-container-small">-->
<!--        <vue-markdown-it-->
<!--          v-if="article.content"-->
<!--          :source="article.content"-->
<!--          id="editor"-->
<!--        />-->
<!--        <p v-if="article.published_at">-->
<!--          {{ moment(article.published_at).format("MMM Do YY") }}-->
<!--        </p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
// const moment = require("moment");
// import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      posts1: [],
      // moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL || "https://cheapdeep-strapiblog.herokuapp.com",
      currentId: this.$route.params.id,
    };
  },
  components: {
    // VueMarkdownIt
  },
  apollo: {
    posts1: {
      query: gql`
        query Posts($id: ID!) {
          posts1(id: $id){
          data{
            id
            attributes{
              Text
              Title
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
        }
      `,
      variables() {
        return {
          id: this.currentId,
        }
      }
    }
  },
};
</script>
