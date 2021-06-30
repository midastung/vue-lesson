import VueRouter from "vue-router";
import Vue from "vue";

import App from "./App.vue";
import Products from "./Products.vue";
import About from "./About.vue";
import AboutUs from "./AboutUs.vue";
import AboutYou from "./AboutYou.vue";
import AboutHome from "./AboutHome.vue";

Vue.use(VueRouter);
//定義new VueRouter，傳入一物件--routes屬性，其中為陣列
export default new VueRouter({
    mode: 'hash', //帶井字號
    // mode: 'history',
    routes: [
        //注意！路徑設定如果同時匹配到，瀏覽器會先選擇第一個路徑
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '/about',
                    alias: 'helloworld',
                    component: About,
                    children: [
                        { path: '', component: AboutHome },
                        //寫一個代表路徑的名稱
                        // { path: 'us', name:'us', component: AboutUs },
                        // { path: 'you', component: AboutYou }
                        { path: 'us', component: AboutUs },
                        { path: 'you', component: AboutYou },
                        //components為複數
                        {
                            path: 'both',
                            // 根目錄下的2，絕對路徑
                            // alias: '/2',
                            // 也可以寫成陣列，絕對路徑'/2', 相對路徑'/about/2','/about/3'
                            alias: ['/2', '2', '3'],
                            components: {
                                default: AboutUs,
                                another: AboutYou,
                            }
                        },
                    ],
                },
                //:id 後加問號代表「可有可無」
                {
                    path: '/products/:id?',
                    name: 'home',
                    component: Products,
                    props: (route) => {
                        return {
                            id: route.params.id,
                        }
                    },
                }
            ]
        },

    ],
});