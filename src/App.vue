<template>
  <div class="container">
    <!--Load app-header-->
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition
          name="slide"
          mode="out-in"
        >
          <!--ToDo: Load router-view-->
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
//Import Header Component
import Header from './components/Header.vue'

export default {
  //Initialize Header component and name it appHeader
components: {
  appHeader: Header,
}
  //ToDo: On page creation dispatch 'initStocks' to the vuex $store
}
</script>

<style>
body {
  padding: 30px;
}

/*Create slide-in effect for enter-active*/
/*Create slide-out effect for leave-active*/
.slide-enter-active{
  animation: slide-in 1s ease-out;
}
.slide-leave-active{
  animation: slide-out 1s ease-out;
}
/*Create Keyframes for slide-in, remember to include from and to*/
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(2em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/*Create Keyframes for slide-out, remember to include from and to*/
@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(2em);
  }
}
</style>


