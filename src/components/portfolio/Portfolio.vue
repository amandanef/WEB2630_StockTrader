<template>
  <div>
    <!--Load app-stock component-->
    <app-stock v-for="stock in stocks" :key="stock" :stock = "stock"></app-stock>
    <!--Loop through stock in stocks using v-for-->
    <!--Bind to stock using : and pass stock from the v-for-->
  </div>
</template>

<script>
//Import mapGetters from vuex
//Import Stock from ./Stock.vue
import Stock from './Stock.vue'
import { mapGetters } from 'vuex'

export default {
    //Initialize Stock component and name it appStock
  components: {
    appStock: Stock,
  },
  computed: {
    //Create ...mapGetters method
    //Call stocks: 'stockPortfolio'
    ...mapGetters ([
      'stockPortfolio'
    ])
  },

}
</script>