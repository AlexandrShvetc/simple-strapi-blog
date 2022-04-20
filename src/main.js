import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";
import VueRouter from "vue-router";
import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';


import App from "./App.vue";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.min'
import './assets/css/main.css'

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            components: require("./containers/Articles.vue")
        },
        {
            path: "/article/:id",
            components: require("./containers/Article.vue")
        },
        {
            path: "/category/:id",
            components: require("./containers/Category.vue")
        }
    ]
});

new Vue({
    apolloProvider,
    router,
    render: h => h(App)
}).$mount("#app");
