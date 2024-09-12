<template>
  <div class="navBar p-2 d-flex align-items-center justify-content-around">
    <RouterLink :to="{ name: 'home'}">Home <span class="behind">Home</span></RouterLink>
    
    <RouterLink :to="{ name: 'projects'}" >{{ data.language == 'Italian' ? 'Progetti' : 'Projects'}}</RouterLink>
    <RouterLink :to="{ name: 'mystory'}">{{ data.language == 'Italian' ? 'La Mia Storia' : 'Mystory'}}</RouterLink>
    <RouterLink :to="{ name: 'contacts'}">{{ data.language == 'Italian' ? 'Contatti' : 'Contacts'}}</RouterLink>
    <button class="flag"
      v-on:mouseover="hoverFlag()"
      v-on:mouseleave="leaveFlag()"
      @click="data.languageToggle()">
        <img :src="getImgPath(data.flag)" alt="">
    </button>
  </div>
</template>

<script>
import { data } from '../data.js';
import { gsap } from 'gsap'
import SplitText from 'gsap-trial/SplitText';

gsap.registerPlugin(SplitText)

export default {

  data() {
    return {
      data
    }
  },
  props: {

  },
  methods: {
    getImgPath(imgFile) {
      let imgPath = '/img/' + imgFile
      return imgPath;
    },
    hoverFlag() {
      gsap.to('.flag', {
        scale: 1.4,
        duration: 0.3
      })
    },
    leaveFlag() {
      gsap.to('.flag', {
        scale: 1,
        duration: 0.3
      })
    }
  },
  mounted() {

  }
}
</script>

<style lang ="scss">

</style>