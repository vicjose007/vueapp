<template>
  <div>products</div>
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
            <tr v-for="products in products" v-bind:key="products"></tr>
            <td>{{products.Id}}</td>
            <td>{{products.ProductName}}</td>
            <td>{{products.Description}}</td>
            <td>{{products.Stock}}</td>
            <td>{{products.Price}}</td>
            <td>{{products.Category}}</td>
            <td class="center"><a href="#!">Delete</a></td>

        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Products",
  data() {
    return {
      products: [],
      ProductName: "",
      Description:"",
      Stock:"",
      Price:0,
      Category:""

    };
  },
  async mounted() {
    await this.axios.get("https://localhost:7090/swagger/index.html").then((response) => {
      this.products = response.data;
    });
  },
};
</script>
