<template>
  <div class="container">
    <br /><br />
    <div class="row">
      <div>
        <h2>Add New Book</h2>
        <br />
      </div>
    </div>
    <div class="container">
      <div class="form-group row">
        <div class="col">
          <div class="form-group">
            <label for="title">Book Title:</label>
            <input
              type="text"
              v-model="book.title"
              class="form-control"
              id="title"
              placeholder="Enter Book Title"
              name="title"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="author">Author:</label>
            <input
              type="text"
              v-model="book.author"
              class="form-control"
              id="author"
              placeholder="Enter Author"
              name="author"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-4">
          <div class="form-group">
            <label for="category">Category:</label>
            <select v-model="book.category" class="form-control" id="category">
              <option>Web Development</option>
              <option>Internet</option>
              <option>Java</option>
              <option>Microsoft .NET</option>
              <option>Mobile Technology</option>
              <option>Programming</option>
              <option>Software Engineering</option>
              <option>Data Science</option>
            </select>
          </div>
        </div>
        <div class="col-3">
          <div class="form-group">
            <label for="ISBN">ISBN:</label>
            <input
              type="text"
              v-model="book.isbn"
              class="form-control"
              id="ISBN"
              placeholder="Enter ISBN"
              name="ISBN"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="price">Price:</label>
            <input
              type="number"
              v-model="book.price"
              class="form-control"
              id="price"
              placeholder="Enter Price"
              name="price"
            />
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <label for="page">Pages:</label>
            <input
              type="number"
              v-model="book.pageCount"
              class="form-control"
              id="page"
              placeholder="Enter Pages"
              name="page"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <div class="form-group">
            <label for="description">Description:</label>
            <textarea
              v-model="book.shortDescription"
              class="form-control"
              id="description"
              placeholder="Enter Description"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-3">
          <label for="img">Image:</label>
          <input
            type="file"
            class="input-file"
            @change="onFileSelected"
            id="file-input"
            name="imgFile"
          />
        </div>
      </div>

      <button class="btn btn-primary" @click="SaveBook">Save</button>&nbsp;
      <button class="btn btn-danger" @click="Cancel">Cancel</button>
    </div>
    <br /><br />
  </div>
</template>

<script>
import Axios from "axios";
// import axios from "axios";
export default {
  name: "BookAddNew",
  data() {
    return {
      book: {
        title: "",
        price: 1,
        isbn: "",
        pageCount: 1,
        publishedDate: "1997-12-01T00:00:00.000-0800",
        thumbnailUrl:
          "https://raw.githubusercontent.com/kesinee-bo/sp01/master/unavailable.jpg",
        shortDescription: "",
        author: "",
        category: "",
        imgFile: null,
      },
    };
  },
  methods: {
    onFileSelected(event) {
      this.book.imgFile = event.target.files[0];
      // this.book.thumbnailUrl = "/img/" + this.book.imgFile.name
      console.log(this.book.imgFile);
    },
    async SaveBook() {
      const formData = new FormData();
      formData.append("imgFile", this.book.imgFile);
      Axios.post("http://localhost:3000/api/v1/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then((res) => {
        let imgPath = res.data;
        this.book.thumbnailUrl = imgPath;
        Axios.post("http://localhost:3000/api/v1/book", this.book).then(
          (res) => {
            console.log(res);
            this.$router.push("/");
          }
        );
      });
    },
    Cancel() {
      if (confirm("Do you want to cancel adding this book?")) {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.book-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

label {
  /* Other styling... */
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
}
</style>
