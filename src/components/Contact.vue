<template>
  <div class="w-full h-[150px] border-b border-gray-200">
      <div class="w-full h-full px-[60px] flex flex-row items-center justify-between">
          <div class="w-[15%] px-[10px] justify-center">
              <img :src="img1" class="w-[50%] h-[50%]">
          </div>
          <div class="w-[10%] flex flex-row items-center justify-between justify-center">
              <div class="w-[20%]"><a><i class="fa fa-undo text-2xl text-violet-600 hover:text-violet-700 cursor-pointer"></i></a></div>
              <div class="w-[20%]"><a><i class="fa fa-close text-2xl text-violet-600 hover:text-violet-700 cursor-pointer"></i></a></div>
          </div>
      </div>
  </div>
  <div class="w-full flex justify-center translate-y-[-60px]"><img :src="pro" class="w-[100px] h-[100px]"></div>
               <div class="w-full h-auto flex justify-center items-center my-[150px]">
                   <div class="w-[50%] flex justify-center flex-col">
                   <div class="w-[100%] flex flex-col justify-center">
                       <div class="text-center text-3xl font-bold">Thanks for taking the time to reach out. How can I help you today?</div>
                   </div>
                   <div class="flex flex-col">
                       <div class="flex flex-row justify-between">
                           <div class="w-[45%] flex flex-col">
                               <label class="text-xl font-bold">Name</label>
                               <input type="text" class="focus:border-none focus:outline-none  rounded-xl border border-gray-200 p-3">
                           </div>
                           <div class="w-[45%] flex flex-col">
                               <label class="text-xl font-bold">Email</label>
                               <input type="text" class="focus:border-none focus:outline-none rounded-xl border border-gray-200 p-3">
                           </div>
                       </div>
                       <div class="w-full my-3">
                           <div class="w-full">
                               <label class="text-xl font-bold">Message</label>
                               <textarea class="rounded-xl border focus:border-none focus:outline-none  border-gray-200 p-3 w-full h-[250px]"></textarea>
                           </div>
                       </div>
                   </div>
              <div class="mx-auto w-[170px] duration-500 border-2 cursor-pointer border-violet-700 text-violet-700 hover:text-gray-50 hover:bg-violet-700 p-2 text-lg rounded-full text-center"><a>Submit</a></div>
                   </div>
                   </div>
 
</template>

<script>
export default {
data(){
    return{
        img1:require('../assets/huss.png'),
        pro:require('../assets/pro.svg'),
    }
}
}
</script>

<style>

</style>