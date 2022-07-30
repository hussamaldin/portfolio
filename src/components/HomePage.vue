<template>
  <div class="w-full h-[150px]">
      <div class="w-full h-full xl:px-[60px] ph:px-[30px] flex flex-row items-center justify-between">
          <div class="xl:w-[15%] ph:w-[50%] px-[10px] justify-center">
              <img :src="im" class="w-[50%] h-[50%]">
          </div>
          <div class="ph:hidden xl:w-[20%] ph:w-[40%] xl:block ">
          <div class="xl:w-full ph:w-full flex flex-row items-center justify-between justify-center">
              <div class="w-[48%] duration-500 cursor-pointer hover:text-violet-700 text-lg ph:text-sm text-center"><a class="">Menetorship</a></div>
              <div class="w-[48%] duration-500 border-2 cursor-pointer border-violet-700 text-violet-700 hover:text-gray-50 hover:bg-violet-700 p-2 text-lg ph:text-sm rounded-full text-center"><a href="/contact" class="hover:text-white">Say Hello</a></div>
          </div>
          </div>
                    <div class="xl:hidden w-[30%] flex items-center justify-end">
              <div class="w-[48%] cursor-pointer"><i :class="[isopen?'fa fa-close text-2xl':'fa fa-bars text-2xl']" @click="open()"></i></div>

          </div>
      </div>
  </div>
  <div :class="[isopen?'w-full flex items-center duration-500 justify-center h-[140px] border-b border-gray-200':'hidden duration-500']">
            <div class="w-[80%] flex flex-col items-center justify-center">
              <div class="w-[48%] duration-500 cursor-pointer hover:text-violet-700 text-lg text-center"><a>Menetorship</a></div>
              <div class="w-[48%] duration-500 border-2 cursor-pointer border-violet-700 text-violet-700 hover:text-gray-50 hover:bg-violet-700 p-2 text-lg rounded-full text-center"><a href="/contact">Say Hello</a></div>
          </div>
          </div>
  <div class="w-full h-full">
      <div class="w-full flex flex-col justify-center">
          <div class="w-full flex justify-center">
              <div class="w-[70%] flex flex-col justify-center mt-[40px]">
                  <div class="text-5xl ph:text-2xl font-bold text-center">Designer, Front-end Developer & Mentor</div>
                  <div class="text-2xl ph:text-lg text-center my-[40px]">I design and code beautifully simple things, and I love what I do.</div>
                  <div class="flex justify-center mb-[80px]"><img :src="img1"></div>
                  <div class="flex justify-center"><img :src="img2"></div>
              </div>
          </div>
                <div class="w-full h-[590px] flex flex-col justify-center items-center bg-violet-700">
                    <div class="w-[60%] ph:w-[90%]">
                      <div class="text-4xl ph:text-xl my-4 text-center font-bold text-white">Hi, I’m Hussam. Nice to meet you.</div>
                      <div class="text-xl ph:text-lg text-white text-center">Since I started my journey as an independent designer nearly 4 years ago, I have done some projects, consulted startups, and collaborated with talented people to create stores, pages and sites that I am quietly confident, naturally curious, and constantly improving my design problem one at a time. I want to learn more, and I want to develop myself more.</div>
                      </div>
               </div>
               <div class="w-full h-auto flex justify-center items-center my-[150px] ph:my-[80px]">
                   <div class="w-[90%] ph:w-[100%] flex justify-center flex-col">
                   <div class="w-[100%] flex flex-col justify-center my-[100px]">
                       <div class="text-center text-3xl font-bold">My Skilles</div>
                   </div>
                   <div class="flex flex-row flex-wrap justify-center">
                       <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px]  animate-[jump-ani_5s_1s_linear_infinite]">
                           <div class="w-full h-[70px] rounded-xl shadow-2xl border border-gray-100"><img :src="lara" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Laravel</div>
                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px]  animate-[jump-ani_5s_2s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="jav" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Javascript</div>
                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_3s_linear_infinite] ">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="mysql" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Mysql</div>
                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_4s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="php" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">PHP</div>
                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_5s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="vue" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Vue</div>
                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_6s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="html" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Html</div>
                       </div>
                                             <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px]  ph:m-[15px] animate-[jump-ani_5s_7s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="css" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Css</div>

                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_8s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="tail" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">TailwindCSS</div>
                       </div>
                                             <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_9s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="api" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">API</div>

                       </div>
                                              <div class="lg:w-[13%] ph:w-[35%] lg:h-[80px] m-[30px] ph:m-[15px] animate-[jump-ani_5s_10s_linear_infinite]">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="json" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">JSON</div>
                       </div>
                   </div>
                   </div>
                   </div>

               <div class="w-full h-auto flex justify-center items-center lg:my-[150px] ph:my-[80px]">
                   <div class="w-[90%] flex justify-center flex-col">
                   <div class="w-[100%] flex flex-col justify-center">
                       <div class="text-center text-3xl font-bold">My Recent Work</div>
                       <div class="text-center text-2xl">Here are a few design projects I've worked on recently. Want to see more? <a herf="#" class="font-bold text-violet-600 hover:text-violet-700 cursor-pointer">Email me.</a></div>
                   </div>
                   <div class="flex flex-row justify-between flex-wrap my-[100px] ">
                       <div class="lg:w-[45%] ph:w-full m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                           <a href="https://oneforshop.vercel.app/"><div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="on" class="w-full h-full rounded-xl">
                       </div>
                        <div class="lg:w-[45%] ph:w-full m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                            <a href="https://penv.vercel.app/"> <div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="penv" class="w-full h-full rounded-xl">
                       </div>
                        <div class="lg:w-[45%] ph:w-full m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                                                 <a href="https://top-mercury.vercel.app/">  <div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="top" class="w-full h-full rounded-xl">
                       </div>
                        <div class="lg:w-[45%] ph:w-full m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                            <a href="https://courseweb.vercel.app/"><div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <a href="https://courseweb.vercel.app/"><img :src="sync" class="w-full h-full rounded-xl"></a>
                       </div>
                                               <div class="lg:w-[45%] ph:w-full m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                            <a href="https://shop-eazy.vercel.app/"><div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <a href="https://shop-eazy.vercel.app/"><img :src="ssyp" class="w-full h-full rounded-xl"></a>
                       </div>
                   </div>
                   </div>

               </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        im:require('../assets/huss.png'),
        img1:require('../assets/pro.svg'),
        img2:require('../assets/ic.svg'),
        on:require('../assets/on.png'),
        sync:require('../assets/sync.png'),
        ssyp:require('../assets/ssyp.png'),
        top:require('../assets/top.png'),
        penv:require('../assets/penv.png'),
        lara:require('../assets/laravel.jpg'),
        mysql:require('../assets/mysql.jpg'),
        php:require('../assets/php.jpg'),
        html:require('../assets/html.jpg'),
        css:require('../assets/css.jpg'),
        tail:require('../assets/tail.jpg'),
        vue:require('../assets/vue.png'),
        jav:require('../assets/jav.png'),
        api:require('../assets/api.jpg'),
        json:require('../assets/Json.jpg'),
        isopen:false
    }
},
methods:{
    open(){
        this.isopen = !this.isopen
        console.log(this.isopen)
    }
}
}
</script>

<style>

</style>