<template>
  <nav>
    <li><router-link to="/Products">Create Product</router-link></li>
  </nav>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="CreateCategory">
        <div class="row">
          <div class="col m3">
            <label>Category</label>
            <input type="text" v-model="formProductCategory.category" />
            <button Class="btn btn-success" @click="createProductsCategory">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="col m12">
      <table class="table bordered striped #e3f2fd blue lighten-5">
        <thead>
          <tr>
            <th>Category</th>
            <th>Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.productsCategory" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.category }}</td>
            <td>
              <button
                Class="btn btn-danger btn-small"
                @click="deleteProductsCategory(data)"
              >
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
import ProductCategoryHelper from "../helpers/productCategory-helper.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ProductCategory",
  mounted() {
    this.getProductsCategory();
    this.formProductCategory = {};
  },
  data() {
    return {
      productsCategory: [],
      formProductCategory: {
        category: "",
      },
    };
  },
  methods: {
    getProductsCategory() {
      ProductCategoryHelper.getAllProductCategory()
        .then((response) => {
          this.productsCategory = response.data;
          console.log(this.productsCategory);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    createProductsCategory() {
      // eslint-disable-next-line no-debugger
      let convert = JSON.parse(JSON.stringify(this.formProductCategory));
      ProductCategoryHelper.createProductCategory(convert)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteProductsCategory(data) {
      // eslint-disable-next-line no-debugger
      debugger;
      let convert = JSON.parse(JSON.stringify(data));
      ProductCategoryHelper.deleteProductCategory(convert)
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
