<template>
  <div class="navBar p-2 d-flex align-items-center justify-content-around">
    <RouterLink
      id="home"
      v-on:mouseover="hoverLink('home')"
      v-on:mouseleave="leaveLink('home')"
      :to="{ name: 'home'}">
      Home
    </RouterLink>
    <RouterLink
      id="projects"
      v-on:mouseover="hoverLink('projects')"
      v-on:mouseleave="leaveLink('projects')"
      :to="{ name: 'projects'}" >
     {{ data.language == 'Italian' ? 'Progetti' : 'Projects'}}
    </RouterLink>
    <RouterLink
      id="mystory"
      v-on:mouseover="hoverLink('mystory')"
      v-on:mouseleave="leaveLink('mystory')"
      :to="{ name: 'mystory'}">
      {{ data.language == 'Italian' ? 'La Mia Storia' : 'Mystory'}}
    </RouterLink>
    <RouterLink
      id="contacts"
      v-on:mouseover="hoverLink('contacts')"
      v-on:mouseleave="leaveLink('contacts')"
      :to="{ name: 'contacts'}">
      {{ data.language == 'Italian' ? 'Contatti' : 'Contacts'}}
    </RouterLink>
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
    hoverLink(linkId) {
      gsap.to(`#${linkId}`, {
      scale: 1.3,
      color: 'rgb(39, 111, 204)',
      duration: 0.3
      })
    },
    leaveLink(linkId) {
      gsap.to(`#${linkId}`, {
      scale: 1,
      color: 'white',
      duration: 0.3
      })
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