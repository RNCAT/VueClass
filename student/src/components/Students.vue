<template>
  <div class="student">
      <h1>Student Information</h1>
      <div :key="student.studentId" v-for="student in studentInfo">
        <Studentitem :student="student"/>
      </div>
  </div>
</template>

<script>
import Studentitem from './Studentitem.vue'
export default {
  name: 'Students',
  components: {
    Studentitem,
  },
  props:["studentInfo"]
}
</script>

<style>
.student {
  margin: 5% 35%;
}
</style>