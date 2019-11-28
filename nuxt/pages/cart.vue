<template>
    <div class="container">
        <div v-if="!carts.length" class="d-flex align-items-center flex-column p-4">
            Keranjang Anda masih kosong. {{ carts.length }}
            <nuxt-link to="/our-coffee" class="btn btn-outline-secondary mt-3">RETURN TO SHOP</nuxt-link>
        </div>

        <div v-else>
            <div class="row">
                <div class="col-8">
                    <div class="card">
                        <div class="card-header font-weight-bold">
                            KERANJANG KOPI ANDA
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-inline-flex" v-for="cart in carts" :key="cart.id">

                                <div class="col-md-2">
                                    <nuxt-link :to="`/products/${cart.product_id}`">
                                        <img :src="cart.image" alt="" class="img-fluid" data-aos="fade" data-aos-delay="5" data-aos-once="true">
                                    </nuxt-link>
                                </div>
                                <div class="col-lg-6">
                                    <nuxt-link :to="`/products/${cart.product_id}`">{{ cart.product_name }} -
                                        {{ cart.grind_name }}, {{ cart.size_name }}</nuxt-link> -- {{ cart.price | money }}
                                    <br>
                                    <span @click="removeFromCart(cart)" class="text-muted"
                                        style="cursor: pointer;"><small>Hapus</small></span>
                                </div>
                                <div class="col">
                                    <input type="number" class="form-control form-control-sm" id="jumlah" min="1"
                                        value="1" v-model="cart.quantity" style="max-width: 50px;" @input="updateCart(cart)"/>
                                </div>
                                <div class="col">
                                    {{ cart.subtotal | money }}
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="card-header font-weight-bold">
                            TOTAL BELANJA
                        </div>
                        <ul class="list-group list-group-flush ">
                            <li class="list-group-item">
                                <div class="d-flex justify-content-between">
                                    <p class="text-muted font-weight-bold">SUBTOTAL</p>
                                    <p style="font-size: 14px">{{ total | money }}</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <p class="text-muted font-weight-bold">TOTAL</p>
                                    <p style="font-size: 15px"><strong>{{ total | money }}</strong></p>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <nuxt-link to="/checkout" class="btn btn-danger btn-block font-weight-bold">KONFIRMASI
                                    PENGIRIMAN</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <img src="/payment-badge.png" alt="" class="img-fluid mt-3">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: "cart",

        computed: {
            ...mapGetters('carts', ['carts']),

            total() {
                let total = 0
                for (const item of this.carts) {
                    total += parseInt(item.subtotal)
                }

                return total

            },
        },

        methods: {
            removeFromCart(cart) {
                this.$store.dispatch('carts/removeFromCart', cart)
            },
            updateCart(cart) {
                this.$store.dispatch('carts/updateCart', cart)
            }
        },

    };

</script>
