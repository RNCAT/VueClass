<template>
<div>
    <h2>Books in Cart</h2>
    <div v-bind:key="book.bookid" v-for="book in cart">
        <CartItem v-bind:book="book" v-on:remove:Cartitem="Remove(book.bookid)" v-on:increase:Cartitem="Increase(book.bookid)" v-on:decrease:Cartitem="Decrease(book.bookid)" />
    </div>
</div>
</template>

<script>
import CartItem from './CartItem.vue';
export default {
    name: "Cart",
    props: ["cart"],
    components: {
        CartItem
    },
    methods: {
        Increase(bookId){
            this.$emit('increase:Cartitem', bookId)
        },
        Decrease(bookId){
            this.$emit('decrease:Cartitem', bookId)
        },
        Remove(bookId){
            this.$emit('remove:Cartitem', bookId)
        }
    }

}
</script>

<style scoped>
.book-item {
    background: #e6f2ff;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
}
</style>
