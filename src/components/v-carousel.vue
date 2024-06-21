<template>
  <Carousel>
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item"></div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Basic',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})

</script>

<style>
.carousel__item {
  min-height: 800px;
  width: 100%;
  background-image: url('../assets/drone-gallery-3.png');
  background-size: 100% 100%;
  background-repeat: no-repeat ;
  color: black;
  font-size: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  background: white;
  box-sizing: content-box;
  border: 5px solid white;
  border-radius: 10px;
  margin: 0 40px 0 40px;
}
</style>