<template>
    <div class="projectsWrap d-flex flex-wrap">
            <ProjectPreview v-for="project in projects" :project="project"  :fullyLoaded="this.fullyLoaded"/>
    </div>
    <h1>Projects</h1>
</template>

<script>
    import { data } from '../data.js';
    import projects from '../projects.json'
    import ProjectPreview from '../components/ProjectPreview.vue';
    import { gsap } from 'gsap'

    export default {
        data() {
            return {
                data,
                projects: projects.projects,
                fullyLoaded: false,
            }
        },
        components: {
            ProjectPreview
        },
        methods: {

        },
        mounted() {
            gsap.set('.projectPreview', {
                autoAlpha: 0,
            })
            let fadeIn = gsap.to('.projectPreview', {
                autoAlpha: 1,
                duration: 3,
            })
            if (!fadeIn.isActive()){
                this.fullyLoaded = true
                console.log('loaded')
            }
        }
    }
</script>

<style lang ="scss">

</style>