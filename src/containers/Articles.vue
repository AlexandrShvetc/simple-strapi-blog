<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog</h1>

        <ArticlesList :articles="posts"></ArticlesList>
      </div>
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
      posts: []
    };
  },
  apollo: {
    posts: gql`
      query Articles {
        posts{
          data{
            id
            attributes{
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
