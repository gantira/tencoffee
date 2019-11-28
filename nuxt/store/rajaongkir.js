export const state = () => ({
    cities: [],
    provinces: [],
})

export const getters = {
    cities(state) {
        return state.cities
    },
    provinces(state) {
        return state.provinces
    },
}

export const mutations = {
    SET_PROVINCES(state, provinces) {
        state.provinces = provinces
    },
    SET_CITIES(state, cities) {
        state.cities = cities
    },
}

export const actions = {
    async fetchProvince({commit}) {
        let {data} = await this.$axios.get(`provinces`)
        commit('SET_PROVINCES', data.provinces)
    },
    async fetchCitiesByProvince({commit}, province_id) {
        let {data} = await this.$axios.get(`cities/${province_id}`)
        commit('SET_CITIES', data.cities)
    },
}

