<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">Sizes</h1>
            <button class="btn btn-sm btn-outline-secondary" @click="$router.back()">Back</button>
        </div>

        <p>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample"
                aria-expanded="false" aria-controls="collapseExample">
                New
            </button>
        </p>
        <div class="collapse mb-2" id="collapseExample">
            <div class="card card-body">
                <form class="form-inline" @submit.prevent="submit">
                    <label class="sr-only" for="inlineFormInputName2">Name</label>
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2"
                        placeholder="Input size name" v-model="form.name">

                    <button type="submit" class="btn btn-primary mb-2">+</button>
                </form>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-striped ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Size Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(size, index) in sizes" :key="size.id">
                            <td>{{ index+1 }}</td>
                            <td v-if="!size.toggle">{{ size.name }}</td>
                            <td v-if="!size.toggle">
                                <button @click="edit(size)" class="btn btn-secondary btn-sm">Edit</button>
                                <button @click="destroy(size)" class="btn btn-danger btn-sm">Delete</button>
                            </td>

                            <template v-else>
                                <td>
                                    <input type="text" v-model="size.name" class="form-control form-control-sm" @keydown.enter="update(size)">
                                </td>
                                <td>
                                    <button @click="edit(size)" class="btn btn-link btn-sm">Cancel</button>
                                    <button @click="update(size)" class="btn btn-primary btn-sm">Update</button>
                                </td>
                            </template>
                    </tr>

                </tbody>
            </table>
        </div>
    </main>
</template>
<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        layout: 'admin',

        data() {
            return {
                form: {
                    name: '',
                },
            }
        },

        mounted () {
            this.$store.dispatch('sizes/getSizes')
        },

        computed: {
            ...mapGetters('sizes', ['sizes']),
        },

        methods: {
            submit() {
                this.$store.dispatch('sizes/addSize', this.form);
                this.form = {}
            },
            destroy(size) {
                if (confirm('Are you sure delete this item ?')) {
                   this.$store.dispatch('sizes/deleteSize', size);
                }
            },
            update(size) {
                this.$store.dispatch('sizes/updateSize', size);
                this.$store.dispatch('sizes/editToggle', size);
            },
            edit(size) {
                this.$store.dispatch('sizes/editToggle', size);
            }

        },

    }

</script>
