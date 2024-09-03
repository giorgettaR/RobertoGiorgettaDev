<template>
  <div :class="project.title" v-on:mouseover="hover(project.title)" v-on:mouseleave="leave(project.title)" class="projectPreview d-flex">
    <button @click="closeDetails(project.title); $emit('toggleDetails')" v-if="this.detailsOn">indietro</button>
    <h1>{{ project.title }}</h1>
    <p class="link"  @click="openDetails(project.title); $emit('toggleDetails')">Open Details</p>
    <p class="link" @click="openGitRepository()">Git Repository</p>
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
              height: '300px',
              width: '300px',
              duration: 0.2,
            })
          }
        },
        leave(projecTitle){
          if (!this.detailsOn) {
            gsap.to(`.${projecTitle}`, {
              height: '250px',
              width: '250px',
              duration: 0.2,
            })
          }
        },
        openDetails(projecTitle) {
          this.detailsOn = true
          const tl = gsap.timeline()
          tl.set(`.projectPreview`, {
            pointerEvents: 'none',
          })    
          tl.to(`.projectPreview`, {
            autoAlpha: 0,
            duration: 0.3,
          })          
          tl.set(`.projectPreview`, {
            position: 'absolute',
          })
          tl.set(`.projectsWrap`, {
            height: '500px',
          })
          tl.set(`.${projecTitle}`, {
            pointerEvents: 'auto',
          })  
          tl.to(`.${projecTitle}`, {
            position: 'static',
            autoAlpha: 1,
            height: '100%',
            width: '100%',
            duration: 0.3,
          })
        },
        closeDetails(projectTitle) {
          this.detailsOn = false
          const tl = gsap.timeline()
          tl.set(`.projectPreview`, {
            pointerEvents: 'none',
          })  
          tl.to(`.${projectTitle}`, {
            autoAlpha: 0,
            duration: 0.3,
          })
          tl.set(`.projectPreview`, {
            position: 'static',
            height: 0,
          })
          tl.to(`.projectPreview`, {
            autoAlpha: 1,
            height: 250,
            width: 250,
            duration: 0.3,
          })
          tl.to(`.projectsWrap`, {
            height: '350px',
            duration: 0.3,
          })
          tl.set(`.projectPreview`, {
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