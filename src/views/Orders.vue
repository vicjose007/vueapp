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
      <router-link to="/ProductCategory">
        <i class="fa-solid fa-circle-plus"></i> Create Category</router-link
      >
    </li>
    <li>
      <router-link to="/Products">
        <i class="fa-solid fa-circle-plus"></i> Create Product</router-link
      >
    </li>
  </nav>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="addOrder">
        <div class="row">
          <div class="col m3">
            <label><i class="fa-solid fa-pencil"></i> Id</label>
            <input type="text" v-model="formOrders.id" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label><i class="fa-solid fa-pencil"></i> Total</label>
            <input type="Text" v-model="formOrders.total" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button class="btn" type="submit"><i class="fa-solid fa-circle-check"></i> Add Order</button>
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
            <th>OrderId</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in this.productsCategory" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.total }}</td>
            <td>
              <button Class="btn btn-danger btn-small" @click="QuitOrder(data)">
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
import OrderHelper from "../helpers/orders-helpers.js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Order",
  data() {
    return {
      formOrders: {
        id: "",
        total: "",
      },
    };
  },
  methods: {
    AddOrder() {
      // eslint-disable-next-line no-debugger
      let convert = JSON.parse(JSON.stringify(this.formOrders));
      OrderHelper.createOrder(convert)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });

      location.reload();
    },
    QuitOrder(data) {
      // eslint-disable-next-line no-debugger
      debugger;
      let convert = JSON.parse(JSON.stringify(data));
      OrderHelper.deleteOrder(convert)
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
