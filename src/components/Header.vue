<template>
<div>
    <div class="flex  space-x-32 items-center py-6 ">
        <div class="text-3xl font-bold text-blue-900 ml-10">MARCEL</div>
        <div class="flex justify-between items-center text-gray-600 text-lg">
            <router-link to="">Home</router-link>
            <router-link to="">About Me</router-link>
            <router-link to="">Success Story</router-link>
            <router-link to="">Testimonials</router-link>
            <router-link to="">
                <div class="flex items-center justify-center pl-4 space-x-2 border rounded-md text-center border-red-300">
                    <div>Find a doctor</div>
                    <div><i class="fas fa-arrow-right w-10"></i></div>
                </div>
            </router-link>
        </div>
        <div class="flex items-center space-x-6 ">
            <button class="bg-blue-900 text-white focus:outline-none rounded-md text-center py-2 px-4">SignUp</button>
            <button class="bg-red-600 text-white focus:outline-none rounded-md text-center py-2 px-4">SignIn</button>
        </div>
        </div>
        <ProfessionalCare />
    </div>
</template>
<script>
import ProfessionalCare from './ProfessionalCare';
export default {
    components:{
        ProfessionalCare
    }
}
</script>

