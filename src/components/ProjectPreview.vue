<template>
  <div
  class="projectPreview flex-column align-items-center justify-content-evenly"
  :class="project.title"
  v-on:mouseover="hover(project.title)"
  v-on:mouseleave="leave(project.title)"
  >
    <div class="title p-2">{{ project.title }}</div>

    <button class="details" 
      v-if="!this.detailsOn"
      @click="openDetails(project.title);
      $emit('toggleDetails')">
      {{ data.language == 'Italian' ? 'Dettagli' : 'Details'}}
    </button>

    <div class="technologies">
      <div class="tech" :class="tech" v-for="tech in project.technologies">
        <img :src="getImgPathSvg(tech)" alt="">
      </div>
    </div>

    <button class="link" 
      @click="openGitRepository()"
      v-if="this.detailsOn">
      Git Repository
    </button>
    <div class="imgBox"
      v-if="this.detailsOn">
      <img :src="getImgPath(project.imagePreview)" alt="">
    </div>
    <div class="description"
      v-if="this.detailsOn">
      <p>{{ data.language == 'Italian' ? project.description[0] : project.description[1] }}</p>
    </div>
    <button
      v-if="this.detailsOn" 
      @click="closeDetails(project.title); 
      $emit('toggleDetails')">
      {{ data.language == 'Italian' ? 'Indietro' : 'Go back'}}
    </button>

  
</div>
</template>

<script>
import { gsap } from 'gsap'
import { data } from '../data.js';



export default {
    props: {
      project: {
        type: Object,
        required: true
      },     

    },      
    
    data() {
        return {
          detailsOn: false,
          data
        }
    },
    methods:{
        animationWhole() {
          gsap.fromTo(`.title`,{
            autoAlpha: 0,
            x: -200
          },{
            autoAlpha: 1,
            x: 0,
            duration: 1
          })
          gsap.fromTo(`.details`,{
            autoAlpha: 0,
          },{
            autoAlpha: 1,
            duration: 1
          })
          gsap.to(`.tech`,{
              rotation: 360,
              duration: 1,
              stagger: 0.1,
          })
        },
        animationTechs(projecTitle){
          const rotate = gsap.timeline()
          rotate.set(`.${projecTitle} .tech`,{
              rotation: 0,
          })
          rotate.to(`.${projecTitle} .tech`,{
              rotation: 360,
              duration: 1,
              stagger: 0.1,
          })
        },
        openGitRepository(){
            window.open('https://github.com/giorgettaR/vue-boolzapp')
        },
        getImgPath(imgFile) {
                let imgPath = '/img/' + imgFile
                return imgPath;
        },
        getImgPathSvg(imgFile) {
                let imgPath = '/img/' + imgFile + '.svg'
                return imgPath;
        },
        hover(projectTitle){
          if (!this.detailsOn){
            this.animationTechs(projectTitle)
              gsap.to(`.${projectTitle}`, {
                scale: 1.2,
                duration: 0.2,
              })
          }
        },
        leave(projectTitle){
          if (!this.detailsOn) {
              gsap.to(`.${projectTitle}`, {
                scale: 1,
                duration: 0.2,
              })
          }
        },
        openDetails(projectTitle) {
          const tl = gsap.timeline()
          tl.to([`.projectPreview`,'.projectsNav'], {
            autoAlpha: 0,
            x: -250,
            height: 0,
            duration: 0.3,
          })
          tl.set([`.projectPreview`, 'projectsNav'], {
              display: 'none'
          })
          tl.set(`.${projectTitle}`, {
            display: 'flex',
            x: 0,
            aspectRatio: 'unset',
            onComplete: () => {this.detailsOn = true}
          })
          tl.to(`.${projectTitle}`, {
            autoAlpha: 1,
            height: 'fit-content',
            width:'80%',
            duration: 0.3,
          })
        },
        closeDetails(projectTitle) {
        },
    },
    mounted() {
      this.animationWhole()
    }
}


</script>

<style lang ="scss">

</style>