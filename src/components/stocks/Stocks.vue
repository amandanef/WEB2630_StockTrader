<template>
  <div>
    <!--Load app-stock component-->
    <appStock v-for="stock in stocks" :key="stock" :stock = "stock">
    </appStock>
    <!-- Loop through stock in stocks using v-for-->
    <!-- Bind to stock using : and pass stock from the v-for-->
  </div>
</template>

<script>
//Import Stock from ./Stock.vue
import Stock from './Stock.vue'

export default {
  //Initialize Stock component and name it appStock
  components:{
    appStock: Stock,
  },
  computed: {
    //Create stocks computer method
    //Return $store.getters.stocks
    stocks () {
      return $store.getters.stocks
    }
  }
}
</script>