import { createStore } from 'vuex'

const store = createStore({
    state: {
        targetPosition: null,
    },
    getters: {
        targetPosition(state) {
            return state.targetPosition
        },
    },
    mutations: {
        setTargetPosition(state, payload) {
            state.targetPosition = payload;
        },
    },
    actions: {
        setTargetPosition(context, payload) {
            context.commit('setTargetPosition', payload)
        },
    }
})

export default store
