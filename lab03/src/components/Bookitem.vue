<template>
    <div class="book-item">
        <h1>{{ book.title }}</h1><br>
        <img :src="book.thumbnailUrl"><br>
        <b>Author:</b> {{ book.author }}<br>
        <b>Category:</b> {{ book.category }}<br>
        <b>ISBN:</b> {{ book.isbn }}<br>
        <b>Pages:</b> {{ book.pageCount }}<br>
        <b>Description:</b><br>
        <p>{{ book.shortDescription }}</p>
    </div>
</template>

<script>
export default {
    name: 'Bookitem',
    components: {

    },
    props: ["book"]
}
</script>

<style>
.book-item {
  width: 50%;
  background-color: aliceblue;
  margin: 15px 50px;
  padding: 10px;
}
</style>