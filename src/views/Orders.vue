<template>
  <nav>
    <li><router-link to="/ProductCategory">Create Category</router-link></li>
    <li><router-link to="/Products">Create Product</router-link></li>
  </nav>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="addOrder">
        <div class="row">
          <div class="col m3">
            <label>Id</label>
            <input type="text" v-model="formOrders.id" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Total</label>
            <input type="Text" v-model="formOrders.total" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button class="btn" type="submit">Add Order</button>
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
              <button
                Class="btn btn-danger btn-small"
                @click=" QuitOrder(data)"
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
