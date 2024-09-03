<template>
  <Navbar />
  <div class="container home">
    <div class="row">
      <div class="col-12">
        <button @click="animation()">Animation</button>
        <img src="" alt="">
        <h1 id="title">Roberto Giorgetta</h1>
        <h2 id="subtitle">WEB DEVELOPER</h2>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue';
import { data } from '../data.js';
import { gsap } from 'gsap';

export default {

  data() {
    return {
      data
    }
  },        
  components: {
    Navbar
  },
  props: {

  },
  methods: {
    animation(){
      const tl = gsap.timeline()

      tl.from('#title', {
        duration: 1,
        autoAlpha: 0,
        y: 150,

      })
      tl.from('#subtitle', {
        duration: 1,
        autoAlpha: 0,
        y: 150,
        
      })
    },

  }
}
</script>

<style lang ="scss">

</style>