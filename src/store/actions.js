//Import vue and name it Vue
import Vue from 'vue'
export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(response => response.json())
    .then(data => {
      if (data) {
        //Create const call stocks that is equal to data.stocks
        const stocks = data.stocks
        //Create const call funds that is equal to data.funds
        const funds = data.funds
        //Create const call stockPortfolio that is equal to data.stockPortfolio
        const stockPortfolio = data.stockPortfolio
        //Create a const called portfolio that is a data object {}
        const portfolio = {
          stockPortfolio, 
          funds
        }
        //Inside portfolio add stockPortfolio and funds

        //using vuex commit method pass 'SET_STOCKS' and stocks
        commit(types.SET_STOCKS, stocks)
        //using vuex commit method pass 'SET_PORTFOLIO' and portfolio
        commit(types.SET_PORTFOLIO, portfolio)
      }
    });
};