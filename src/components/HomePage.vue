<template>
  <div class="w-full h-[150px]">
      <div class="w-full h-full px-[60px] flex flex-row items-center justify-between">
          <div class="w-[15%] px-[10px] justify-center">
              <img :src="im" class="w-[50%] h-[50%]">
          </div>
          <div class="w-[20%] flex flex-row items-center justify-between justify-center">
              <div class="w-[48%] duration-500 cursor-pointer hover:text-violet-700 text-lg text-center"><a>Menetorship</a></div>
              <div class="w-[48%] duration-500 border-2 cursor-pointer border-violet-700 text-violet-700 hover:text-gray-50 hover:bg-violet-700 p-2 text-lg rounded-full text-center"><a>Say Hello</a></div>
          </div>
      </div>
  </div>
  <div class="w-full h-full">
      <div class="w-full flex flex-col justify-center">
          <div class="w-full flex justify-center">
              <div class="w-[70%] flex flex-col justify-center mt-[40px]">
                  <div class="text-5xl font-bold text-center">Designer, Front-end Developer & Mentor</div>
                  <div class="text-2xl text-center my-[40px]">I design and code beautifully simple things, and I love what I do.</div>
                  <div class="flex justify-center mb-[80px]"><img :src="img1"></div>
                  <div class="flex justify-center"><img :src="img2"></div>
              </div>
          </div>
                <div class="w-full h-[590px] flex flex-col justify-center items-center bg-violet-700">
                    <div class="w-[60%]">
                      <div class="text-4xl my-4 text-center font-bold text-white">Hi, I’m Hussam. Nice to meet you.</div>
                      <div class="text-xl text-white text-center">Since I started my journey as an independent designer nearly 4 years ago, I have done some projects, consulted startups, and collaborated with talented people to create stores, pages and sites that I am quietly confident, naturally curious, and constantly improving my design problem one at a time. I want to learn more, and I want to develop myself more.</div>
                      </div>
               </div>
               <div class="w-full h-auto flex justify-center items-center my-[150px]">
                   <div class="w-[90%] flex justify-center flex-col">
                   <div class="w-[100%] flex flex-col justify-center my-[100px]">
                       <div class="text-center text-3xl font-bold">My Skilles</div>
                   </div>
                   <div class="flex flex-row flex-wrap justify-center">
                       <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__infinite">
                           <div class="w-full h-[70px] rounded-xl shadow-2xl border border-gray-100"><img :src="lara" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Laravel</div>
                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-1s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="jav" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Javascript</div>
                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-2s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="mysql" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Mysql</div>
                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-3s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="php" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">PHP</div>
                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-4s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="vue" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Vue</div>
                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-5s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="html" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Html</div>
                       </div>
                                             <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-6s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="css" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">Css</div>

                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-7s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="tail" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">TailwindCSS</div>
                       </div>
                                             <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-8s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="api" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">API</div>

                       </div>
                                              <div class="w-[13%] h-[80px] m-4 animate__animated animate__pulse animate__slow animate__delay-9s animate__infinite">
                           <div class="w-full h-[80px] rounded-xl shadow-2xl border border-gray-100"><img :src="json" class="w-full h-full rounded-xl"></div>
                           <div class="w-full text-center text-xl font-bold">JSON</div>
                       </div>
                   </div>
                   </div>
                   </div>

               <div class="w-full h-auto flex justify-center items-center my-[150px]">
                   <div class="w-[90%] flex justify-center flex-col">
                   <div class="w-[100%] flex flex-col justify-center">
                       <div class="text-center text-3xl font-bold">My Recent Work</div>
                       <div class="text-center text-2xl">Here are a few design projects I've worked on recently. Want to see more? <a herf="#" class="font-bold text-violet-600 hover:text-violet-700 cursor-pointer">Email me.</a></div>
                   </div>
                   <div class="flex flex-row justify-between flex-wrap my-[100px] ">
                       <div class="w-[45%] m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                           <a href="https://oneforshop.vercel.app/"><div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="on" class="w-full h-full rounded-xl">
                       </div>
                        <div class="w-[45%] m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                            <a href="https://penv.vercel.app/"> <div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="penv" class="w-full h-full rounded-xl">
                       </div>
                        <div class="w-[45%] m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                                                 <a href="https://top-mercury.vercel.app/">  <div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <img :src="top" class="w-full h-full rounded-xl">
                       </div>
                        <div class="w-[45%] m-4 h-[280px] relative border rounded-xl border-gray-300 group hover:scale-110 duration-500 shadow-xl">
                            <a href="https://courseweb.vercel.app/"><div class="bg-gray-800 rounded-xl w-full absolute duration-500 top-0 h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
<div class="outline border-none outline-violet-700 hover:bg-violet-700 duration-500 rounded-full text-gray-50 h-[50px] flex justify-center items-center cursor-pointer w-[175px]"><div class="text-xl font-bold">Visit Website ></div></div>
                           </div></a>
                           <a href="https://courseweb.vercel.app/"><img :src="sync" class="w-full h-full rounded-xl"></a>
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
    }
}
}
</script>

<style>

</style>