<template>
  <div class="mx-auto max-w-4xl py-10">
    <div class="flex justify-center items center text-2xl font-bold pb-10">Meet Our Awesome Team</div>
    <div class="flex justify-between items center space-x-20">
      <div class="w-1/4" v-for="team in teams" :key="team.id">
        <div class="bg-blue-300 rounded-full w-40 h-40 relative">
          <div class="absolute w-40 h-40 top-2">
            <img :src="team.url" alt="team_doctor" class="flex-shrink-0 rounded-full h-full w-full" />
          </div>
        </div>
        <div class="flex flex-col space-y-2 pt-4">
          <div class="items-center">{{team.name}}</div>
          <div class="items-center">{{team.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "Dr.Daniel ",
          title: "Opthamologist",
          url:  require("@/assets/images/team1.png")
        },
        {
          id: 2,
          name: "Dr. Pretty ",
          title: "Gynecologist",
          url: require("@/assets/images/doctor.png")
        },
        {
          id: 3,
          name: "Dr. Raymond ",
          title: "Dentist",
          url:  require("@/assets/images/team2.png")
        },
        {
          id: 4,
          name: "Dr.Adeola",
          title: "Surgeon",
          url:  require("@/assets/images/team3.png")
        }
      ]
    };
  }
};
</script>