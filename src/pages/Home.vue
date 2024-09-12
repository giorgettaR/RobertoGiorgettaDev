<template style="margin-bottom: 200px;">
  <Navbar />
  <div class="background bg-home"></div>

  <div class="container home" >
    <div class="hero">
      <div class="title">
        <h1 class="">
          {{ data.language == 'Italian' ? 'BENVENUTO' : 'WELCOME'}} 
          <font-awesome-icon :icon="['far', 'face-grin-beam']" />
        </h1>
      </div>
      <div class="title">
        <h1 class="">{{ data.language == 'Italian' ? 'sono ROBERTO' : `I'm ROBERTO`}}</h1>
      </div>
      <div class="title">
        <h1 class="">{{ data.language == 'Italian' ? 'un Jr Web Developer' : 'a Jr Web Developer'}}</h1>
      </div>
      <div class="avatar">
        <img src="/img/avatar-home.jpg" alt="">
      </div>
      <div class="arrows">
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
      </div>
    </div>
    <div class="nav">
      <div v-if="!this.endPage" class="advice">
        {{ data.language == 'Italian' ? 'continua a scorrere' : 'keep scrolling'}}
        <font-awesome-icon :icon="['far', 'face-grin-wink']" />
      </div>
      <div class="slide start">
        <h1 class="">{{ data.language == 'Italian' ? 'in questo portale' : 'in this website'}}</h1>
        <h1 class="">{{ data.language == 'Italian' ? 'potrai' : 'you can'}}</h1>
      </div>
      <div class="slide projects">
        <RouterLink :to="{ name: 'projects'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'esplorare' : 'explore'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'i miei progetti' : 'my projects'}}</h1>
        </RouterLink>
      </div>
      <div class="slide education">
        <RouterLink :to="{ name: 'mystory'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'informarti riguardo' : 'learn about'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'la mia formazione' : 'my education'}}</h1>
        </RouterLink>
      </div>
      <div class="slide contacts">
        <RouterLink :to="{ name: 'contacts'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'entrare in contatto' : 'contact me'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'con me' : ''}}</h1>
        </RouterLink>
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
    // ANIMAZIONE FRECCE
    arrowsAnimation(){
      const tl = gsap.timeline({
        repeat: -1,
      })
      tl.set('.arrows *', {
          autoAlpha: 0,
          y: -100,
        })
        .to('.arrows *', {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1
        })
        .to('.arrows *', {
          autoAlpha: 0,
          y: 100,
          stagger: 0.1
        })
    },

  },
  mounted() {

    gsap.registerEffect({
      name: 'fadeIn',
      effect: (targets, config) => {
        return gsap.from(targets, {
          autoAlpha: 0,
          x: config.x,
          y: config.y,
          duration: config.duration,
          stagger: config.stagger,
          onComplete: config.onComplete
        })
      },
      defaults: { x: 0, y: 0, stagger: 1, duration: 1, onComplete: ()=>{}},
      extendTimeline: true,
    })

    gsap.registerEffect({
      name: 'fadeOut',
      effect: (targets, config) => {
        return gsap.to(targets, {
          autoAlpha: 0,
          x: config.x,
          y: config.y,
          duration: 1,
          onComplete: config.onComplete
        })
      },
      defaults: { x: 0, y: 0, onComplete: ()=>{}},
      extendTimeline: true,
    })

    
    const tl = gsap.timeline()
    tl.fadeIn('.slide.start', { x: -100})
      .fadeOut('.slide.start', { x: 100 })
      tl.addLabel('projects')
      .fadeIn('.slide.projects', { x: 100})
      .fadeOut('.slide.projects', { x: -100 })
      tl.addLabel('education')
      .fadeIn('.slide.education', { x: -100})
      .fadeOut('.slide.education', { x: 100 })
      tl.addLabel('contacts')
      .fadeIn('.slide.contacts', { x: 100, onComplete: ()=> {this.endPage=true}})
      .fadeOut('.slide.contacts', { x: -100 })

    ScrollTrigger.create({
      animation: tl,
      trigger: '.nav',
      scrub: 2,
      start: 'center center',
      end:'+=9000',
      pin: true,
      pinSpacing: true
    })

    gsap.effects.fadeIn(['.title','.avatar'], {
      stagger: 0.5,
      onComplete: () => {this.arrowsAnimation()},
    })
  }
}
</script>

<style lang ="scss">

</style>