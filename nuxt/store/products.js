export const state = () => ({
    products: [],
    product: [],
})

export const getters = {
    products(state) {
        return state.products
    },
    product(state) {
        return state.product
    },
}

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    },
    DELETE_PRODUCT(state, id) {
        let index = state.products.findIndex(product => product.id == id)
        state.products.splice(index, 1)
    },
    ADD_PRODUCT(state, product) {
        state.products.push(product)
    },
    SHOW_PRODUCT(state, product) {
        state.product = product
    },
    UPDATE_PRODUCT(state, payload) {
        state.products = state.products.map(product => {
            if (product.id === payload.id) {
              return Object.assign({}, product, payload.data)
            }
            return product
        })
    },
    EDIT_TOGGLE(state, payload) {
        payload.toggle = !payload.toggle
    }
}

export const actions = {
    async getProducts({commit}) {
        let {data} = await this.$axios.get('/admin/products')
        commit('SET_PRODUCTS', data.data)
    },
    async deleteProduct({commit}, product) {
        await this.$axios.delete(`/admin/products/${product.id}`)
            .then(() => {
                this.$toast.info('Delete Successfully!', {icon : 'check'})
                commit('DELETE_PRODUCT', product.id)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    async addProduct({commit}, product) {
        await this.$axios.post(`/admin/products`, product)
            .then(response => {
                this.$toast.success('Add Successfully!', {icon : 'check'})
                this.$router.push('/admin/products')
                // commit('ADD_PRODUCT', response.data.product)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async updateProduct({commit}, payload) {
        await this.$axios.patch(`/admin/products/${payload.id}`, payload)
            .then(() => {
                this.$toast.success('Update Successfully!', {icon : 'check'})
                this.$router.push('/admin/products')
                // commit('UPDATE_PRODUCT', payload)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async showProduct({commit}, product) {
        await this.$axios.get(`/admin/products/${product}`)
            .then(response => {
                commit('SHOW_PRODUCT', response.data.data)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    editToggle({commit},payload) {
        commit('EDIT_TOGGLE', payload)
    },

}
