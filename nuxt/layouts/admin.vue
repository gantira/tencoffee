<template>
    <div>
        <Navbar />
        <div class="container-fluid mt-5">
            <div class="row">
                <Sidebar />

                <nuxt />
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/admin/Navbar';
    import Sidebar from '@/components/admin/Sidebar';

    export default {
        layout: 'admin',
        components: {
            Navbar,
            Sidebar,
        },

    };
</script>

<style scoped>
    @import '~/assets/styles/dashboard.css';

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
</style>
