<template>
  <Navbar />
  <Footer />

  <div class="background bg-home"></div>
  <div class="container home">
    <div class="welcome">
        <h4>Benvenuto...</h4>
        <h4>Io sono Roberto</h4>
        <h4>in questo portale potrai esplorare i miei progetti...</h4>
        <h4>...e qualcosa in più</h4>
    </div>
    <div class="homeWrap d-flex d-wrap">
      <div class="avatar p-4">
        <img src="/img/avatar-home.jpg" alt="">
      </div>
      <div class="text p-4">
        <button @click="animation()" style="position:absolute">Animation</button>
        <div class="name d-flex justify-content-evenly">
          <div id="r">R</div>
          <div id="o">o</div>
          <div id="b">b</div>
          <div id="e">e</div>
          <div id="r2">r</div>
          <div id="t">t</div>
          <div id="o2">o</div>
        </div>

        <h2 id="subtitle">WEB DEVELOPER</h2>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { data } from '../data.js';
import { gsap } from 'gsap';

export default {

  data() {
    return {
      data
    }
  },        
  components: {
    Navbar,
    Footer
  },
  props: {

  },
  methods: {
    animation(){
      const tl = gsap.timeline()
      tl.from('h4', {
        duration: 1,
        autoAlpha: 0,
        duration: 2,
        stagger: 0.6
      })
      tl.addLabel('enter-name')

      tl.from('.welcome', {
        duration: 2,
        autoAlpha: 0,
        duration: 1,
      })
      tl.addLabel('name-arrived')
      tl.from('.avatar', {
        duration: 1,
        autoAlpha: 0,
        duration: 1,
      }, '<')


      // NAME
      tl.from('#r', {
        duration: 2,
        autoAlpha: 0,
        x: -550,
        y: -250,
        rotation: 500,
        fontSize: '200px',
      },'enter-name')
      tl.from('#o', {
        duration: 1,
        autoAlpha: 0,
        rotation: -500
      },'enter-name')
      tl.from('#b', {
        duration: 1,
        autoAlpha: 0,
        rotation: 500
      },'enter-name')
      tl.from('#e', {
        duration: 1,
        autoAlpha: 0,
        rotation: -500
      },'enter-name')
      tl.from('#r2', {
        duration: 1,
        autoAlpha: 0,
        rotation: 1
      },'enter-name')
      tl.from('#t', {
        duration: 1,
        autoAlpha: 0,
        rotation: -500
      },'enter-name')
      tl.from('#o2', {
        duration: 1,
        autoAlpha: 0,
        rotation: 500
      },'enter-name')
    },

  }
}
</script>

<style lang ="scss">

</style>