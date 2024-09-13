<template>
  <Navbar />
  <div class="background bg-home"></div>

  <div class="star">
    <svg width="800px" height="800px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m58 25.72c-.38-.06-4.91 4.22-8.19 8a261.43 261.43 0 0 1 -18.53 18.44c-5.16 4.4-8.28 4.5-11.63 3.9s-7.43-3-10.43-7.72-2.22-10.21-1.47-12.56a28.69 28.69 0 0 1 7.12-11.06c3.91-3.56 17.19-16 17.31-16.34s-.76-1.49-1.18-1.22c-2.82 1.78-19.41 18.18-21.41 20.93a24.43 24.43 0 0 0 -4.44 12.63c-.25 5.22 2 9 5.35 12.75s8.28 4.53 12.18 4.59 9.16-4.06 13.07-7.87 22.93-23.06 23.09-23.19-.44-1.22-.84-1.28zm-30.1-2.72c.07.28.5 1 .88.94s18.28-16.53 18.34-16.78-.47-1.28-.94-1.22-18.4 16.49-18.28 17.06zm8.16 1.69c0 .22.56.93.91 1s18.5-16.75 18.59-17-.56-1.19-.94-1.13-18.52 16.79-18.56 17.1zm1.12 11.47c.19 0 15.66-14.75 15.88-15.13s-.69-1.28-.91-1.34-15.89 14.83-15.93 15.25.78 1.19.96 1.19zm-26.09-1.41c-.28.19-.59 1.56-.84 3.38s.4 6.21 4.4 10.06 12.16 4.19 12.57 4.09.34-1.31.21-1.5-.81-.34-1.84-.44-5.5-.5-10.53-4.93a9.19 9.19 0 0 1 -2.44-10.41c.1-.37-1.36-.37-1.53-.25zm25.44 9.31c.37-.53-2.91-8.25-3-8.47s3.66-5.84 3-6.53-8-.9-8.41-.93-5.09-5-5.81-4.5-1.91 7-2.06 7.37-5.64 4.67-5.91 5.09c-.65 1 .5 1.22 1.31 1.35s4.79.28 5 .4.81 5.75.93 7.38 1.2 1.41 1.42 1.28 4.78-3.87 5.09-4.12 8.06 2.21 8.44 1.68zm-8.88-3.43c-.56.15-3.84 3.53-4.09 3.34s-.75-6.63-1-7a1.63 1.63 0 0 0 -1.37-.69c-.66-.06-3.91-.28-4.07-.62s4.88-3.85 4.91-4 .81-5.71 1.28-5.75 3.97 4 4.59 4.09 6.82 0 6.69.38-2.75 4.87-2.84 5.28 2.37 6.37 2.18 6.5-5.71-1.69-6.28-1.53zm-4-12.32a23 23 0 0 0 -.62 4c.06.29.59.19.87.13s.57-3.69.57-4-.58-.44-.79-.13zm6.35 7.16c.09 0 .15-.5.12-.78s-1.57-.79-1.78-.69-.15.78-.06.94a7.41 7.41 0 0 0 1.72.53zm.5 2.28c.25-.09 0-.66-.28-.94a6.22 6.22 0 0 0 -2-.59c-.22 0-.22.81-.13.94a8.6 8.6 0 0 0 2.44.59zm-2.44.38c-.19 0-.09 1 .06 1.09a27.14 27.14 0 0 0 3 .87c.28 0 0-.65-.15-.84a12.18 12.18 0 0 0 -2.88-1.12z" fill="#ffffff"/></svg>
  </div>
  <div class="container home" >
    <div class="hero">
      <div class="title welcome">
        <span class="">
          {{ data.language == 'Italian' ? 'BENVENUTO' : 'WELCOME'}} 
          <font-awesome-icon :icon="['far', 'face-grin-beam']" />
        </span>
      </div>
      <div class="title person">
        <div class="verb">
          <span>{{ data.language == 'Italian' ? 'sono ' : `I'm `}}</span>
        </div>
        <div class="name">
          <div class="letter r1"><span class="shadow">R</span><span id="r1">R</span></div>
          <div class="letter o1"><span class="shadow">O</span><span id="o1">O</span></div>
          <div class="letter b"><span class="shadow">B</span><span id="b">B</span></div>
          <div class="letter e"><span class="shadow">E</span><span id="e">E</span></div>
          <div class="letter r2"><span class="shadow">R</span><span id="r2">R</span></div>
          <div class="letter t"><span class="shadow">T</span><span id="t">T</span></div>
          <div class="letter o2"><span class="shadow">O</span><span id="o2">O</span></div>
        </div>
      </div>
      <div class="title profession">
        <span class="">{{ data.language == 'Italian' ? 'un Jr Web Developer' : 'a Jr Web Developer'}}</span>
      </div>
      <div class="avatar">
        <img src="/img/avatar-home.jpg" alt="">
      </div>
      <div class="arrows">
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
        <font-awesome-icon class="fa-2xl" :icon="['fas', 'chevron-down']" />
      </div>
    </div>
    <div class="nav">
      <div v-if="!this.endPage" class="advice">
        {{ data.language == 'Italian' ? 'continua a scorrere' : 'keep scrolling'}}
        <font-awesome-icon :icon="['far', 'face-grin-wink']" />
      </div>
      <div class="slide start">
        <h1 class="">{{ data.language == 'Italian' ? 'in questo portale' : 'in this website'}}</h1>
        <h1 class="">{{ data.language == 'Italian' ? 'potrai' : 'you can'}}</h1>
      </div>
      <div class="slide projects">
        <RouterLink :to="{ name: 'projects'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'esplorare' : 'explore'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'i miei progetti' : 'my projects'}}</h1>
        </RouterLink>
      </div>
      <div class="slide education">
        <RouterLink :to="{ name: 'mystory'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'informarti riguardo' : 'learn about'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'la mia formazione' : 'my education'}}</h1>
        </RouterLink>
      </div>
      <div class="slide contacts">
        <RouterLink :to="{ name: 'contacts'}" >
          <h1 class="">{{ data.language == 'Italian' ? 'entrare in contatto' : 'contact me'}}</h1>
          <h1 class="">{{ data.language == 'Italian' ? 'con me' : ''}}</h1>
        </RouterLink>
      </div>
    </div>
</div>
    
  
  

</template>


<script>
import Navbar from '../components/Navbar.vue';
import { data } from '../data.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

export default {

  data() {
    return {
      data,
      endPage: false
    }
  },        
  components: {
    Navbar,
  },
  props: {

  },
  methods: {
    arrowsAnimation(){
      const arrows = gsap.timeline({repeat: -1})
      arrows.set('.arrows *', {
          autoAlpha: 0,
          y: -100,
        })
        .to('.arrows *', {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1
        })
        .to('.arrows *', {
          autoAlpha: 0,
          y: 100,
          stagger: 0.1
        })
    },
    nameAnimation(){
      const tl = gsap.timeline({
        repeat: -1,
        onComplete: () => {this.underlineName()}
      })
      tl.addLabel('start')
        .to(['#r1','#e','#t'],{
          scale: 1.2,
          stagger: 0.2
        },'start')
        .to(['#o1','#r2'],{
          scale: 0.8,
          stagger: 0.2
        },'start')
        // step2
        .addLabel('step2')
        .to(['#r1','#e','#t'],{
          scale: 0.8,
          stagger: 0.2
        },'step2')
        .to(['#o1','#r2'],{
          scale: 1.3,
          stagger: 0.2
        },'step2')
        .to(['#b','#o2'],{
          scale: 0.7,
          stagger: 0.2
        },'step2')
        // end
        .addLabel('end')
        .to(['#r1','#e','#t'],{
          scale: 1,
          stagger: 0.2
        },'end')
        .to(['#o1','#r2'],{
          scale: 1,
          stagger: 0.2
        },'end')
        .to(['#b','#o2'],{
          scale: 1,
          stagger: 0.2
        },'end')
        .to('.letter *', {
          textDecoration: 'underline',
          stagger:0.1,
          duration: 0.5
        })
        .to('.letter *', {
          textDecoration: 'none',
          stagger:0.1,
          duration: 0.5
        }, '-=1' )
    },

  },
  mounted() {
    // SETUP
      // fadeIn effect
      gsap.registerEffect({
        name: 'fadeIn',
        effect: (targets, config) => {
          return gsap.from(targets, {
            autoAlpha: 0,
            x: config.x,
            y: config.y,
            duration: config.duration,
            stagger: config.stagger,
            onComplete: config.onComplete
          })
        },
        defaults: { x: 0, y: 0, stagger: 1, duration: 1, onComplete: ()=>{}},
        extendTimeline: true,
      })
      // fadeOut effect
      gsap.registerEffect({
        name: 'fadeOut',
        effect: (targets, config) => {
          return gsap.to(targets, {
            autoAlpha: 0,
            x: config.x,
            y: config.y,
            duration: 1,
            onComplete: config.onComplete
          })
        },
        defaults: { x: 0, y: 0, onComplete: ()=>{}},
        extendTimeline: true,
      })
      // 
      const scrollNav = gsap.timeline()
      scrollNav
        .fadeIn('.slide.start', { x: -100})
        .fadeOut('.slide.start', { x: 100 })
        .addLabel('projects')
        .fadeIn('.slide.projects', { x: 100})
        .fadeOut('.slide.projects', { x: -100 })
        .addLabel('education')
        .fadeIn('.slide.education', { x: -100})
        .fadeOut('.slide.education', { x: 100 })
        .addLabel('contacts')
        .fadeIn('.slide.contacts', { x: 100, onComplete: ()=> {this.endPage=true}})
        .fadeOut('.slide.contacts', { x: -100 })

      ScrollTrigger.create({
        animation: scrollNav,
        trigger: '.nav',
        scrub: 2,
        start: 'center center',
        end:'+=9000',
        pin: true,
        pinSpacing: true
      })

    // WELCOME ANIMATION
    const stars = gsap.timeline({repeat: -1})
      stars
        .addLabel('start')
        .to('.star', {
          rotate: -45,
          duration: 4,
          top: '80vh',
          ease: "power1.out",
          scale: 0.2,
          left: 0
        })
    const welcome = gsap.matchMedia()

    // MOBILE
    welcome.add("(max-width: 768px)",() => {
      const welcomeAnimation = gsap.timeline()
      welcomeAnimation
        .fadeIn('.title.welcome', { y:-100, duration: 1.5})
        .fadeIn('.title.person .verb', { x:-100, duration: 1.5})
        // step1
        .addLabel('start')
        .from('#r1', { 
          left: -60,
          duration: 2,
          ease: "bounce.out",
        }, 'start')
        .fromTo(['#b', '#r2'], {
          top: -60,
        },{ 
          top: 60,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo(['#e', '#t'], {
          top: 60,
        },{ 
          top: -60,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo('#o1', {
          autoAlpha: 0,
          top:-75,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 75,
          duration: 1,
        },'start')
        .fromTo('#o2',{
          autoAlpha: 0,
          top:-75,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 75,
          duration: 1,
        },'start')

        // step 2
        .addLabel('step2','>')
        .to(['#b', '#r2'], {
          top: -60,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to(['#e', '#t'], {
          top: 60,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to('#o1', { 
          rotate: 0,
          top: -75,
          duration: 1,
        },'step2')
        .to('#o2', { 
          rotate: 0,
          top: -75,
          duration: 1,
        },'step2')

        // end
        .addLabel('end')
        .to(['#b', '#r2','#e', '#t'],{
          top: 0,
          stagger: 0.3
        },'end')
        .to('#o1', { 
          rotate: 360,
          top: 0,
          duration: 1,
        },'end')
        .to('#o2', { 
          rotate: 360,
          top: 0,
          duration: 1,
          onComplete: () => {this.nameAnimation()},
        },'end')

        .fadeIn('.title.profession', { x:-100, duration: 1.5})
        .from('.avatar', {
          autoAlpha: 0,
          y: -300,
          rotate: 720,
          onComplete: () => {this.arrowsAnimation()},
        })
    })
    // DESKTOP
    welcome.add("(min-width: 768px)",() => {
      const welcomeAnimation = gsap.timeline()
      welcomeAnimation
        .fadeIn('.title.welcome', { y:-100, duration: 1.5})
        .fadeIn('.title.person .verb', { x:-100, duration: 1.5})
        // step1
        .addLabel('start')
        .from('#r1', { 
          left: -150,
          duration: 2,
          ease: "bounce.out",
        }, 'start')
        .fromTo(['#b', '#r2'], {
          top: -150,
        },{ 
          top: 150,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo(['#e', '#t'], {
          top: 150,
        },{ 
          top: -150,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo('#o1', {
          autoAlpha: 0,
          top:-150,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 150,
          duration: 1,
        },'start')
        .fromTo('#o2',{
          autoAlpha: 0,
          top:-150,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 150,
          duration: 1,
        },'start')

        // step 2
        .addLabel('step2','>')
        .to(['#b', '#r2'], {
          top: -150,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to(['#e', '#t'], {
          top: 150,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to('#o1', { 
          rotate: 0,
          top: -150,
          duration: 1,
        },'step2')
        .to('#o2', { 
          rotate: 0,
          top: -150,
          duration: 1,
        },'step2')

        // end
        .addLabel('end')
        .to(['#b', '#r2','#e', '#t'],{
          top: 0,
          stagger: 0.3
        },'end')
        .to('#o1', { 
          rotate: 360,
          top: 0,
          duration: 1,
        },'end')
        .to('#o2', { 
          rotate: 360,
          top: 0,
          duration: 1,
          onComplete: () => {this.nameAnimation()},
        },'end')

        .fadeIn('.title.profession', { x:-100, duration: 1.5})
        .from('.avatar', {
          autoAlpha: 0,
          y: -300,
          rotate: 720,
          onComplete: () => {this.arrowsAnimation()},
        })
    })
  }
}
</script>

<style lang ="scss">

</style>