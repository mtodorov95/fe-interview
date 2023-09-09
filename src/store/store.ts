import { createStore } from 'vuex'

const store = createStore({
    state: {
        targetPosition: null,
        experience: null,
    },
    getters: {
        targetPosition(state) {
            return state.targetPosition
        },
        experience(state) {
            return state.experience
        },
    },
    mutations: {
        setTargetPosition(state, payload) {
            state.targetPosition = payload;
        },
        setTargetExperience(state, payload) {
            state.experience = payload;
        },
    },
    actions: {
        setTargetPosition(context, payload) {
            context.commit('setTargetPosition', payload)
        },
        setTargetExperience(context, payload) {
            context.commit('setTargetExperience', payload)
        },
    }
})

export default store
