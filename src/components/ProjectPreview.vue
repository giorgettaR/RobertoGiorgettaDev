<template>
  <div
  class="projectPreview d-flex flex-column align-items-center justify-content-evenly"
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
            // DESKTOP
            const hover = gsap.matchMedia()
            hover.add("(min-width: 768px)",() => {
              gsap.to(`.${projectTitle}`, {
              height: '270px',
              width: '270px',
              duration: 0.2,
              })
            })

          }
        },
        leave(projectTitle){
          if (!this.detailsOn) {
            const leave = gsap.matchMedia()
            // DESKTOP
            leave.add("(min-width: 768px)",() => {
              gsap.to(`.${projectTitle}`, {
              height: '250px',
              width: '250px',
              duration: 0.2,
              })
            })
          }
        },
        openDetails(projectTitle) {
          console.log(this.detailsOn)
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
            height: '100%',
          })
          tl.set(`.${projectTitle}`, {
            pointerEvents: 'auto',
            onComplete: () => {this.detailsOn = true}
          })  
          tl.to(`.${projectTitle}`, {
            position: 'static',
            autoAlpha: 1,
            height: '100%',
            maxWidth: '100%',
            duration: 0.3,
          })
          const openDetails = gsap.matchMedia()
          openDetails.add("(min-width: 768px)",() => {
            gsap.to(`.${projectTitle}`, {
            width: '100%',
            duration: 0.3,
          })  
          })  

        },
        closeDetails(projectTitle) {
          const closeDetails = gsap.matchMedia()
          // MOBILE
          closeDetails.add("(max-width: 768px)",() => {
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
              onComplete: () => {this.detailsOn = false}
            })
            tl.set(`.projectsWrap`, {
              height: '80vh',
            })
            tl.to(`.projectPreview`, {
              autoAlpha: 1,
              height: 'calc(100%/3)',
              duration: 0.3,
            })
            tl.to(`.projectPreview`, {
              pointerEvents: 'auto',
            }) 
          })
          // DESKTOP
          closeDetails.add("(min-width: 768px)",() => {
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
              onComplete: () => {this.detailsOn = false}
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
          })
        },
    },
    mounted() {
      this.animationWhole()
    }
}


</script>

<style lang ="scss">

</style>