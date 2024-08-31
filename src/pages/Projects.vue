<template>
    <Navbar />
    <div class="projectsWrap d-flex flex-nowrap">
        <ProjectPreview v-for="project in visibleProjects()" 
        :project="project" 
        :class="this.previewPositions[visibleProjects().indexOf(project)]"
        :position="visibleProjects().indexOf(project)" 
        />
    </div>
    <h1>Projects</h1>
    <button @click="leftSlider()" :disabled="disableSliderLeft" ><</button>
    <button @click="rightSlider()" :disabled="disableSliderRight" >></button>
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
                visibleProjectsAmount: 5,
                previewPositions: ['left', 'centerLeft', 'center', 'centerRight', 'right'],
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
                for (let i = this.visibleProjectsPositionI; i < (this.visibleProjectsPositionI + this.visibleProjectsAmount); i++){
                    visible.push(this.projects[i])
                }   
                return visible
            },              
            leftSlider(){
                if (this.visibleProjectsPositionI > 0) {
                this.visibleProjectsPositionI--
                console.log(this.projects.length)
                }
            },
            rightSlider(){
                this.visibleProjectsPositionI++
            }
        },
        computed: {
            disableSliderLeft() {
                if (this.visibleProjectsPositionI != 0) {
                    return false
                } else {
                    return true
                }
                },
            disableSliderRight() {
                if (this.visibleProjectsPositionI != (this.projects.length - this.visibleProjectsAmount)) {
                    return false
                } else {
                    return true
                }
            }
        },
        mounted() {
            gsap.set('.projectPreview', {
                autoAlpha: 0,
                width: 0,
            })            
            gsap.to('.projectPreview', {
                autoAlpha: 1,
                duration: 0.3 ,
                width: '30%',
                stagger: 0.2,
            })
            gsap.to('.left', {
                duration: 0.3,
                x:-300,
                zIndex:0
            })
            gsap.to('.centerLeft', {
                duration: 0.3,
                x:-150,
                zIndex:1
                
            })
            gsap.to('.center', {
                duration: 0.3,
                zIndex: 2
            })
            gsap.to('.centerRight', {
                duration: 0.3,
                x:150,
                zIndex:3
                
            })
            gsap.to('.right', {
                duration: 0.3,
                x:300,
                zIndex:4,
            })
        }
    }
</script>

<style lang ="scss">

</style>