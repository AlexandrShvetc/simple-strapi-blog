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
    <div class="what-read">
      <h2>What to read next</h2>
      <div class="row">
        <div v-for="post in postsArray" :key="post.id"
             class="col-4 text-center">
          <router-link :to="{ path: '/article/' + post.id }" @click.native="scrollToTop">
            <img :src="api_url + post.attributes.image.data.attributes.url" alt="image">
            <p>{{ post.attributes.Title }}</p>
          </router-link>
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
// import apolloClient from "@/vue-apollo";

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
      alternativePost: {},
      api_url: process.env.VUE_APP_STRAPI_API_URL || "https://cheapdeep-strapiblog.herokuapp.com",
      currentId: this.$route.params.id,
    };
  },
  mounted() {
    // this.getData()
  },
  components: {},
  computed: {
    myImage() {
      return faker.image.avatar()
    },
    postsArray() {
      return this.posts1.data.attributes.category.data.attributes.posts.data.filter(post => post.id !== this.currentId)
    },
  },
  methods: {
    errorImage(event) {
      event.target.src = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    // async getData() {
    //   const request = apolloClient => apolloClient
    //       .query({
    //         query: gql`
    //     query Posts {
    //       posts1(id: ${this.currentId}){
    //       data{
    //         id
    //         attributes{
    //           Text
    //           Title
    //           category{
    //             data{
    //               id
    //               attributes{
    //                 posts{
    //                   data{
    //                     id
    //                     attributes{
    //                       Title
    //                       image{
    //                         data{
    //                           attributes{
    //                             url
    //                           }
    //                         }
    //                       }
    //                     }
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //           comments{
    //             data{
    //               id
    //               attributes{
    //                 author{
    //                   data{
    //                     id
    //                     attributes{
    //                       NickName
    //                     }
    //                   }
    //                 }
    //                 Comment
    //               }
    //             }
    //           }
    //           image{
    //             data{
    //               attributes{
    //                 url
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //     }
    //   `,
    //       })
    //
    //   const response = await request(apolloClient);
    //   this.alternativePost = await response;
    //   console.log(await response);
    //   this.posts1 = await this.alternativePost.data.posts1
    // },
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
                  id
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

.what-read {
  margin-top: 60px;
}

.what-read h2 {
  text-align: center;
  border-top: 2px solid #000000;
  padding: 40px 0;
}

.what-read p {
  margin-top: 20px;
}

@media (max-width: 576px) {
  .author {
    border-right: none;
  }
}
</style>