<template>
  <div class="projectPreview d-flex w-50 h-50">
    <h1>{{ project.title }}</h1>
    <div class="imgBox">
        <img :src="getImgPath(project.imagePreview)" alt="">
    </div>
    <!-- <a :href="project.gitRepository">GitRepository</a> -->
    <p class="link" @click="openGitRepository()">Git Repository</p>
</div>
</template>

<script>
export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    },
    data() {
        return {
        }
    },
    methods:{
        openGitRepository(){
            window.open('https://github.com/giorgettaR/vue-boolzapp')
        },
        getImgPath(imgFile) {
                let imgPath = '/img/' + imgFile
                return imgPath;
        },
    }
}


</script>

<style lang ="scss">

</style>