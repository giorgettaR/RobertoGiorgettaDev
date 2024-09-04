<template>
    <Navbar />
    <div class="background bg-projects"></div>
    <button class="toggleLanguage" @click="data.languageToggle()"> {{ data.languageMessage }} </button>
    <div class="container projects">
            <div class="p-2 projectsWrap d-flex align-items-center">
                <ProjectPreview v-for="project in visibleProjects()" 
                :project="project" 
                @toggleDetails="toggleDetails()" 
                />
                <div class="projectsNav" v-if="!this.detailsOn">
                    <button class="slider left" 
                        @click="slide(this.currentPage-1)" 
                        :disabled="disableSliderLeft" 
                        ><</button>
                    <button @click="slide(0)" :disabled="disableSlider(0)">-</button>
                    <button v-for="pageNumber in this.pages" @click="slide(pageNumber)" :disabled="disableSlider(pageNumber)">-</button>
                    <button class="slider right" @click="slide(this.currentPage+1)" :disabled="disableSliderRight" >></button>
                </div>
            </div>
    </div>
    
</template>

<script>
    import { data } from '../data.js';
    import Navbar from '../components/Navbar.vue';
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
            slide(pageNumber){
                if(this.currentPage < pageNumber){
                    const slide = gsap.matchMedia()

                    // MOBILE
                    slide.add("(max-width: 768px)",() => {
                        const tl = gsap.timeline()
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
                        tl.to(`.projectPreview`, {
                            height: 'calc(100%/3)',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                    })

                    // DESKTOP
                    slide.add("(min-width: 768px)",() => {
                        const tl = gsap.timeline()
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
                        tl.to(`.projectPreview`, {
                            height: 250,
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                    })


                    
                } else if (this.currentPage > pageNumber) {
                    const slide = gsap.matchMedia()

                    // MOBILE
                    slide.add("(max-width: 768px)",() => {
                        const tl = gsap.timeline()
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
                        tl.to(`.projectPreview`, {
                            height: 'calc(100%/3)',
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
                        })
                    })

                    // DESKTOP
                    slide.add("(min-width: 768px)",() => {
                        const tl = gsap.timeline()
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
                        tl.to(`.projectPreview`, {
                            height: 250,
                            autoAlpha: 1,
                            x: 0,
                            duration: 0.3,
                            onComplete: () => { this.animationActive = false }
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
            console.log(pages)
            console.log(this.pages)


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
                height: 'calc(100%/3)',
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