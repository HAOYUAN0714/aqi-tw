import Vue from 'vue';
import App from './App.vue';
import JudgeColor from './filter/judgeColor';

Vue.filter('juageColor', JudgeColor);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
