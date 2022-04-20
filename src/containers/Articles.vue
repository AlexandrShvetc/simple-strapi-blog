<template>
  <div>
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
<style>
h1 {
  font-size: 3rem;
  line-height: 4rem;
  font-weight: 700;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 40px;
}
</style>
