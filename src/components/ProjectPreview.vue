<template>
  <div :class="project.title" v-on:mouseover="hover(project.title)" v-on:mouseleave="leave(project.title)" class="projectPreview d-flex">
    <button @click="closeDetails(project.title)" v-if="this.detailsOn">indietro</button>
    <p class="link"  @click="openDetails(project.title)">Open Details</p><h1>{{ project.title }}</h1>
    <p class="link" @click="openGitRepository()">Git Repository</p><h1>{{ project.title }}</h1>
    <div class="imgBox">
        <img :src="getImgPath(project.imagePreview)" alt="">
    </div>
  
</div>
</template>

<script>
import { gsap } from 'gsap'



export default {
    props: {
      project: {
        type: Object,
        required: true
      },     
      position: {
        type: Number,
        required: true
      },
    },      
    
    data() {
        return {
          detailsOn: false
        }
    },
    methods:{
        openGitRepository(){
            window.open('https://github.com/giorgettaR/vue-boolzapp')
        },
        getImgPath(imgFile) {
                let imgPath = '/img/' + imgFile
                return imgPath;
        },
        hover(projecTitle){
          if (!this.detailsOn){
            gsap.to(`.${projecTitle}`, {
              width: '35%',
              height: '105%',
              duration: 0.6,
            })
          }
        },
        leave(projecTitle){
          if (!this.detailsOn) {
            gsap.to(`.${projecTitle}`, {
              height: '100%',
              width: '20%',
              duration: 0.6,
            })
          }
        },
        openDetails(projecTitle) {
          gsap.to(`.projectPreview`, {
            pointerEvents: 'none',
          })    
          this.detailsOn = true
          gsap.to(`.projectPreview`, {
            autoAlpha: 0,
            duration: 0.8,
          })          
          gsap.to(`.projectPreview`, {
            position: 'absolute',
            delay: 0.8,
          })
          gsap.to(`.${projecTitle}`, {
            pointerEvents: 'auto',
            position: 'static',
            autoAlpha: 1,
            height: '100%',
            width: '100%',
            delay: 0.8,
            duration: 1,
          })
        },
        closeDetails(projectTitle) {
          this.detailsOn = false
          gsap.to(`.projectPreview`, {
            pointerEvents: 'none',
          })  
          gsap.to(`.${projectTitle}`, {
            autoAlpha: 0,
            duration: 1,
          })
          gsap.set(`.projectPreview`, {
            position: 'static',
            delay: 1,
          })
          gsap.to(`.projectPreview`, {
            position: 'static',
            autoAlpha: 1,
            width: '20%',
            delay: 1.1,
            duration: 0.3,
            stagger: 0.5,
          })
          gsap.set(`.projectPreview`, {
            delay: 2.5,
            pointerEvents: 'auto',
          }) 
        },
    },
    mounted() {
      let slide = gsap.to(`.${this.slideIndex}`, {
                autoAlpha: 1,
                duration: 3,
                
            })
    }

    
}


</script>

<style lang ="scss">

</style>