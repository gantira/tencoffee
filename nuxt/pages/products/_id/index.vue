<template>
    <div>
        <div class="container px-5">
            <div class="row mb-5">
                <div class="col">
                    <div class="images" v-viewer>
                        <img :src="product.image" class="img-fluid"/>
                    </div>
                </div>
                <div class="col mr-4">
                    <h3>
                        <strong>{{ product.name }}</strong>
                    </h3>
                    <h6 class="text-danger">
                        <strong>{{ product.low_price | money}} -- {{ product.high_price | money }}</strong>
                    </h6>

                    <div class="product-features-badges mb-3">
                        <div class="features-badge">
                            <div class="icon-specialty-grade"></div>
                            <div class="features-badge-label">Specialty Grade 1</div>
                        </div>
                        <div class="features-badge">
                            <div class="icon-fresh-roasted"></div>
                            <div class="features-badge-label">Freshly Roasted</div>
                        </div>
                    </div>

                    <div v-html="product.about"></div>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Berat Bersih</th>
                                <th>Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(detail, index) in product.prices" :key="index">
                                <td>Biji/Bubuk {{ detail.name }}</td>
                                <td>
                                    <strong>{{ detail.pivot.price | money }}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table class="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="mb-2">
                                        <p class="font-weight-bold mb-1" style="font-size: 12px">GRIND</p>
                                        <div class="form-check form-check-inline"
                                            v-for="(grind, index) in product.grinds" :key="index">
                                            <input class="form-check-input" type="radio" name="Grind" :id="grind.id"
                                                @change="getGrindName" v-model="form.grind_id" :value="grind.id" />
                                            <label class="form-check-label" :for="grind.id">{{ grind.name }}</label>
                                        </div>
                                    </div>
                                    <div class="mb-2">
                                        <p class="font-weight-bold mb-1" style="font-size: 12px">UKURAN</p>
                                        <div class="form-check form-check-inline"
                                            v-for="(size, index) in product.prices" :key="index">
                                            <input class="form-check-input" type="radio" name="ukuran" :id="size.name"
                                                v-model="form.size_id" @change="getPrice" :value="size.id" />
                                            <label class="form-check-label" :for="size.name">{{ size.name }}</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div class="form-group row">
                                        <label for="jumlah"
                                            class="col-sm-2 col-form-label font-weight-bold">Jumlah</label>
                                        <div class="col-sm-3" style="max-width: 75px;">
                                            <input type="number" class="form-control form-control-sm"
                                                id="jumlah" v-model="form.quantity" min="1" value="1" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button class="btn btn-danger btn-block font-weight-bold" @click="beli">BELI SEKARANG</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <img src="/payment-badge.png" alt class="align-center" />
                    <nav class="mt-3 mb-2">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                                role="tab" aria-controls="nav-home" aria-selected="true">DESKRIPSI</a>
                            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                role="tab" aria-controls="nav-profile" aria-selected="false">ESTIMASI ONGKOS KIRIM</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <div v-html="product.description"></div>
                        </div>
                        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <table class="table table-bordered">
                                <tbody>
                                    <tr style="min-width: 100px;">
                                        <td class="font-weight-bold">Jumlah</td>
                                        <td>
                                            <input type="number" class="form-control form-control-sm" value="1" min="1"
                                                style="max-width: 45px;" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="font-weight-bold">Tujuan</td>
                                        <td>
                                            <div class="form-group">
                                                <label class="font-weight-bold text-black-50 mb-0">PROVINSI</label>
                                                <select v-model="province_id" class="form-control form-control-sm"
                                                    @change="fetchCitiesByProvince">
                                                    <option :value="province.province_id" v-for="province in provinces"
                                                        :key="province.province_id">{{ province.province }}</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label class="font-weight-bold text-black-50 mb-0">KOTA/KAB</label>
                                                <select v-model="city_id" class="form-control form-control-sm"
                                                    @change="cekOngkir">
                                                    <option :value="city.city_id" v-for="city in cities"
                                                        :key="city.city_id">{{ city.type.substring(0,3) }}.
                                                        {{ city.city_name }}</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr v-if="!services">
                                        <td class="font-italic text-center" colspan="2">Pilih tujuan pengiriman</td>
                                    </tr>
                                    <tr v-else v-for="service in services" :key="service">
                                        <td class="align-middle" height="70">
                                            <img src="/jne.svg" alt="" width="70px" v-if="service[0]['code'] == 'jne'">
                                            <img src="/tiki.svg" alt="" width="70px"
                                                v-if="service[0]['code'] == 'tiki'">
                                            <img src="/pos.svg" alt="" width="70px" v-if="service[0]['code'] == 'pos'">
                                        </td>
                                        <td class="align-middle">
                                            <div class="d-flex justify-content-between" v-if="service[0]['code']">
                                                <div>
                                                    {{ service[0].costs[0]['service'] }}
                                                    ({{ service[0].costs[0]['description'] }})
                                                </div>
                                                <div class="font-weight-bold">
                                                    {{ service[0].costs[0]['cost'][0]['value'] | money}}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-md-10 offset-1 mt-5">
                <h3 class="text-center mb-5 font-weight-bold">Produk Lainnya</h3>

                <div class="card-columns">
                    <div class="card" v-for="(product, index) in products" :key="index">
                        <nuxt-link :to="`/products/${product.id}`">
                            <img :src="product.image" class="card-img" alt="">
                        </nuxt-link>
                        <div class="card-body">
                            <h5 class="card-title text-nowrap">
                                <nuxt-link :to="`/products/${product.id}`">
                                    {{ product.name }}
                                </nuxt-link>
                            </h5>
                            <p class="card-text"><strong>{{ product.high_price | money }}</strong></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import {
        mapGetters
    } from 'vuex'

    export default {
        name: "our-coffee",

        components: {
            Footer
        },

        data() {
            return {
                product: Object,
                province_id: Number,
                city_id: Number,
                services: Object,
                form: {
                    product_id: Number (this.$route.params.id),
                    product_name: String,
                    price: null,
                    grind_id: null,
                    grind_name: String,
                    size_id: null,
                    size_name: String,
                    quantity: Number (1),
                    image: String
                },
            };
        },

        async asyncData({$axios,params}) {
            return await $axios.get(`/admin/products/${params.id}`)
                .then(response => {
                    return {
                        product: response.data.data
                    }
                })
        },

        mounted() {
            this.$store.dispatch('products/getProducts');
            !this.provinces.length ? this.$store.dispatch('rajaongkir/fetchProvince') : '';
            this.getProductName();
            this.getImageProduct();
        },

        computed: {
            ...mapGetters('rajaongkir', ['cities', 'provinces']),
            ...mapGetters('products', ['products']),
            ...mapGetters('cart', ['cart', 'cartCount', 'totalPrice']),

            formValid() {
                return this.form.grind_id && this.form.size_id ? true : false
            }
        },

        methods: {
            fetchCitiesByProvince() {
                this.$store.dispatch('rajaongkir/fetchCitiesByProvince', this.province_id);
            },
            async cekOngkir() {
                let {
                    data
                } = await this.$axios.get(`cekongkir/${this.city_id}`)
                this.services = data.services
            },
            beli() {
                if (this.form.grind_id && this.form.size_id) {
                    this.$store.dispatch('carts/addToCart', this.form)
                    this.$router.push('/cart')
                }
            },
            getImageProduct() {
                this.form.image = this.product.image
            },
            getProductName() {
                this.form.product_name = this.product.name
            },
            getGrindName() {
                this.form.grind_name = this.product.grinds.find(product => product.id == this.form.grind_id).name
            },
            getSizeName() {
                this.form.size_name = this.product.prices.find(product => product.id == this.form.size_id).name
            },
            getPrice() {
                this.form.price = this.product.prices.find(product => product.id == this.form.size_id).pivot.price
                this.getSizeName()
            },

        },



    };

</script>

<style  scope>
    .card-columns {
        @include media-breakpoint-only(lg) {
            column-count: 4;
        }

        @include media-breakpoint-only(xl) {
            column-count: 5;
        }
    }

</style>
