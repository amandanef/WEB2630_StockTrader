<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    <!--Display the stock.name data object-->
                    {{ stock.name }}
                    <!--Inside <small> tags display Price: stock.price | Quantity stock.quantity-->
                        <small>
                            {{ stock.price | stock.quantity }}
                        </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <!--Inside input use v-model.number and pass quantity-->
                        <!--Bind to class using : and pass object called danger that takes in insufficientQuantity-->
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model.number = "quantity"
                            :class="{ danger: insufficientQuantity}"
                            >
                </div>
                <div class="pull-right">
                    <!--Inside the button add a click event that calls sellStock-->
                        <!--Bind to disabled using : and set it equal to insufficientQuantity || quantity is less than or equal to 0 || !Number.isInteger(quantity)-->
                    <button class="btn btn-success" @click="sellStock" 
                        :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
                    >
                        <!--Display insufficientQuantity data object and add if using ? 'Not Enough' else 'Sell'-->
                        {{ insufficientQuantity ? 'Not Enough' : 'Sell' }}
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
    //Import mapActions from vuex
    import mapActions from 'vuex'

    export default {
        //Set props equal to stock using array syntax
        props: [stock],
        data() {
            return {
                //Create data object called quantity and set it to 0
                quantity: 0,
            }
        },
        computed: {
            //Create a computed function called insufficientQuantity
                //Have insufficientQuantity() return this.quantity > this.stock.quantity
                insufficientQuantity() {
                    return this.quantity > this.stock.quantity
                }
        },
        methods: {
            //Create ...mapActions method
                //Call placeSellOrder: 'sellStock'
                ...mapActions ({
                    placeSellOrder: 'sellStock'
                }),
            sellStock () {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }
                this.placeSellOrder(order);
                this.quantity = 0;
            }
            //Create sellStock method
                //Create const called order that holds an object
                    //Set stockId: to this.stock.id
                    //Set stockPrice: to this.stock.price
                    //Set quantity: to this.quantity
            //Outside the data object pass the data object order to placeSellOrder()
            //Reset quantity to 0
        }
    }
</script>