<template>
<div>
  <div
    class=" flex justify-end items-center h-full bg-blue-900 rounded-3xl  py-20 "
  >
    <div
      class=" flex justify-center items-center h-full w-3/4 "
    >
       <div class="items-center space-y-8">
          <div>
           <h3
              class="text-3xl text-white text-left "
            >
              Professional </h3>
              <h3
              class="text-3xl text-white text-left "
            >care for your </h3>
            <h3
              class="text-3xl text-white text-left "
            >family
            </h3>
          </div>
          <div>
             <p class="text-left text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            praesentium quam consequuntur itaque voluptas quos laudantium
            accusamus
          </p>
          </div>
          <div class="flex items-center  space-x-6  ">
            <router-link to="" class="bg-red-600  rounded-md">
              <div
                class="flex items-center justify-center text-white px-4 space-x-2  h-12 text-center "
              >
                <div class="flex items-center justify-center">Appointment</div>
                <div class="flex items-center justify-center">
                  <i class="fas fa-arrow-right w-10"></i>
                </div>
              </div>
            </router-link>
            <div class="flex space-x-4">
              <div
                class="flex justify-center items-center bg-gray-400 rounded-md h-12 w-12"
              >
                <div
                  class="flex justify-center items-center text-white h-12 w-12"
                >
                  <i class="fas fa-phone-volume h-auto"></i>
                </div>
              </div>
              <div class="grid gap-y-0.25 text-white text-left">
                <div class="">Hotline</div>
                <div class="">(357)245-1546</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pr-8"
        >
          <img
            class=" flex justify-end items-center rounded-3xl object-cover w-full h-full"
            src="@/assets/images/doctors.png"
          />
        </div>
      </div>
    </div>
    <Insurance />
  </div>
</template>
<script>
import Insurance from "./InsuranceFirst";
export default {
  components: {
    Insurance
  }
};
</script>