import {createApp} from 'vue'
import App from '/App.vue'
import VueCarousel from '@chenfengyuan/vue-carousel';


const app = createApp(App);

createApp(app).mount('#app');
app.component(VueCarousel.name, VueCarousel);