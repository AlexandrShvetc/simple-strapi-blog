<template>
  <div>
    <h1> {{ posts1.data.attributes.Title }}</h1>
    <div class="d-flex justify-content-center mb-5">
      <img :src="api_url + posts1.data.attributes.image.data.attributes.url" alt="img" @error="errorImage">
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
              data: {
                attributes: {
                  url: '',
                },
              },
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
  methods: {
    errorImage( event ){
      event.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
      // console.clear();
    }
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
              comments{
                data{
                  id
                  attributes{
                    author{
                      data{
                        id
                        attributes{
                          NickName
                        }
                      }
                    }
                    Comment
                  }
                }
              }
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
<style scoped>
img {
  width: 100%;
}
</style>