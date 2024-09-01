<template>
    <Navbar />
        <div class="container">
            <div class="row">
                <div class="projectsWrap d-flex">
                    <ProjectPreview v-for="project in visibleProjects()" 
                    :project="project" 
                    :position="visibleProjects().indexOf(project)" 
                    />
            </div>
        </div>
    </div>
    <h1>Projects</h1>
    <button class="slider" @click="leftSlider()" :disabled="disableSliderLeft" ><</button>
    <button class="slider" @click="rightSlider()" :disabled="disableSliderRight" >></button>
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
                pages: Number,
                animationActive: false,
                visibleProjectsPositionI: 0,
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
            leftSlider(){
                gsap.to(`.projectPreview`, {
                    autoAlpha: 0,
                    x: 150,
                    duration: 0.4,
                    stagger: 0.1,
                    onStart: () => {this.animationActive = true},
                    onComplete: () => { 
                        this.currentPage--; 
                        console.log(this.currentPage)
                    }
                })
                gsap.set(`.projectPreview`, {
                    delay: 0.8,
                    x:-150
                }) 
                gsap.to(`.projectPreview`, {
                    delay: 0.8,
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    onComplete: () => { this.animationActive = false }
                })             
                console.log(this.currentPage)
            },
            rightSlider(){
                gsap.to(`.projectPreview`, {
                    autoAlpha: 0,
                    x: -150,
                    duration: 0.4,
                    stagger: -0.1,
                    onStart: () => {this.animationActive = true},
                    onComplete: () => { 
                        this.currentPage++; 
                        console.log(this.currentPage)
                    }
                })
                gsap.set(`.projectPreview`, {
                    delay: 0.8,
                    x:+150
                }) 
                gsap.to(`.projectPreview`, {
                    delay: 0.8,
                    autoAlpha: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: -0.1,
                    onComplete: () => { this.animationActive = false }
                })
            }
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
            this.pages = Math.floor(this.projects.length / this.visibleProjectsAmount) - 1
            console.log(this.pages)
            gsap.set('.projectPreview', {
                autoAlpha: 0,
                width: 0,
            })            
            gsap.to('.projectPreview', {
                autoAlpha: 1,
                duration: 0.3 ,
                width: '20%',
                stagger: 0.2,
            })
        }
    }
</script>

<style lang ="scss">

</style>