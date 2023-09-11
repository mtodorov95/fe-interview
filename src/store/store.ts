import { createStore } from 'vuex'

interface State {
    name: string
    targetPosition: string | null,
    experience: string | null,
    framework: string | null,
    redFlags: Array<string>,
    codeRedFlags: Array<string>,
    duration: object
}

const store = createStore({
    state: <State>{
        name: '',
        targetPosition: null,
        experience: null,
        framework: null,
        redFlags: [],
        codeRedFlags: [],
        duration: { 1: 5, 2: 10, 3: 15, 5: 35 }
    },
    getters: {
        name(state: State) {
            return state.name
        },
        targetPosition(state: State) {
            return state.targetPosition
        },
        experience(state: State) {
            return state.experience
        },
        redFlags(state: State) {
            return state.redFlags
        },
        codeRedFlags(state: State) {
            return state.codeRedFlags
        },
        framework(state: State) {
            return state.framework
        },
        duration(state: State) {
            return state.duration
        },
    },
    mutations: {
        setName(state: State, payload: string) {
            state.name = payload;
        },
        setTargetPosition(state: State, payload: string) {
            state.targetPosition = payload;
        },
        setTargetExperience(state: State, payload: string) {
            state.experience = payload;
        },
        setRedFlags(state: State, payload: string[]) {
            state.redFlags = payload;
        },
        setCodeRedFlags(state: State, payload: string) {
            if (state.codeRedFlags.indexOf(payload) == -1) {
                state.codeRedFlags.push(payload);
            }
        },
        setFramework(state: State, payload: string) {
            state.framework = payload;
        },
    },
    actions: {
        setName(context, payload: string) {
            context.commit('setName', payload)
        },
        setTargetPosition(context, payload: string) {
            context.commit('setTargetPosition', payload)
        },
        setTargetExperience(context, payload: string) {
            context.commit('setTargetExperience', payload)
        },
        setRedFlags(context, payload: string[]) {
            context.commit('setRedFlags', payload)
        },
        setCodeRedFlags(context, payload: string) {
            context.commit('setCodeRedFlags', payload)
        },
        setFramework(context, payload: string) {
            context.commit('setFramework', payload)
        },
    }
})

export default store
