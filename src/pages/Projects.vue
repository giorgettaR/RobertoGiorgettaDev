<template>
    <Navbar />
    <Footer />
    <div class="background bg-projects"></div>
    <div class="container projects">
            <div class="projectsWrap d-flex align-items-center">
                <ProjectPreview v-for="project in visibleProjects()" 
                :project="project" 
                @toggleDetails="toggleDetails()"
                class="projectPreview"
                />
                <div class="projectsNav d-flex justify-content-center" v-if="!this.detailsOn">
                    <button class="slider" 
                        id="sleft"
                        @click="slide(this.currentPage-1)" 
                        v-on:mouseover="hoverSlider('left')"
                        v-on:mouseleave="leaveSlider('left')"
                        :disabled="disableSliderLeft" >
                        <
                    </button>
                    <button class="slider" 
                        id="s0"
                        @click="slide(0)" 
                        v-on:mouseover="hoverSlider('0')"
                        v-on:mouseleave="leaveSlider('0')"
                        :disabled="disableSlider(0)">
                        0
                    </button>
                    <button class="slider"
                        :id="'s' + pageNumber"
                        v-for="pageNumber in this.pages"
                        @click="slide(pageNumber)"
                        v-on:mouseover="hoverSlider(pageNumber)"
                        v-on:mouseleave="leaveSlider(pageNumber)"
                        :disabled="disableSlider(pageNumber)">
                        {{pageNumber}}
                    </button>
                    <button class="slider"
                        id="sright"
                        @click="slide(this.currentPage+1)"
                        v-on:mouseover="hoverSlider('right')"
                        v-on:mouseleave="leaveSlider('right')"
                        :disabled="disableSliderRight" >
                        >
                    </button>
                </div>
            </div>
    </div>
    
</template>

<script>
    import { data } from '../data.js';
    import Navbar from '../components/Navbar.vue';
    import Footer from '../components/Footer.vue';
    import projects from '../projects.json'
    import ProjectPreview from '../components/ProjectPreview.vue';
    import { gsap } from 'gsap'

    export default {
        data() {
            return {
                data,
                projects: projects.projects,
                visibleProjectsAmount: 3,
                currentPage: 0,
                pagesAmount: this.pages + 1,
                pages: Number,
                animationActive: false,
                visibleProjectsPositionI: 0,
                detailsOn: false,
            }
        },
        components: {
            Navbar,
            Footer,
            ProjectPreview
        },
        methods: {
            visibleProjects(){
                let visible = []
                for (let i = this.currentPage*this.visibleProjectsAmount; i < (this.currentPage*this.visibleProjectsAmount + this.visibleProjectsAmount); i++){
                    if (i < this.projects.length) {
                        visible.push(this.projects[i])
                    }
                }   
                return visible
            },
            hoverSlider(buttonId) {
                gsap.to(`#s${buttonId}`, {
                scale: 1.3,
                duration: 0.3
                })
            },
            leaveSlider(buttonId) {
                gsap.to(`#s${buttonId}`, {
                scale: 1,
                duration: 0.3
                })
            },
            slide(pageNumber){
                // SLIDE - RIGHT
                if(this.currentPage < pageNumber){
                    const slide = gsap.matchMedia()

                    // MOBILE
                    slide.add("(max-width: 768px)",() => {
                        const tl = gsap.timeline()
                        tl.set('html', {
                            overflow: 'hidden'
                        })

                        // HIDE
                        tl.addLabel('hide')
                        tl.to([`.projectPreview`,'.projectsNav'], {
                            autoAlpha: 0,
                            x: -250,
                            height: 0,
                            duration: 0.3,
                            onStart: () => {this.animationActive = true},
                            onComplete: () => {this.currentPage = pageNumber}
                        })
                        tl.set('.projectsNav', {
                            opacity: 0,
                        }, 'hide')
                        tl.set(`.projectPreview`, {
                            x:+250
                        })

                        // SHOW
                        tl.to(`.projectPreview`, {
                            height: '250',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                        tl.set('.projectsNav', {
                            autoAlpha: 1,
                            x: 0,
                            height: '40px',
                        })
                        tl.set('html', {
                            overflow: 'auto'
                        })
                    })

                    // DESKTOP
                    slide.add("(min-width: 768px)",() => {
                        const tl = gsap.timeline()
                        tl.set('html', {
                            overflow: 'hidden'
                        })

                        // HIDE
                        tl.to(`.projectPreview`, {
                            autoAlpha: 0,
                            x: -250,
                            height: 0,
                            duration: 0.3,
                            onStart: () => {this.animationActive = true},
                            onComplete: () => {this.currentPage = pageNumber}
                        })
                        tl.set(`.projectPreview`, {
                            x:+250
                        })

                        // SHOW
                        tl.to(`.projectPreview`, {
                            height: '300',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                        tl.set('html', {
                            overflow: 'auto'
                        })
                    })


                // SLIDE - LEFT
                } else if (this.currentPage > pageNumber) {
                    const slide = gsap.matchMedia()

                    // MOBILE
                    slide.add("(max-width: 768px)",() => {
                        const tl = gsap.timeline()
                        tl.set('html', {
                            overflow: 'hidden'
                        })

                        // HIDE

                        tl.to([`.projectPreview`,'.projectsNav'], {
                            autoAlpha: 0,
                            x: +250,
                            height: 0,
                            duration: 0.3,
                            onStart: () => {this.animationActive = true},
                            onComplete: () => {this.currentPage = pageNumber}
                        })
                        tl.set(`.projectPreview`, {
                            x:-250
                        })

                        // SHOW
                        tl.to(`.projectPreview`, {
                            height: '250',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                        tl.set('.projectsNav', {
                            autoAlpha: 1,
                            x: 0,
                            height: '40px',
                        })

                        tl.set('html', {
                            overflow: 'auto'
                        })
                    })

                    // DESKTOP
                    slide.add("(min-width: 768px)",() => {
                        const tl = gsap.timeline()
                        tl.set('html', {
                            overflow: 'hidden'
                        })

                        // HIDE
                        tl.to(`.projectPreview`, {
                            autoAlpha: 0,
                            x: +250,
                            height: 0,
                            duration: 0.3,
                            onStart: () => {this.animationActive = true},
                            onComplete: () => {this.currentPage = pageNumber}
                        })
                        tl.set(`.projectPreview`, {
                            x:-250
                        })

                        // SHOW
                        tl.to(`.projectPreview`, {
                            height: '300',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        },)
                        tl.set('html', {
                            overflow: 'auto'
                        })
                    })
                }
            },           
            toggleDetails(){
                this.detailsOn = !this.detailsOn
                console.log(this.detailsOn)
            },
            disableSlider(pageNumber) {
                if (this.currentPage != pageNumber)  {
                    return false
                } else {
                    return true
                }
                },
        },
        computed: {
            disableSliderLeft() {
                if (this.currentPage != 0 && !this.animationActive)  {
                    return false
                } else {
                    return true
                }
                },
            disableSliderRight() {
                if (this.currentPage < this.pages && !this.animationActive) {
                    return false
                } else {
                    return true
                }
            }
        },
        mounted() {
            let pages = this.projects.length / this.visibleProjectsAmount
            if (Number.isInteger(pages)) {
                this.pages = Math.floor(pages) - 1
            } else {
                this.pages = Math.floor(pages)
            }

            gsap.set('.projectPreview', {
                autoAlpha: 0,
                height: 0,
            }) 

            let setup = gsap.matchMedia()

            // MOBILE
            setup.add("(max-width: 768px)",() => {
                gsap.to('.projectPreview', {
                autoAlpha: 1,
                duration: 0.3 ,
                height: '250px',
                aspectRatio: 1,
                stagger: 0.2,
                })
            })
            // DESKTOP
            setup.add("(min-width: 768px)",() => {
                gsap.to('.projectPreview', {
                autoAlpha: 1,
                duration: 0.3 ,
                height: 250,
                width: 250,
                stagger: 0.2,
            })
            })

           

        }
    }
</script>

<style lang ="scss">

</style>