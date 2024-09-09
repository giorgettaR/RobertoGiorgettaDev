<template>
  <Navbar />
  <div class="background bg-home"></div>

  <div class="container home flex-column">
    <div class="row welcome">
      <div class="hero">
        <h1 class="col-12">Benvenuto...</h1>
        <h1 class="col-12">Io sono Roberto</h1>
        <div class="avatar p-4">
          <img src="/img/avatar-home.jpg" alt="">
        </div>
      </div>
      
      <h1 class="col-12">in questo portale</h1>
      <h1 class="col-12">potrai esplorare</h1>
      <h1 class="col-12">i miei progetti...</h1>
      <h1 class="col-12">...e qualcosa in più</h1>
    </div>



      <div class="text p-4">
        <button @click="animation()">Animation</button>
      </div>
  </div>
    
  
  

</template>


<script>
import Navbar from '../components/Navbar.vue';
import { data } from '../data.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

// gsap.to()

export default {

  data() {
    return {
      data
    }
  },        
  components: {
    Navbar,
  },
  props: {

  },
  methods: {
    animation(){
    },

  },
  mounted() {
    gsap.fromTo('.hero *', {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 2,
      stagger: 0.5
    })
  }
}
</script>

<style lang ="scss">

</style>