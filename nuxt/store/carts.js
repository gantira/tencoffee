export const state = () => ({
    carts: [],
})

export const getters = {
    carts(state) {
        return state.carts
    },
}

export const mutations = {
    ADD_CART(state, item) {
        let found = state.carts.find(cart => cart.product_id == item.product_id && cart.grind_id == item.grind_id && cart.size_id == item.size_id)

        if (found) {
            found.quantity += parseInt(item.quantity)
            found.subtotal = parseInt(found.quantity) * parseInt(item.price)

            this.$toast.show('"'+item.product_name + ' ' + item.grind_name + ' ' + item.size_name +'" update quantity.', {
                position: 'top-center',
                theme: "toasted-primary",
                duration: 3000,
                icon : 'update'
            })
        } else {
            state.carts.push({
                product_id: item.product_id,
                product_name: item.product_name,
                grind_id: item.grind_id,
                grind_name: item.grind_name,
                size_id: item.size_id,
                size_name: item.size_name,
                price: item.price,
                quantity: Number (item.quantity),
                subtotal: parseInt(item.quantity) * parseInt(item.price),
                image: item.image
            });

            this.$toast.show('"'+ item.product_name + '" sudah ditambahkan ke keranjang.', {
                position: 'top-center',
                theme: "toasted-primary",
                duration: 2500,
                icon : 'error_outline'
            })
        }
    },
    REMOVE_FROM_CART(state, item) {
        state.carts.splice(state.carts.indexOf(item), 1)
    },
    UPDATE_CART(state, item) {
        let found = state.carts.find(cart => cart.product_id == item.product_id && cart.grind_id == item.grind_id && cart.size_id == item.size_id)

        if (found) {
            if (parseInt(item.quantity) == 0) {
                state.carts.splice(state.carts.indexOf(item), 1)
            }

            found.quantity = parseInt(item.quantity)
            found.subtotal = parseInt(found.quantity) * parseInt(item.price)

        } else {
            this.$toast.show('item not found.', {
                position: 'top-center',
                theme: "toasted-primary",
                duration: 3000,
                icon : 'error_outline'
            })
        }
    },
    CLEAR_CART(state) {
        state.carts = []
    }
}

export const actions = {
    async addToCart({commit}, product) {
        await commit('ADD_CART', product)
    },
    async removeFromCart({commit}, product) {
        await commit('REMOVE_FROM_CART', product)
    },
    async updateCart({commit}, product) {
        await commit('UPDATE_CART', product)
    },
    async clearCart({commit}) {
        await commit('CLEAR_CART')
    }

}
