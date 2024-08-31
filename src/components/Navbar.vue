<template>
      <RouterLink :to="{ name: 'home'}">Home</RouterLink>
    <RouterLink :to="{ name: 'projects'}" >{{ data.language == 'Italian' ? 'Progetti' : 'Projects'}}</RouterLink>
    <RouterLink :to="{ name: 'mystory'}">{{ data.language == 'Italian' ? 'La Mia Storia' : 'Mystory'}}</RouterLink>
    <RouterLink :to="{ name: 'contacts'}">{{ data.language == 'Italian' ? 'Contatti' : 'Contacts'}}</RouterLink>
    <button @click="data.languageToggle()"> {{ data.languageMessage }} </button>
</template>

<script>
import { data } from '../data.js';
export default {

data() {
  return {
    data
  }
},
props: {

},
methods: {

}
}
</script>

<style lang ="scss">

</style>