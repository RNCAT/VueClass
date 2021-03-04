<template>
    <div class="student-item">
        <h2>{{ student.studentId }}</h2>
        <img :src="student.picture" height="160"><br>
        <b>Firstname:</b> {{ student.FirstName }}<br>
        <b>Lastname:</b> {{ student.LastName }}<br>
        <b>Weight:</b> {{ student.weight }}<br>
        <b>Height:</b> {{ student.height }}<br>
    </div>
</template>

<script>
export default {
    name: 'Studentitem',
    components: {},
    props: ["student"]
}
</script>

<style>
.student-item {
  background-color: seashell;
  margin: 15px;
  padding: 10px;
}
</style>