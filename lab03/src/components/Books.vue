<template>
  <div class="book">
      <div :key="book.bookid" v-for="book in booksInfo">
        <Bookitem :book="book"/>
      </div>
  </div>
</template>

<script>
import Bookitem from './Bookitem.vue'

export default {
  name: 'Books',
  components: {
    Bookitem,
  },
  props:["booksInfo"]
}
</script>

<style>
.book {
  margin-left: 30%;
}
</style>