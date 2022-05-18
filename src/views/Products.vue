<template>
  <div><h3>Products</h3></div>
  <div class="row">
    <div class="col m12">
      <table class="table bordered striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>ProductName</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.products" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="iniciarSesion">
        <div class="row">
          <div class="col m3">
            <label>ProductName</label>
            <input type="text" v-model="formProduct.productName" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Description</label>
            <input type="Text" v-model="formProduct.description" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Stock</label>
            <input type="0" v-model="formProduct.stock" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Price</label>
            <input type=0 v-model="formProduct.price" />
          </div>
        </div>
        <div class="row">
            <div class="col m3">
              <label>Category</label>
              <input type="Text" v-model="formProduct.category" />
            </div>
        </div>
      </form>
    </div>
  </div>
    
            <button Class="btn btn-success" @click="createProducts">Add</button>
</template>

<script>
import ProductHelper from "../helpers/products-helpers.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  mounted() {
    this.getProducts();
    this.formProduct = {}
  },
  data() {
    return {
      products: [],
      formProduct: {
          productName:"",
          description:"",
          stock:"",
          price:"",
          category:"",

      } 
    };
  },
  methods: {
    getProducts() {
      ProductHelper.getAll()
        .then((response) => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createProducts() {
        console.log("product")
        // eslint-disable-next-line no-debugger
        let extraterestre = JSON.parse(JSON.stringify(this.formProduct))
        ProductHelper.create(extraterestre)
        .then((response) => {
          this.products = response.data;
          console.log(response)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
