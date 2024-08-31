<template>
  <Navbar />
  <h1>Mystory</h1>
  
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { data } from '../data.js';

export default {

  data() {
    return {
      data
    }
  },        
  components: {
    Navbar
  },
  props: {

  },
  methods: {

  }
}
</script>

<style lang ="scss">

</style>