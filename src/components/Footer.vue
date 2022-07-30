<template>
  <div class="w-full lg:h-[590px] ph:h-auto bg-violet-700">
      <div class="w-[90%] translate-y-[-90px] mx-auto ph:justify-center rounded-xl lg:h-[180px] ph:h-[350px] flex flex-row ph:flex-wrap justify-between items-center p-4 bg-gray-900">
          <div class="lg:w-[25%] ph:w-[80%] text-center ph:my-2 h-[50px] font-bold ph:text-2xl lg:text-4xl text-white">Start a project</div>
          <div class="lg:w-[30%] ph:w-[80%] text-center ph:my-2 text-white h-[50px]  ph:text-lg lg:text-xl">Interested in working together? We should queue up a chat. I’ll buy the coffee.</div>
          <div class="outline ph:w-[80%] ph:my-2 text-center border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer lg:w-[20%]"><div class="text-xl font-bold"><a href="https://khamsat.com/programming/css-html/1995166-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D9%85%D9%88%D9%82%D8%B9-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%89-%D9%83%D8%A7%D9%85%D9%84-%D9%8A%D9%86%D8%A7%D8%B3%D8%A8-%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%83-%D9%88%D9%81%D9%83%D8%B1%D8%AA%D9%83" target="blank">Lets Do it</a></div></div>
      </div>
      <div class="w-[70%] flex flex-col mx-auto justify-center">
          <div class="my-3 flex justify-center"><img :src="img1" class="w-[60px]"></div>
          <div class="my-3 flex justify-center text-center text-gray-400 text-2xl font-bold"><div class="lg:w-[45%] ph:w-[80%]">Living, learning, & leveling up one day at a time.</div></div>
          <div class="flex flex-row justify-center my-3">
              <div class="lg:w-[50px] ph:mx-2 lg:mx-3 duration-500 lg:h-[50px] ph:h-[40px] ph:w-[40px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><a href="https://www.facebook.com/profile.php?id=100006056144857" target="blank"><i class="fa fa-facebook group-hover:text-violet-700 text-gray-50 ph:text-xl lg:text-2xl"></i></a></div>
              <div class="lg:w-[50px] ph:mx-2 lg:mx-3 duration-500 lg:h-[50px] ph:h-[40px] ph:w-[40px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><a href="https://www.instagram.com/hussam_daffala/" target="blank"><i class="fa fa-instagram group-hover:text-violet-700 text-gray-50 ph:text-xl lg:text-2xl"></i></a></div>
              <div class="lg:w-[50px] ph:mx-2 lg:mx-3 duration-500 lg:h-[50px] ph:h-[40px] ph:w-[40px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><a href="https://www.twitter.com/Hussamaldin222/" target="blank"><i class="fa fa-twitter group-hover:text-violet-700 text-gray-50 ph:text-xl lg:text-2xl"></i></a></div>
              <div class="lg:w-[50px] ph:mx-2 lg:mx-3 duration-500 lg:h-[50px] ph:h-[40px] ph:w-[40px] border group hover:bg-white border-white rounded-full flex justify-center items-center"><a href="https://www.linkedin.com/in/hosaam-daffala-50411722b/" target="blank"><i class="fa fa-linkedin group-hover:text-violet-700 text-gray-50 ph:text-xl lg:text-2xl"></i></a></div>
          </div>
          <div class="my-3 flex justify-center text-white">Handcrafted by me © 2022</div>
          <div class="my-3 flex justify-center items-center text-white">Made With <span class="ph:text-lg lg:text-xl mx-2 ph:mx-1 text-green-500 font-bold">Vuejs</span> & <span class="lg:mx-2 ph:mx-1 ph:text-lg lg:text-xl text-blue-500 font-bold">TailwindCSS</span></div>
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