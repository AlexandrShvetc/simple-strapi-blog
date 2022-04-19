<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ category.name }}</h1>

        <ArticlesList :articles="myCategory || []"></ArticlesList>
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: [],
      array: [],
      currentId: this.$route.params.id,
    };
  },
  components: {
    ArticlesList
  },
  computed: {
    myCategory() {
      return this.category.data.attributes.posts
    },
  },
  apollo: {
    category: {
      query: gql `
      query Categories($id: ID!){
      category(id: $id) {
         data {
         id
         attributes{
              title
                    posts{
                        data{
                          id
                          attributes{
                            Text
                            Title
                          }
                        }
                      }
              }
         }
      }
      }`,
      variables() {
        return {
          id: this.currentId,
        }
      }
    }
  },

};
</script>
