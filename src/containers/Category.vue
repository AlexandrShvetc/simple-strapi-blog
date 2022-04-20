<template>
  <div class="uk-container uk-container-large">
    <h1>{{ category.data.attributes.title }}</h1>
    <ArticlesList :articles="myCategory || []"></ArticlesList>
  </div>
</template>

<script>
import ArticlesList from "../components/ArticlesList";
import gql from "graphql-tag";

export default {
  data() {
    return {
      category: {
        data: {
          id:'',
          attributes: {
            title: '',
            posts: {
              data: [{
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
        },
      },
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
      query: gql`
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
