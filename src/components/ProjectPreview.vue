<template>
  <div :class="project.title" class="projectPreview d-flex w-50 h-50">
    <h1  @click="fade(project.title)">{{ project.title }}</h1>
    <div class="imgBox">
        <img :src="getImgPath(project.imagePreview)" alt="">
    </div>
    <p class="link" @click="openGitRepository()">Git Repository</p>
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
      fullyLoaded: {
        type: Boolean,
        required: true
      }
    },
    data() {
        return {
          
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
        fade(projecTitle){
          if (this.fullyLoaded){
            gsap.to(`.${projecTitle}`, {
              x: 1500,
              rotation: 400,
              duration: 1,
            })
            gsap.to(`.${projecTitle}`, {
              x: 0,
              height: '500px',
              rotate: 0,
              delay: 1,
              duration: 1,
            })
            // gsap.to('.projectsWrap', {
            //   duration: 1,
            //   autoAlpha: 0,
            // })
          }
        }
    },

    
}


</script>

<style lang ="scss">

</style>