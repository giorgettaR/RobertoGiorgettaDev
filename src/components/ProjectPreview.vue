<template>
  <div
  class="projectPreview flex-column align-items-center justify-content-evenly"
  :class="project.title"
  v-on:mouseenter="hoverCard(project.title)"
  v-on:mouseleave="leaveCard(project.title)"
  >
    <div class="title p-2">{{ project.title }}</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <div v-if="this.detailsOn">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates illo, labore facere id, veritatis quas soluta maxime praesentium, odio dolorem laborum hic ut eaque. Totam voluptatum sequi perferendis porro quasi.</div>
    <button class="details" 
      v-if="!this.detailsOn"
      @click="openDetails(project.title);
      $emit('toggleDetails')"
      v-on:mouseover="hoverDetails(project.title)">
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
          data,
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
          gsap.fromTo(`.tech`,{
            rotation: -360,
          }, {
            rotation: 0,
            duration: 1,
            stagger: 0.1,
          })
        },
        animationTechs(projectTitle){
          const rotate = gsap.timeline()
          rotate.fromTo(`.${projectTitle} .tech`,{
            rotation: -360,
          },{
            rotation: 0,
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
        hoverCard(projectTitle){
          if (!this.detailsOn){
            this.animationTechs(projectTitle)
              gsap.to(`.${projectTitle}`, {
                scale: 1.2,
                duration: 0.2,
              })
          }
        },
        leaveCard(projectTitle){
          if (!this.detailsOn) {
              gsap.to(`.${projectTitle}`, {
                scale: 1,
                duration: 0.2,
              })
          }
        },
        hoverDetails(projectTitle){
          const tl = gsap.timeline()
            this.bouncing = true
            tl.to(`.${projectTitle} .details`, {
              scale: 1.2,
              duration: 0.4,
            })
            tl.to(`.${projectTitle} .details`, {
              scale: 1,
              duration: 0.4,
            })
        },
        openDetails(projectTitle) {
          const tl = gsap.timeline()
          tl.set('html', {
            overflow: 'hidden'
          })          
          tl.set('.projectsWrap', {
            height: 'fit-content',
          })
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
            width:'100%',
            duration: 0.3,
          })            
          tl.set('html', {
            overflow: 'auto'
          })
        },
        closeDetails(projectTitle) {
          gsap.set('html', {
              overflow: 'hidden'
          })
          let setup = gsap.matchMedia()

          // MOBILE
          setup.add("(max-width: 768px)",() => {
            const tl = gsap.timeline()
            tl.to(`.${projectTitle}`, {
              autoAlpha: 0,
              duration: 0.5,
            })
            tl.set(`.projectPreview`, {
              display: 'flex',
              onComplete: () => {this.detailsOn = false}
            })
            tl.to('.projectsNav', {
              height: '40px',
              x: 0,
              autoAlpha: 1,
              duration: 0.3,
              display: 'flex',
            })
            tl.to(['.projectPreview', `.${projectTitle}`], {
              autoAlpha: 1,
              x: 0,
              duration: 0.3 ,
              height: '250px',
              width: '250px',
              stagger: 0.2,
            })
            tl.set('html', {
                overflow: 'auto'
            })
          })
          // DESKTOP
          setup.add("(min-width: 768px)",() => {
            const tl = gsap.timeline()
            tl.to(`.${projectTitle}`, {
              autoAlpha: 0,
              x: -250,
              duration: 0.5,
            })
            tl.set(`.projectPreview`, {
              autoAlpha: 0,
              display: 'flex',
              onComplete: () => {this.detailsOn = false}
            })
            tl.set('.projectsWrap', {
              height: '100%',
            })
            tl.to('.projectsNav', {
              height: '40px',
              x: 0,
              autoAlpha: 1,
              duration: 0.3,
              display: 'flex',
            })
            tl.to(['.projectPreview', `.${projectTitle}`], {
              autoAlpha: 1,
              x: 0,
              duration: 0.3 ,
              height: 300,
              width: 300,
              stagger: 0.2,
            },'<')
            tl.set('html', {
                overflow: 'auto'
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