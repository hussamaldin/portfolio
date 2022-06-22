<template>

  <router-view />
  <Footer/>
</template>
<script>

import Footer from './components/Footer.vue';
export default {
  name:'App',
  components:{

    Footer
  },
  data(){
  return{

  }
  }
}
</script>
<style>

</style>
