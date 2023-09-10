import { createStore } from 'vuex'

const store = createStore({
    state: {
        targetPosition: null,
        experience: null,
        framework: null,
        redFlags: []
    },
    getters: {
        targetPosition(state) {
            return state.targetPosition
        },
        experience(state) {
            return state.experience
        },
        redFlags(state) {
            return state.redFlags
        },
        framework(state) {
            return state.framework
        },
    },
    mutations: {
        setTargetPosition(state, payload) {
            state.targetPosition = payload;
        },
        setTargetExperience(state, payload) {
            state.experience = payload;
        },
        setRedFlags(state, payload) {
            state.redFlags = payload;
        },
        setFramework(state, payload) {
            state.framework = payload;
        },
    },
    actions: {
        setTargetPosition(context, payload) {
            context.commit('setTargetPosition', payload)
        },
        setTargetExperience(context, payload) {
            context.commit('setTargetExperience', payload)
        },
        setRedFlags(context, payload) {
            context.commit('setRedFlags', payload)
        },
        setFramework(context, payload) {
            context.commit('setFramework', payload)
        },
    }
})

export default store
