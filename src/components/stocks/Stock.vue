<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          <!--Display the stock.name data object-->
          {{ stock.name }}
          <!--Inside <small> tags display Price: stock.price-->
            <small>{{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <!--Inside input use v-model.number and pass quantity-->
          <!--Bind to class using : and pass object called danger that takes in insufficientFunds-->
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number = "quantity"
            :class="{ danger: insufficientFunds }"
          >
        </div>
        <div class="pull-right">
          <!--Inside the button add a click event that calls buyStock-->
          <!--Bind to disabled using : and set it equal to insufficientFunds || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
          <button @click="buyStock" 
          class="btn btn-success"
          :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
          >
            <!--Display insufficientFunds data object and add if using ? 'Not Enough' else 'Buy'-->
          {{ insufficientFunds ? 'Not Enough' : 'Buy'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>

<script>
export default {
  //Set props equal to stock using array syntax
    props: ['stock'],
  data () {
    return {
      //Create data object called quantity and set it to 0
      quantity: 0,
    }
  },
  computed: {
    //Create a computed function called funds
    //Have funds() return $store.getters.funds
    funds() {
      return this.$store.getters.funds
    },
    //Create a computed function called insufficientFunds
    //Have insufficientFunds() return this.quantity * this.stock.price > this.funds
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    }
  },
  methods: {
    //Create buyStock method
    //Create const called order that holds an object
    //Set stockId: to this.stock.id
    //Set stockPrice: to this.stock.price
    //Set quantity: to this.quantity
    //Outside the data object $store.dispatch() passing 'buyStock' and order
    //Reset quantity to 0
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity,
      };
      this.$store.dispath('buystock', order);
      this.quantity = 0;
    }
  }
}
</script>