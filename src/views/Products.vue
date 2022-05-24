<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <nav>
    <li>
      <router-link to="/ProductCategory"
        ><i class="fa-solid fa-circle-plus"></i> Create Category</router-link
      >
    </li>
  </nav>
  <nav>
    <li>
      <router-link to="/Order"
        ><i class="fa-solid fa-circle-plus"></i> Create Order</router-link
      >
    </li>
  </nav>
  <div><h4> <i class="fa-brands fa-product-hunt"></i> Products</h4></div>
  <div class="row">
    <div class="col m8 card-panel #e8eaf6 indigo lighten-5">
      <form @submit.prevent="iniciarSesion">
        <div class="row">
          <div class="col m3">
            <b><i class="fa-solid fa-pencil"></i> Product Name</b>
            <input type="text" v-model="formProduct.productName" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <b><i class="fa-solid fa-pencil"></i> Description</b>
            <input type="Text" v-model="formProduct.description" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <b><i class="fa-solid fa-pencil"></i> Stock</b>
            <input type="Text" v-model="formProduct.stock" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <b><i class="fa-solid fa-pencil"></i> Price</b>
            <input type="Text" v-model="formProduct.price" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <b> <i class="fa-solid fa-pencil"></i> Category Id</b>
            <input type="Text" v-model="formProduct.productcategoryId" />
          </div>
        </div>
        <button Class="btn btn-success" @click="createProducts"> <i class="fa-solid fa-circle-check"></i> Add</button>
      </form>
    </div>
  </div>

  <div class="row">
    <div class="col m12">
      <table class="table bordered striped #e3f2fd blue lighten-5">
        <thead>
          <tr>
            <th><i class="fa-solid fa-clipboard-list"></i> Id</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Product Name</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Description</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Stock</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Price</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Category Id</th>
            <th><i class="fa-solid fa-clipboard-list"></i> Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.products" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.productName }}</td>
            <td>{{ item.description }}</td>
            <td>{{ item.stock }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.productCategoryId }}</td>
            <td>
              <button
                Class="btn btn-danger btn-small"
                @click="deleteProducts(item)"
              ><i class="fa-solid fa-circle-minus"></i>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ProductHelper from "../helpers/products-helpers.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  mounted() {
    this.getProducts();
    this.formProduct = {};
  },
  data() {
    return {
      products: [],
      formProduct: {
        productName: "",
        description: "",
        stock: "",
        price: "",
        productCategoryId: "",
      },
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
      // eslint-disable-next-line no-debugger
      let convert = JSON.parse(JSON.stringify(this.formProduct));
      ProductHelper.create(convert)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });

      this.getProducts();

      location.reload();
    },
    deleteProducts(data) {
      // eslint-disable-next-line no-debugger
      debugger;
      let convert = JSON.parse(JSON.stringify(data));
      ProductHelper.delete(convert)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });

      location.reload();
      return null;
    },
  },
};
</script>
