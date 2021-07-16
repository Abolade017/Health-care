<template>
  <div class="relative mx-auto max-w-4xl h-auto py-16">
      <div class="py-10 h-72">
    <div class="flex space-x-20 items-center">
      <div class="border-2 rounded-tr-lg border-yellow-600 w-36 h-full ml-2 bg-white">
        <div class="w-48 h-60 ml-1.5 mt-2">
          <img
            src="@/assets/images/doctor.png"
            alt="doctor_image"
            class="object-cover rounded-t-md w-full h-full"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <h1 class="text-2xl font-bold text-left">Welcome To Our Clinic</h1>
        <p class="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Numquam necessitatibus tempora id optio tempore dignissimos neque,
          dolores, eos quod illo veniam natus velit nulla consectetur
          rem animi facere ipsum cum!
        </p>

        <button
          class="bg-red-500 text-white flex justify-center items-center text-center h-12 w-24 rounded-md focus:outline-none"
        >Read More</button>
      </div>
    </div>
    </div>
     <ReadMore />
  </div>
</template>
<script>
import ReadMore from './ReadMore'
export default {
    components:{
        ReadMore,
    }
}
</script>