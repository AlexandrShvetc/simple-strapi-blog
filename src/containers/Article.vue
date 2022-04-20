<template>
  <div>
    <h1> {{ posts1.data.attributes.Title }}</h1>
    <div class="d-flex justify-content-center mb-5">
      <img :src="api_url + posts1.data.attributes.image.data[0].attributes.url" alt="img">
    </div>
    <div class="col-8 m-auto">
      <p>{{ posts1.data.attributes.Text }}</p>
    </div>
  </div>
</template>

<script>
// const moment = require("moment");
// import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";

export default {
  data() {
    return {
      posts1: {
        data: {
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
        },
      },
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
