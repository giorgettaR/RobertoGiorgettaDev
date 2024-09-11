<template style="margin-bottom: 200px;">
  <Navbar />
  <div class="background bg-home"></div>

  <div class="container home flex-column" >
    <div class="hero">
      <div class="title">
        <h1 class="">
          Benvenuto 
          <font-awesome-icon :icon="['far', 'face-grin-beam']" />
        </h1>
      </div>
      <div class="title">
        <h1 class="">sono Roberto</h1>
      </div>
      <div class="title">
        <h1 class="">un Junior Web Developer</h1>
      </div>
      <div class="avatar p-4">
        <img src="/img/avatar-home.jpg" alt="">
      </div>
      <div class="arrows">
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
      </div>
    </div>
    <div class="nav">
      <span class="advice">
        continua a scorrere
        <font-awesome-icon :icon="['far', 'face-grin-wink']" />
      </span>
      <div class="slide start">
        <h1 class="">in questo portale</h1>
        <h1 class="">potrai</h1>
      </div>
      <div class="slide projects">
        <h1 class="">esplorare</h1>
        <h1 class="">i miei progetti</h1>
      </div>
      <div class="slide education">
        <h1 class="">informarti riguardo</h1>
        <h1 class="">la mia formazione</h1>
      </div>
      <div class="slide contacts">
        <h1 class="">entrare in</h1>
        <h1 class="">contatto con me</h1>
      </div>
    </div>
</div>
    
  
  

</template>


<script>
import Navbar from '../components/Navbar.vue';
import { data } from '../data.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {

  data() {
    return {
      data,
      endPage: false
    }
  },        
  components: {
    Navbar,
  },
  props: {

  },
  methods: {
    arrowsAnimation(){
      const tl = gsap.timeline({
        repeat: -1,
      })
      tl.set('.arrows *', {
          autoAlpha: 0,
          y: -50,
        })
        .to('.arrows *', {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1
        })
        .to('.arrows *', {
          autoAlpha: 0,
          y: 50,
          stagger: 0.1
        })
    },

  },
  mounted() {
    const tl = gsap.timeline()
    tl.from('.slide.start', {
        autoAlpha: 0,
        x: -100,
      })
      .to('.slide.start', {
        autoAlpha: 0,
        x: 50,
      })
      .from('.slide.projects', {
        autoAlpha: 0,
        x: 100,
      })
      .to('.slide.projects', {
        autoAlpha: 0,
        x: -50,
      })
      .from('.slide.education', {
        autoAlpha: 0,
        x: -100,
      })
      .to('.slide.education', {
        autoAlpha: 0,
        x: 50,
      })
      .from('.slide.contacts', {
        autoAlpha: 0,
        x: 100,
      })
      .to('.slide.contacts', {
        autoAlpha: 0,
        x: -50,
      })

    ScrollTrigger.create({
      animation: tl,
      trigger: '.nav',
      scrub: 2,
      start: 'center center',
      end:'+=6000',
      pin: true,
      pinSpacing: true
    })

    gsap.fromTo(['.title','.avatar'], {
      autoAlpha: 0,
    }, {
      autoAlpha: 1,
      duration: 2,
      stagger: 0.5,
      onComplete: () => {this.arrowsAnimation()},
    })
  }
}
</script>

<style lang ="scss">

</style>