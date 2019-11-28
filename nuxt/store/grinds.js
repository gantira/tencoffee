export const state = () => ({
    grinds: [],
})

export const getters = {
    grinds(state) {
        return state.grinds
    },
}

export const mutations = {
    SET_GRINDS(state, grinds) {
        state.grinds = grinds
    },
    DELETE_GRIND(state, id) {
        let index = state.grinds.findIndex(grind => grind.id == id)
        state.grinds.splice(index, 1)
    },
    ADD_GRIND(state, grind) {
        state.grinds.push(grind)
    },
    UPDATE_GRIND(state, payload) {
        state.grinds = state.grinds.map(grind => {
            if (grind.id === payload.id) {
              return Object.assign({}, grind, payload.data)
            }
            return grind
        })
    },
    EDIT_TOGGLE(state, payload) {
        payload.toggle = !payload.toggle
    }
}

export const actions = {
    async getGrinds({commit}) {
        let {data} = await this.$axios.get('/grinds')
        commit('SET_GRINDS', data.data)
    },
    async deleteGrind({commit}, grind) {
        await this.$axios.delete(`/grinds/${grind.id}`)
            .then(() => {
                this.$toast.info('Delete Successfully!', {icon : 'check'})
                commit('DELETE_GRIND', grind.id)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })
    },
    async addGrind({commit}, grind) {
        await this.$axios.post(`/grinds`, grind)
            .then(response => {
                this.$toast.success('Add Successfully!', {icon : 'check'})
                commit('ADD_GRIND', response.data.grind)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    async updateGrind({commit}, payload) {
        await this.$axios.patch(`/grinds/${payload.id}`, payload)
            .then(() => {
                this.$toast.success('Update Successfully!', {icon : 'check'})
                commit('UPDATE_GRIND', payload)
            })
            .catch(error => {
                this.$toast.error(error, {icon : 'warning'})
            })

    },
    editToggle({commit},payload) {
        commit('EDIT_TOGGLE', payload)
    },

}
