//Import Home Component
import Home from './components/Header.vue'
//Import portfolio/Portfolio Component
import Portfolio from './components/portfolio/Portfolio.vue'
//Import stocks/Stocks Component
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  //Create Route for Home Component with root (/) path
  {
    path: '/', name: 'home', components: {
      default: Home
    } 
  },
    //Create Route for Portfolio Component
  {
    path: '/portfolio', name: 'portfolio', components: {
      default: Portfolio
    } 
  },
  //Create Route for Stocks Component
  {
    path: '/stocks', name: 'stocks', components: {
      default: Stocks
    } 
  },

];