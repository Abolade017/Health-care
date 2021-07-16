<template>
  <div>
    <div
      class="bg-white flex justify-center items-center h-40 shadow-lg mx-auto max-w-4xl -mt-16 px-10"
    >
      <div class="flex justify-between items-center space-x-16">
        <div class="flex items-center space-x-2" v-for="i in insurances" :key="i.id">
          <div
            class="bg-blue-900 rounded-full text-white flex justify-center items-center h-14 w-14 flex-shrink-0"
          >
            <i class=" flex justify-center items-center h-20 w-20" :class="i.icon"></i>
          </div>
          <div class="items-center space-y-1">
            <div>
              <h1 class="text-blue-800 font-bold text-lg text-left">{{i.title}}</h1>
            </div>
            <div>
              <p class="text-left">{{i.text}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Welcome />
    <Leading />
    <OurProduct />
    <OurTeam />
    <Testimonial />
  </div>
</template>
<script>
import Welcome from "./Welcome";
import Leading from "./Leading";
import OurProduct from "./OurProduct";
import OurTeam from "./OurTeam";
import Testimonial from "./Testimonial";

export default {
  components: {
    Welcome,
    Leading,
    OurProduct,
    OurTeam,
    Testimonial
  },
  data() {
    return {
      insurances: [
        {
          id: 1,
          title: "Insurance first",
          text: "Lorem ipsum dolor sit amet",
          icon: "fas fa-medkit"
        },
        {
          id: 2,
          title: "Expert description",
          text: "Lorem ipsum dolor sit amet",
          icon: "fas fa-prescription"
        },
        {
          id: 3,
          title: "Ensuring health",
          text: "Lorem ipsum dolor sit amet",
          icon: "fas fa-heartbeat"
        }
      ]
    };
  }
};
</script>