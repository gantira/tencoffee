<template>
    <main role="main" class="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 class="h2">New Product</h1>
            <button class="btn btn-sm btn-outline-secondary" @click="$router.back()">Back</button>
        </div>
        <form @submit.prevent="submit">
            <div class="row">
                <div class="col-7">
                    <div class="form-group">
                        <input v-model="product.name" type="text" class="form-control" placeholder="Product Name">
                    </div>
                    <div class="form-group">
                        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="product.description"
                            :placeholder="'Product Description'" @image-removed="handleImageRemoved"></vue-editor>

                    </div>
                    <div class="form-group">
                        <vue-editor useCustomImageHandler @image-added="handleImageAdded" v-model="product.about"
                            :placeholder="'About Product'" @image-removed="handleImageRemoved"></vue-editor>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">ADD PRODUCT</button>
                    </div>
                </div>
                <div class="col ">
                    <div class="form-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="customFile" @change="onImageChange">
                            <label class="custom-file-label" for="customFile" v-html="product.image.name">Choose
                                file</label>
                        </div>
                        <div>
                            <img v-if="url" :src="url" class="img-fluid mt-2 img-thumbnail" />
                        </div>
                    </div>
                    <div class="form-group ">
                        <select name="grind" id="grind" class="form-control" v-model="product.grind" multiple>
                            <option :value="grind.id" v-for="grind in grinds" :key="grind.id">{{ grind.name }}</option>
                        </select>
                    </div>
                    <div class="form-group ">
                        <select name="size" id="size" class="form-control" v-model="sizeOption" multiple
                            @change="addHarga">
                            <option :value="size.id" v-for="size in sizes" :key="size.id">{{ size.name }}</option>
                        </select>
                        <div class="input-group mt-2" v-for="(size, index) in product.prices" :key="index">
                            <div class="input-group-prepend text-center">
                                <span class="input-group-text">Rp</span>
                            </div>
                            <input type="text" class="form-control" v-model="size.price" aria-label="Input harga"
                                placeholder="Input harga">
                            <div class="input-group-append">
                                <span class="input-group-text"
                                    style="width: 80px">@{{ findSize(size.size_id).name }}</span>
                            </div>
                            <div class="input-group-prepend">
                                <button class="btn btn-sm btn-outline-secondary" type="button"
                                    @click.prevent="product.prices.splice(index, 1)">X</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </main>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'

    export default {
        layout: 'admin',

        data() {
            return {
                sizeId: '',
                sizeOption: [],
                product: {
                    name: '',
                    about: '',
                    description: '',
                    prices: [],
                    grind: [],
                    size_id: [],
                    image: {
                        name: 'Choose file'
                    }
                },
                content: '',
                customToolbar: [
                    ['bold', 'italic', 'underline'],
                    [{
                        'list': 'ordered'
                    }, {
                        'list': 'bullet'
                    }],
                    ['image', 'code-block']
                ],
                url: ''
            }
        },

        mounted() {
            !this.grinds.length ? this.$store.dispatch('grinds/getGrinds') : '';
            !this.sizes.length ? this.$store.dispatch('sizes/getSizes') : '';
        },

        computed: {
            ...mapGetters('grinds', ['grinds']),
            ...mapGetters('sizes', ['sizes']),
        },

        methods: {
            addHarga() {
                for (let i = 0; i < this.sizeOption.length; i++) {
                    if (this.product.prices && this.product.prices.find(price => price.size_id === this.sizeOption[i]))
                        return

                    this.product.prices.push({
                        size_id: this.sizeOption[i],
                        price: 0
                    })

                }
            },
            submit() {
                let formData = new FormData();
                formData.append('name', this.product.name);
                formData.append('about', this.product.about);
                formData.append('description', this.product.description);
                formData.append('prices', JSON.stringify(this.product.prices));
                formData.append('grind', JSON.stringify(this.product.grind));
                formData.append('image', this.product.image);

                this.$store.dispatch('products/addProduct', formData);
            },
            handleImageAdded(file, Editor, cursorLocation, resetUploader) {
                var formData = new FormData();
                formData.append("image", file);

                this.$axios.post('/add-images', formData)
                    .then(result => {
                        let url = result.data.url; // Get url from response
                        Editor.insertEmbed(cursorLocation, "image", url);
                        resetUploader();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            handleImageRemoved(file, Editor, cursorLocation, resetUploader) {
                this.$axios.post('/remove-images', {
                        image: file
                    })
                    .then(response => {
                        console.log(response);
                        resetUploader();
                    })
                    .catch(err => {
                        console.log(err);
                    });

            },
            onImageChange(e) {
                const file = e.target.files[0];
                this.product.image = file;
                this.url = URL.createObjectURL(file);
            },
            findSize(id) {
                return this.sizes.find((size) => size.id == id)
            }
        },

    }

</script>
