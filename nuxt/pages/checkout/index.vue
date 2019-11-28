<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="font-weight-bold">Checkout</h2>
                <div class="card border-left-0 border-right-0 border-bottom-0 border-info" style="border-radius: 0; border-width: 3px;">
                    <div class="card-header border-0">
                        <i class="fas fa-award"></i> Punya Kode Promo atau Kupon? <a class="text-danger" data-toggle="collapse" href="#collapseCoupon" role="button" aria-expanded="false" aria-controls="collapseExample">Klik
                            disini untuk memasukkan kode promo</a>
                    </div>
                    <!-- <ul class="list-group list-group-flush">
                        <li class="list-group-item"></li>
                    </ul> -->
                </div>
            </div>

            <div class="col-12 mt-4">
                <div class="row">
                    <div class="col">

                    <div class="collapse my-3" id="collapseCoupon">
                    <div class="card card-body py-5">
                        <div class="row">
                            <div class="col">
                                <label for="coupon" class="mb-3">Masukkan kode kupon di bawah ini.</label>
                                <div class="d-flex justify-content-start row">
                                    <div class="col-6 mr-5">
                                        <input type="text" class="form-control " placeholder="Kode kupon">
                                    </div>

                                    <button class="btn btn-secondary">PAKAI KUPON</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    </div>
                    </div>
                </div>
                    <form @submit.prevent="checkout">
                <div class="row">
                    <div class="col-6">
                        <div class="card">
                            <div class="card-header font-weight-bold">
                                TUJUAN PENGIRIMAN
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="form-group">
                                        <label for="name">Nama Depan <span class="text-danger">*</span></label>
                                        <input v-model="order.name" type="text" class="form-control" id="name">
                                    </div>
                                    <div class="form-group">
                                        <label for="country" class="">Negara <span class="text-danger">*</span></label>
                                        <br>
                                        <input v-model="order.country" type="hidden" class="form-control" id="country">
                                        <strong>Indonesia</strong>
                                    </div>
                                    <div class="form-group">
                                        <label for="provinsi">Provinsi <span class="text-danger">*</span></label>
                                        <select v-model="order.province" class="form-control form-control-sm"
                                                    @change="fetchCitiesByProvince">
                                                    <option :value="province.province_id" v-for="province in provinces"
                                                        :key="province.province_id">{{ province.province }}</option>
                                                </select>

                                    </div>
                                    <div class="form-group">
                                        <label for="city">Kota / Kab. <span class="text-danger">*</span></label>
                                        <select v-model="order.city" class="form-control form-control-sm"
                                            @change="cekOngkir"><option :value="city.city_id" v-for="city in cities"
                                                :key="city.city_id">{{ city.type.substring(0,3) }}.
                                                {{ city.city_name }}</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="address">Alamat <span class="text-danger">*</span></label>
                                        <input v-model="order.address" type="text" id="address" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="zip_code">Kode Pos (optional)</label>
                                        <input v-model="order.zip_code" type="text" id="zip_code" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Telepon <span class="text-danger">*</span></label>
                                        <input v-model="order.phone" type="text" id="phone" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Alamat Email <span class="text-danger">*</span></label>
                                        <input v-model="order.email" type="text" id="email" class="form-control">
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="card mt-4">
                            <div class="card-header font-weight-bold">
                                INFORMASI TAMBAHAN
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">
                                    <div class="form-group">
                                        <label for="note">Catatan khusus (optional) </label>
                                        <textarea v-model="order.note" name="note" id="note" rows="3" class="form-control"
                                            placeholder="Catatan atau instruksi khusus atas pesanan Anda."></textarea>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div class="col-6">
                        <div class="card border-top" style="border-width: 2px;">
                            <div class="card-header font-weight-bold">
                                PESANAN ANDA
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" v-for="(item, index) in carts" :key="index">
                                    <div class="d-flex">
                                        <div class="mr-3">
                                                <img :src="item.image"  alt="" class="img-fluid" width="80px" data-aos="fade" >
                                        </div>
                                        <div class="align-middle ">
                                            <p><strong>{{ item.product_name }} - {{ item.grind_name }}, {{ item.size_name }} </strong><br>
                                                <span class="text-muted">x {{ item.quantity }}</span> <br>
                                                <span class="text-success">{{ item.price | money}} </span><br>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-5">
                                            <label for="" class="text-muted font-weight-bold">
                                                <p>SUBTOTAL</p>
                                            </label>
                                        </div>
                                        <div class="col-7" data-aos="zoom-out" data-aos-once="true">
                                            <p>{{ subTotal | money }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-5">
                                            <label for="" class="text-muted font-weight-bold">
                                                <p>KURIR PENGIRIMAN</p>
                                            </label>
                                        </div>
                                        <div class="col-7" v-if="services">
                                            <div class="form-check" v-for="(service, index) in services" :key="index"  data-aos="zoom-out" data-aos-once="true">
                                                <input v-model="order.courier" class="form-check-input" type="radio" @change="order.courier_fee = service[0].costs[0]['cost'][0]['value'], order.courier_type = service[0].costs[0]['service']" :id="index"  :value="service[0]['code']">

                                                <label class="form-check-label " :for="index" :title="service[0]['code']">
                                                    <small class="font-weight-bold" style="font-size: 14px">{{ service[0]['code'].toUpperCase() }} - {{ service[0].costs[0]['service'] }}: {{ service[0].costs[0]['cost'][0]['value'] | money }}</small>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-7" v-else>
                                            <p>Masukkan alamat pengiriman untuk melihat opsi ongkos kirim.</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row">
                                        <div class="col-5">
                                            <label for="" class="text-muted font-weight-bold">
                                                <p>TOTAL TAGIHAN</p>
                                            </label>
                                        </div>
                                        <div class="col-7" data-aos="zoom-out" data-aos-once="true"   >
                                            <p class="font-weight-bold h6">{{ total | money }}</p>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item" >
                                    <div class="row">
                                        <div class="col-5">
                                            <label for="" class="text-muted font-weight-bold">
                                                <p>PEMBAYARAN</p>
                                            </label>
                                        </div>
                                        <div class="col-7">
                                            <div class="form-check" v-for="payment in optionPayment" :key="payment" >
                                                <input class="form-check-input" type="radio" name="exampleRadios"
                                                    :id="payment" v-model="order.payment_method" :title="payment" :value="payment">
                                                <label class="form-check-label" :for="payment">
                                                    <small class="text-muted font-weight-bold">{{ payment }}</small>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item" style="border-width: 2px;">
                                    <button type="submit" class="btn btn-block btn-danger font-weight-bold">PESAN SEKARANG
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-3 text-center w-100">
                            <img src="/payment-badge.png" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "checkout",

        computed: {
            ...mapGetters('carts', ['carts']),
            ...mapGetters('rajaongkir', ['cities', 'provinces']),
            subTotal() {
                let total = 0
                for (const item of this.carts) {
                    total += item.subtotal
                }
                return total
            },
            total() {
                let total = 0
                for (const item of this.carts) {
                    total += item.subtotal
                }
                return total + this.order.courier_fee
            },
        },

        data() {
            return {
                services: null,
                optionPayment: [
                    'BANK TRANSFER', 'CREDIT CARD/GO-PAY'
                ],
                order: {
                    name: null,
                    country: 'Indonesia',
                    order_no: 'TC',
                    province: null,
                    city: null,
                    address: null,
                    zip_code: null,
                    phone: null,
                    email: null,
                    note: null,
                    payment_method: null,
                    courier: null,
                    courier_fee: 0,
                    courier_type: '',
                },
            }
        },

        mounted () {
            !this.provinces.length ? this.$store.dispatch('rajaongkir/fetchProvince') : '';
        },

        methods: {
            fetchCitiesByProvince() {
                this.$store.dispatch('rajaongkir/fetchCitiesByProvince', this.order.province);
            },
            async cekOngkir() {
                let { data } = await this.$axios.get(`cekongkir/${this.order.city}`)
                this.services = data.services
            },
            async checkout() {
                const data = Object.assign(this.order, {carts:this.carts})

                await this.$axios.post(`admin/orders`, data)
                .then(response => {
                    console.log(response.data);

                    this.$router.push(`/checkout/order-received/${response.data.order.id}`)
                    this.$store.dispatch('carts/clearCart')
                })
                .catch(errors => {
                    console.log(errors);
                })

            },


        },



    };


</script>
