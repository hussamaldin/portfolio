<template>
  <div class="w-full h-[150px]">
      <div class="w-full h-full px-[60px] flex flex-row items-center justify-between">
          <div class="xl:w-[10%] ph:w-[40%] px-[10px] justify-center">
              <img :src="img1" class="w-[50%] h-[50%]">
          </div>
          <div class="w-[20%] flex flex-row items-center justify-between justify-center">
              <div class="w-[48%] duration-500 cursor-pointer hover:text-violet-700 text-lg text-center"><a>Menetorship</a></div>
              <div class="w-[48%] duration-500 border-2 cursor-pointer border-violet-700 text-violet-700 hover:text-gray-50 hover:bg-violet-700 p-2 text-lg rounded-full text-center"><a>Say Hello</a></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        img1:require('../assets/hussam.png'),
    }
}
}
</script>

<style>

</style>