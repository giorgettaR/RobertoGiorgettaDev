<template>
    <div class="pageProjects wrap d-flex flex-wrap">
            <ProjectPreview v-for="project in projects" :project="project"/>
    </div>
    <h1>Projects</h1>
</template>

<script>
    import { data } from '../data.js';
    import projects from '../projects.json'
    import ProjectPreview from '../components/ProjectPreview.vue';

    export default {
        data() {
            return {
                data,
                projects: projects.projects,
            }
        },
        components: {
            ProjectPreview
        },
        methods: {
            mounted() {
                console.log(projects)
            },
        }
    }
</script>

<style lang ="scss">

</style>