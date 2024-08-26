<template>
  <main>
    <RouterView />
  </main>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      language: 'Italian'
    }
  }
}
</script>

<style lang ="scss">
@use './style/general.scss';
</style>