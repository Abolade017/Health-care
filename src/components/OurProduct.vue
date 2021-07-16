<template>
  <div class="mx-auto max-w-4xl pb-10">
    <div class="flex justify-center items-center text-2xl font-bold pb-10">Our Product</div>
    <div class="flex justify-between items-center space-x-8">
      <div class="w-1/7" v-for="i in products" :key="i.id">
        <div class="flex flex-col justify-center items-center space-y-1">
          <div
            class="rounded-full flex justify-center items-center h-12 w-12"
            :class="{ 'bg-blue-900': i.id === 4, 'bg-gray-200': i.id !== 4 }"
          >
            <i
              class="flex justify-center items-center text-lg w-12 h-12 "
              :class="{[i.icon]: true, 'text-white': i.id === 4, 'text-blue-900': i.id !== 4 }"
            ></i>
          </div>
          <p class="text-blue-900">{{i.title}}</p>
          <p class="text-blue-900 font-bold text-xl">{{i.quantity}}</p>
          <p class="text-blue-900">{{i.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "lorem",
          quantity: 830,
          icon: "fas fa-sync",
          desc: "lorem"
        },
        {
          id: 2,
          title: "lorem",
          quantity: 830,
          icon: "far fa-flag",
          desc: "lorem"
        },
        {
          id: 3,
          title: "lorem",
          quantity: 830,
          icon: "fas fa-chalkboard-teacher",
          desc: "lorem"
        },
        {
          id: 4,
          title: "lorem",
          quantity: 830,
          icon: "far fa-chart-bar",
          desc: "lorem",
        },
        {
          id: 5,
          title: "lorem",
          quantity: 830,
          icon: "fas fa-sync",
          desc: "lorem"
        },
        {
          id: 6,
          title: "lorem",
          quantity: 830,
          icon: "fas fa-sync",
          desc: "lorem"
        },
        {
          id: 7,
          title: "lorem",
          quantity: 830,
          icon: "fas fa-dollar-sign",
          desc: "lorem"
        }
      ]
    };
  }
};
</script>