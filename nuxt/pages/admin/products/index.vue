<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
            <h1 class="h2">Products</h1>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group mr-2">
                    <nuxt-link to="products/grinds" class="btn btn-sm btn-outline-secondary">Grind</nuxt-link>
                    <nuxt-link to="products/sizes" class="btn btn-sm btn-outline-secondary">Size</nuxt-link>
                </div>
                <nuxt-link to="products/new" class="btn btn-sm btn-outline-secondary">New Product</nuxt-link>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coffe Name</th>
                        <th>Grind</th>
                        <th>Created At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in products" :key="index">
                        <td>{{ index+1 }}</td>
                        <td>{{ product.name }}</td>
                        <td>
                            <span v-for="(grind, index) in product.grinds" :key="index" class="badge badge-info mr-1">{{ grind.name }}</span>
                        </td>
                        <td>{{ product.created_at }}</td>
                        <td>
                            <button>Edit</button>
                            <button @click="destroy(product)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        layout: 'admin',

        mounted () {
            this.$store.dispatch('products/getProducts')
        },

        computed: {
            ...mapGetters('products', ['products']),
        },

        methods: {
            destroy(product) {
                if (confirm('Are you sure delete this item ?')) {
                   this.$store.dispatch('products/deleteProduct', product);
                }
            },
            edit(product) {
                this.$store.dispatch('products/editToggle', product);
            }
        },

    }
</script>


<style lang="scss" scoped>

</style>
