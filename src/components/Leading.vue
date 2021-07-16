<template>
  <div class="mx-auto max-w-4xl pb-10">
    <div class="flex justify-between items-start">
      <div class="w-1/2 flex flex-col space-y-4">
        <div>
          <h1 class="text-3xl font-bold text-left">A Leading Hospital In The Town</h1>
        </div>
        <div>
          <p
            class="text-left"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nisi at magni natus sed numquam ipsam impedit dicta labore reiciendis?</p>
        </div>
        <div class="flex justify-between items-center">
          <ul>
            <li v-for="feature in features " :key="feature">{{feature.title}}</li>
          </ul>
          <div class="rounded-full h-10 w-10 bg-blue-300"></div>
        </div>
        <div class="flex justify-center items-center">
          <button
            class="flex justify-center items-center focus:outline-none w-full h-12 bg-red-500 text-white rounded-md"
          >Leading Hospital</button>
        </div>
      </div>
      <div class>
        <div class="relative">
          <div class="h-full w-72">
            <img src="@/assets/images/ma.jpg" alt="Male and Female_Doctor" class="h-full w-full" />
          </div>
          <div class="absolute -right-4 top-20">
            <div
              class="bg-blue-900 rounded-full h-12 w-12 text-white flex justify-center items-center"
            >
              <i class="fas fa-stethoscope flex justify-center items-center h-12 w-12"></i>
            </div>
          </div>
          <div class="absolute -left-2 bottom-52">
            <div
              class="bg-green-500 rounded-full h-8 w-8 text-white flex justify-center items-center"
            >
              <i class="fas fa-check flex justify-center items-center h-8 w-8 text-md"></i>
            </div>
          </div>
          <div class="absolute -right-20 bottom-10">
            <div class="bg-white rounded-lg w-60 h-32 flex flex-col space-y-3 shadow-lg">
              <div class="flex space-x-2 text-left px-3 pt-4">
                <i class="fas fa-star text-yellow-500 items-start" v-for="star in 5" :key="star"></i>
              </div>
              <div class="text-left font-bold text-blue-900 px-3">8300</div>
              <div class="text-left text-blue-900 px-3">Lorem ipsum dolor</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      star: [],
      features: [
        { id: 1, title: "feature 1" },
        { id: 2, title: "feature 2" },
        { id: 3, title: "feature 3" },
        { id: 4, title: "feature 4" },
        { id: 5, title: "feature 5" }
      ]
    };
  }
};
</script>