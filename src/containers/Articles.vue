<template>
  <div>
    <div class="main-post">
      <h1>{{ createdAt.attributes.Title }}</h1>
      <div>
        <img :src="api_url + createdAt.attributes.image.data.attributes.url" alt="img">
      </div>
      <!--      {{ posts.data[posts.data.length-1].attributes.image.data }}-->
    </div>
    <div>
      <h1>All articles</h1>
      <ArticlesList :articles="posts"></ArticlesList>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList.vue";
import gql from "graphql-tag";

export default {
  components: {
    ArticlesList
  },
  data() {
    return {
      posts: {
        data: [{
          id: '',
          attributes: {
            Text: '',
            Title: '',
            createdAt: '',
            image: {
              data: {
                attributes: {
                  url: '',
                },
              },
            },
            category: {
              data: {
                attributes: {
                  title: '',
                },
              },
            },
          },
        }],
      },
      api_url: process.env.VUE_APP_STRAPI_API_URL || "https://cheapdeep-strapiblog.herokuapp.com",
    };
  },
  computed: {
    createdAt() {
      let localLength = this.posts.data.length
      return this.posts.data[localLength - 1]
    },
  },
  apollo: {
    posts: gql`
      query Articles {
        posts(sort: "createdAt"){
          data{
            id
            attributes{
              createdAt
              Title
              Text
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
              category{
                data{
                  id
                  attributes{
                  title
                  }
                }
              }
            }
          }
        }
      }
    `
  }
};
</script>
<style>
h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 700;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 40px;
}

.main-post {
  margin-top: 100px
}
</style>