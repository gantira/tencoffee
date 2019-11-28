export const state = () => ({
    orders: [],
    order: [],
})

export const getters = {
    orders(state) {
        return state.orders
    },
    order(state) {
        return state.order
    },
}

export const mutations = {
    SET_ORDERS(state, orders) {
        state.orders = orders
    },
    DELETE_ORDER(state, id) {
        let index = state.orders.findIndex(order => order.id == id)
        state.orders.splice(index, 1)
    },
    ADD_ORDER(state, order) {
        state.orders.push(order)
    },
    SHOW_ORDER(state, order) {
        state.order = order
    },
    UPDATE_ORDER(state, payload) {
        state.orders = state.orders.map(order => {
            if (order.id === payload.id) {
              return Object.assign({}, order, payload.data)
            }
            return order
        })
    },
    EDIT_TOGGLE(state, payload) {
        payload.toggle = !payload.toggle
    }
}

export const actions = {
    async getOrders({commit}) {
        let {data} = await this.$axios.get('/admin/orders')
        commit('SET_ORDERS', data.data)
    },
    async deleteProduct({commit}, order) {
        await this.$axios.delete(`/admin/orders/${order.id}`)
            .then(() => {
                this.$toast.info('Delete Successfully!', {icon : 'check'})
                commit('DELETE_ORDER', order.id)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    async addProduct({commit}, order) {
        await this.$axios.post(`/admin/orders`, order)
            .then(response => {
                this.$toast.success('Add Successfully!', {icon : 'check'})
                this.$router.push('/admin/orders')
                // commit('ADD_ORDER', response.data.order)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async updateProduct({commit}, payload) {
        await this.$axios.patch(`/admin/orders/${payload.id}`, payload)
            .then(() => {
                this.$toast.success('Update Successfully!', {icon : 'check'})
                this.$router.push('/admin/orders')
                // commit('UPDATE_ORDER', payload)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async showProduct({commit}, order) {
        await this.$axios.get(`/admin/orders/${order}`)
            .then(response => {
                commit('SHOW_ORDER', response.data.data)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    editToggle({commit},payload) {
        commit('EDIT_TOGGLE', payload)
    },

}
