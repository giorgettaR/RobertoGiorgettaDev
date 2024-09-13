<template style="margin-bottom: 200px;">
  <Navbar />
  <div class="background bg-home"></div>

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
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
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
      const tl = gsap.timeline({repeat: -1})
      tl.set('.arrows *', {
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
          left: -300,
          duration: 2,
          ease: "bounce.out",
        }, 'start')
        .fromTo(['#b', '#r2'], {
          top: -300,
        },{ 
          top: 300,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo(['#e', '#t'], {
          top: 300,
        },{ 
          top: -300,
          duration: 0.5,
          stagger: 0.5
        }, 'start')
        .fromTo('#o1', {
          autoAlpha: 0,
          top:-250,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 250,
          duration: 1,
        },'start')
        .fromTo('#o2',{
          autoAlpha: 0,
          top:-250,
        },{ 
          autoAlpha: 1,
          rotate: 720,
          top: 250,
          duration: 1,
        },'start')

        // step 2
        .addLabel('step2','>')
        .to(['#b', '#r2'], {
          top: -300,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to(['#e', '#t'], {
          top: 300,
          duration: 0.5,
          stagger: 0.5
        }, 'step2')
        .to('#o1', { 
          rotate: 0,
          top: -250,
          duration: 1,
        },'step2')
        .to('#o2', { 
          rotate: 0,
          top: -250,
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