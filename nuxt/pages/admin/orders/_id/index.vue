<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="col-12">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
             <p class="font-weight-bold h4">ORDER#{{ order.order_no }}</p>
        </div>
            <div>
                <div class="row mt-4">
                    <div class="order-received">
                        <ul class="order_details">
                            <li>Nomer order : <br><strong>{{ order.order_no }}</strong></li>
                            <li>Tanggal : <br><strong>{{ order.created_at }}</strong></li>
                            <li>Total : <br><strong>{{ total | money }}</strong></li>
                            <li>Cara pembayaran : <br><strong>{{ order.payment_method }}</strong></li>
                            <li>Status : <br><strong>{{ order.confirmed }}</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-5 ">
                <h5 class="font-weight-bold mb-4">Detil Pesanan</h5>

                <ul class="list-group ">
                    <li class="list-group-item list-order">
                        <div class="row">
                            <div class="col">
                                Produk
                            </div>
                            <div class="col">
                                Total
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item" v-for="(item, index) in this.order.details" :key="index">
                        <div class="row">
                            <div class="col">
                                <nuxt-link :to="`/products/${item.product.id}`">
                                    {{ item.product.name }} - {{ item.grind.name }}, {{ item.size.name }} ×
                                    {{ item.quantity }}
                                </nuxt-link>
                            </div>
                            <div class="col">
                                {{ item.subtotal | money}}
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item list-order" style="background-color: #f7fcfffb">
                        <div class="row">
                            <div class="col">
                                Subtotal:
                            </div>
                            <div class="col">
                                {{ subtotal | money }}
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-order" style="background-color: #f7fcfffb">
                        <div class="row">
                            <div class="col">
                                Pengiriman:
                            </div>
                            <div class="col">
                                {{ order.courier_fee | money }} <small>via {{ order.courier }} - {{ order.courier_type }}</small>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-order" style="background-color: #f7fcfffb">
                        <div class="row">
                            <div class="col">
                                Cara Pembayaran:
                            </div>
                            <div class="col">
                                {{ order.payment_method }}
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item list-order" style="background-color: #f7fcfffb">
                        <div class="row">
                            <div class="col">
                                Total:
                            </div>
                            <div class="col">
                                {{ total | money }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        layout: 'admin',
        name: "checkout",

        computed: {
            ...mapGetters('rajaongkir', ['cities', 'provinces']),
            subtotal() {
                let subtotal = 0
                for (const item of this.order.details) {
                    subtotal += item.subtotal
                }
                return subtotal
            },
            total() {
                return this.subtotal + this.order.courier_fee
            },
        },

        async asyncData ({ $axios, params }) {
            return await $axios.get(`admin/orders/${params.id}`)
                .then(response => {
                    return {
                        order: response.data.order,
                    }
                    console.log(response.data.order)
                })
                .catch(errors => {
                    console.log(errors);
                })
        }
    };
</script>

<style scoped>
.order-received  {
    margin-left: 0px;
    list-style: none;
}

.list-order {
    font-weight: bold;
}

ul.order_details li {
    float: left;
    margin-right: 2em;
    text-transform: capitalize;
    font-size: .715em;
    line-height: 1;
    border-right: 1px dashed #d3ced2;
    padding-right: 2em;
    margin-left: 0;
    list-style-type: none;
}
ul.bank_details li {
    float: left;
    margin-right: 2em;
    font-size: .715em;
    text-transform: uppercase;
    line-height: 1;
    border-right: 1px dashed #d3ced2;
    padding-right: 2em;
    margin-left: 0;
    padding-left: 0;
    list-style-type: none;
}
ul.order_details li strong {
    font-size: 3ch
}
ul.bank_details li strong {
    font-size: 3ch;
    text-transform: capitalize;
}
</style>


