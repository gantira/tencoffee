export const state = () => ({
    sizes: [],
})

export const getters = {
    sizes(state) {
        return state.sizes
    },
}

export const mutations = {
    SET_SIZES(state, sizes) {
        state.sizes = sizes
    },
    DELETE_SIZES(state, id) {
        let index = state.sizes.findIndex(size => size.id == id)
        state.sizes.splice(index, 1)
    },
    ADD_SIZES(state, size) {
        state.sizes.push(size)
    },
    UPDATE_SIZES(state, payload) {
        state.sizes = state.sizes.map(size => {
            if (size.id === payload.id) {
              return Object.assign({}, size, payload.data)
            }
            return size
        })
    },
    EDIT_TOGGLE(state, payload) {
        payload.toggle = !payload.toggle
    }
}

export const actions = {
    async getSizes({commit}) {
        let {data} = await this.$axios.get('/sizes')
        commit('SET_SIZES', data.data)
    },
    async deleteSize({commit}, size) {
        await this.$axios.delete(`/sizes/${size.id}`)
            .then(() => {
                this.$toast.info('Delete Successfully!', {icon : 'check'})
                commit('DELETE_SIZES', size.id)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    async addSize({commit}, size) {
        await this.$axios.post(`/sizes`, size)
            .then(response => {
                this.$toast.success('Add Successfully!', {icon : 'check'})
                commit('ADD_SIZES', response.data.size)
            })
            .catch(error => {
                console.log(error);

                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async updateSize({commit}, payload) {
        await this.$axios.patch(`/sizes/${payload.id}`, payload)
            .then(() => {
                this.$toast.success('Update Successfully!', {icon : 'check'})
                commit('UPDATE_SIZES', payload)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    editToggle({commit},payload) {
        commit('EDIT_TOGGLE', payload)
    },

}
