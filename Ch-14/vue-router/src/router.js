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
    routes: [
        //注意！路徑設定如果同時匹配到，瀏覽器會先選擇第一個路徑
        {
            path: '/',
            component: App,
            children: [
                {
                    path: '/about',
                    component: About,
                    children: [
                        { path: '', component: AboutHome },
                        { path: 'us', component: AboutUs },
                        { path: 'you', component: AboutYou }
                    ]
                },
                //:id 後加問號代表「可有可無」
                {
                    path: '/products/:midasNum?',
                    component: Products,
                },
            ]
        },

    ],
});