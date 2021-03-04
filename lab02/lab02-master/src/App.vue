<template>
  <div id="app">
    {{ counter }}<br>
    <button @click="counter+=1">plus 1</button><br>
    <button @click="clicked">plus 2</button>

    <h1>{{ message }}</h1>
    <span v-text="message"></span>
    <br>
    <input type="text" v-model="message">
    <hr>
    <h2 v-show="isShow">Hello</h2>
    <hr>
    <h2 :key="emp.id" v-for="emp in employee">
      <span v-bind:class="emp.salary >= 90000 ? 'high' : emp.salary >= 30000 ? 'medium' : 'low'">
        {{ emp.name }}
      </span>
      <span v-if="emp.salary >= 90000">***</span>
      <span v-else-if="emp.salary >= 30000">**</span>
      <span v-else>*</span>
    </h2><br>
    
    <a :href="urlSKRU">SKRU</a><br><br>
    <img :src="require('@/assets/img/'+ imagesName + '.jpg')" alt="cat" width="100px" height="100px"><br><br>
    
    <select v-model="message">
      <option value="Coffee">Coffee</option>
      <option value="GreenTea">GreenTea</option>
      <option value="Milk">Milk</option>
    </select><br><br>
    
    <textarea v-model="message" cols="30" rows="3"></textarea>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      counter: 0,
      imagesName: "cat", 
      urlSKRU: "https://www.skru.ac.th",
      message: "Hello World",
      isShow: true,
      employee: [
        {"id":1, "name":"Cat", "salary":90000},
        {"id":2, "name":"Dog", "salary":30000},
        {"id":3, "name":"Fish", "salary":10000},
      ],
    }
  },
  methods:{
    clicked: function(){
      this.counter+=2
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.high {
  color: green;
}
.medium {
  color: orange;
}
.low {
  color: red;
}
</style>
