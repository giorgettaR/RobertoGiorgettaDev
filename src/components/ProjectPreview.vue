<template>
  <div :class="project.title" v-on:mouseover="hover(project.title)" v-on:mouseleave="leave(project.title)" class="projectPreview d-flex">
    <RouterLink :to="{ name: 'project', params: { slug: project.title }}">Dettagli</RouterLink>
    <h1>{{ project.title }}</h1>
    <div class="imgBox">
        <img :src="getImgPath(project.imagePreview)" alt="">
    </div>
    <p class="link" @click="openGitRepository()">Git Repository</p>
    <!-- <button @click="leave(project.title)" v-if="this.detailsOn">indietro</button> -->
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
              zIndex: 5,
              duration: 0.6,
            })
          }
        },
        leave(projecTitle){
          if (!this.detailsOn) {
            console.log(this.detailsOn)
            gsap.to(`.${projecTitle}`, {
              height: '100%',
              width: '30%',
              zIndex:  this.position,
              duration: 0.6,
            })
          }
        },
        openDetails() {
          this.detailsOn = true
          gsap.to(`.projectPreview`, {
            autoAlpha: 0,
            duration: 0.1,
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