<template>
  <div class="w-full h-[590px] bg-violet-700">
      <div class="w-[90%] translate-y-[-90px] mx-auto rounded-xl h-[180px] flex flex-row justify-between items-center p-4 bg-gray-900">
          <div class="w-[25%] h-[50px] font-bold text-4xl text-white">Start a project</div>
          <div class="w-[30%] text-white h-[50px] text-xl">Interested in working together? We should queue up a chat. I’ll buy the coffee.</div>
          <div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[20%]"><div class="text-xl font-bold">Lets Do it</div></div>
      </div>
      <div class="w-[70%] flex flex-col mx-auto justify-center">
          <div class="my-3 flex justify-center"><img :src="img1" class="w-[60px]"></div>
          <div class="my-3 flex justify-center text-center text-gray-400 text-2xl font-bold"><div class="w-[45%]">Living, learning, & leveling up one day at a time.</div></div>
          <div class="flex flex-row justify-center my-3">
              <div class="w-[50px] mx-3 duration-500 h-[50px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><i class="fa fa-facebook group-hover:text-violet-700 text-gray-50 text-2xl"></i></div>
              <div class="w-[50px] mx-3 duration-500 h-[50px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><i class="fa fa-instagram group-hover:text-violet-700 text-gray-50  text-2xl"></i></div>
              <div class="w-[50px] mx-3 duration-500 h-[50px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><i class="fa fa-twitter group-hover:text-violet-700 text-gray-50  text-2xl"></i></div>
              <div class="w-[50px] mx-3 duration-500 h-[50px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><i class="fa fa-linkedin group-hover:text-violet-700 text-gray-50  text-2xl"></i></div>
          </div>
          <div class="my-3 flex justify-center text-white">Handcrafted by me © 2022</div>
          <div class="my-3 flex justify-center items-center text-white">Made With <span class="text-xl mx-2 text-green-500 font-bold">Vuejs</span> & <span class="mx-2 text-xl text-blue-500 font-bold">TailwindCSS</span></div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
     img1:require('../assets/huss1.png')
    }
}
}
</script>

<style>

</style>