<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <!--Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text-->
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <!--Create router-link that goes to '/portfolio' -->
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Portfolio text-->
              <li>
                <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
              </li>
          <!--Create router-link that goes to '/stocks' -->
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Stocks text-->
               <li>
                <router-link to="/stocks" tag="li" active-class="active"><a>Stocks</a></router-link>
              </li>
        </ul>
        <strong class="navbar-text navbar-right">Funds:
          <!--Call funds computed function and pipe the currency filter that is created in main.js-->
          {{ funds | currency}}
        </strong>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <!--Add click event to <a> that calls endDay method-->
            <a href="#" @click="endDay">End Day</a>
          </li>

          <!--Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
          <!--Add click event that toggles isDropdownOpen to true and false-->
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              :class="{ open: isDropDownOpen }"
              @click="isDropdownOpen = !isDropdownOpen"
            >Save & Load <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <!--Add click event that calls the saveData method-->
              <li><a href="#" @click="saveData">Save Data</a></li>
              <!--Add click event that calls the loadData method-->
              <li><a href="#" @click="loadData">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//Import mapActions from vuex
import mapActions from 'vuex'

export default {
  data () {
    return {
      //Create data object called isDropdownOpen and set it to false
      isDropdownOpen: false,
    }
  },
  computed: {
    //Create a computed function called funds
    //Have funds() return this.$store.getters.funds
    funds() {
      return this.$store.getters.funds
    }
  },
  methods: {
    //Create ...mapActions method
    //Call randomizeStocks: 'randomizeStocks'
    //Call fetchData: 'loadData'
    ...mapActions ({
      randomizeStocks: 'randomizeStocks',
      fetchData: 'loadData'
    }),

    //Create endDay method
    //Call randomizeStocks()
    endDay(){
      return randomizeStocks()
    },

    //Create SaveData method
    //Create const called data that holds an object
    //Set funds: to the $store getters funds
    //Set stockPortfolio: to the $store getters stockPortfolio
    //Set stocks: to the $store getters stocks
    //ToDo: Outside the data object use $http, using .put pass 'data.json' and the data object
    saveData(){
      const data = {
        funds: $store.getters.funds,
        stockPortfolio: $store.getters.stockPortfolio,
        stocks: $store.getters.stocks
      }
      $http.put('data.json', data)
    },

    //Create loadData method
    //Call fetchData()
    loadData () {
      fetchData()
    }
  }
}
</script>