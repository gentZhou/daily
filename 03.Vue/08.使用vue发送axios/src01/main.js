import Vue from 'vue'

import App from './App.vue'
import store from './store'

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    //注入store,所有组件实例对象就能通过this.$store直接访问
    store
}).$mount('#app');