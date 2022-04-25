<template>
  <div>
    <h1> {{ posts1.data.attributes.Title }}</h1>
    <div class="d-flex justify-content-center mb-5">
      <img :src="api_url + posts1.data.attributes.image.data.attributes.url" alt="img" @error="errorImage">
    </div>
    <div class="col-10 post-text">
      <p>{{ posts1.data.attributes.Text }}</p>
    </div>
    <div class="comments-block">
      <div v-for="comment in posts1.data.attributes.comments.data" :key="comment.id" class="comments row">
        <div class="col-sm-3 col-12 author">
          <img :src="myImage" alt="12">
          <h5>{{ comment.attributes.author.data.attributes.NickName }}</h5>
        </div>
        <div class="col-sm-9 col-12 comment">
          <p>{{ comment.attributes.Comment }}</p>
        </div>
      </div>
    </div>
    <div>
      <div v-for="post in posts1.data.attributes.category.data.attributes.posts.data" :key="post">
        <div v-if="post.id !== currentId">
          <p>{{post.attributes.Title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const moment = require("moment");
// import VueMarkdownIt from "vue-markdown-it";
import gql from "graphql-tag";
import {faker} from '@faker-js/faker';

export default {
  data() {
    return {
      posts1: {
        data: {
          attributes: {
            category: {
              data: {
                attributes: {
                  posts: {
                    data: [{
                      id: '',
                      attributes: {
                        Title: '',
                        image: {
                          data: {
                            attributes: {
                              url: '',
                            },
                          },
                        },
                      },
                    }],
                  },
                },
              },
            },
            Text: '',
            Title: '',
            image: {
              data: {
                attributes: {
                  url: '',
                },
              },
            },
            comments: {
              data: [{
                attributes: {
                  Comment: '',
                  author: {
                    data: {
                      id: '',
                      attributes: {
                        NickName: '',
                      },
                    },
                  },
                },
                id: '',
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
  components: {},
  computed: {
    myImage() {
      return faker.image.avatar()
    },
  },
  methods: {
    errorImage(event) {
      event.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
      // console.clear();
    },
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
              category{
                data{
                  attributes{
                    posts{
                      data{
                        id
                        attributes{
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

.comments-block {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}

.post-text {
  margin: 40px auto;
}

.comments:not(:last-child) {
  border-bottom: 1px dashed #000000;
}

.comments h5, p {
  margin: 0;
}

.author {
  border-right: 1px dashed #000000;
  padding: 10px;
}

.author img {
  width: 100px;
  max-width: 100%;
  float: left;
  margin-right: 10px;
}

.comment {
  padding: 10px;
}

@media (max-width: 576px) {
  .author {
    border-right: none;
  }
}
</style>