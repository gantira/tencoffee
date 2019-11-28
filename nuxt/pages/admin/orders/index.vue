<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 ">
            <h1 class="h2">Orders</h1>
        </div>

        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Customer Name</th>
                        <th>Payment Method</th>
                        <th>Order Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(order, index) in orders" :key="index">
                        <td>Order#{{ order.order_no }}</td>
                        <td>{{ order.name }}</td>
                        <td>{{ order.payment_method }}</td>
                        <td>{{ order.created_at }}</td>
                        <td>{{ order.confirmed }}</td>
                        <td>
                            <nuxt-link :to="`/admin/orders/${order.id}`" class="btn btn-outline-success btn-sm">View</nuxt-link>
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

        data() {
            return {

            }
        },

        mounted () {
            this.$store.dispatch('orders/getOrders')
        },

        computed: {
            ...mapGetters('orders', ['orders']),
        },

        methods: {
            destroy(order) {
                if (confirm('Are you sure delete this item ?')) {
                   this.$store.dispatch('orders/deleteOrder', order);
                }
            },
            edit(order) {
                this.$store.dispatch('orders/editToggle', order);
            }
        },

    }
</script>


<style lang="scss" scoped>

</style>
