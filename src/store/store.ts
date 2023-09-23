import { createStore } from 'vuex'
import TIMED_STEPS from '@/enums/steps'
import type { Question } from '@/data/interfaces'
import { vueQuestions } from '@/data/vue'

interface State {
    name: string
    targetPosition: string | null,
    experience: string | null,
    framework: string | null,
    questions: Question[],
    redFlags: Array<string>,
    codeRedFlags: Array<Array<string>>,
    duration: object
}

const store = createStore({
    state: <State>{
        name: '',
        targetPosition: null,
        experience: null,
        framework: null,
        questions: [],
        redFlags: [],
        codeRedFlags: [],
        duration: { [TIMED_STEPS.INTRODUCTION]: 5, [TIMED_STEPS.ABOUT_YOU]: 10, [TIMED_STEPS.CODE_SNIPET]: 15, [TIMED_STEPS.FRAMEWORK_QUESTION]: 5, [TIMED_STEPS.FORM]: 35 }
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
            return state.codeRedFlags.flat()
        },
        framework(state: State) {
            return state.framework
        },
        questions(state: State) {
            return state.questions
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
        setCodeRedFlags(state: State, payload: object) {
            const idx: number = payload['idx']
            const flags: string[] = payload['flags']
            state.codeRedFlags[idx] = flags;
        },
        setFramework(state: State, payload: string) {
            state.framework = payload;
        },
        setQuestions(state: State, payload: string) {
            switch(payload) {
                case "Vue":
                    state.questions = vueQuestions;
                    break;
                case "React":
                    state.questions = vueQuestions;
                    break;
                case "Angular":
                    state.questions = vueQuestions;
                    break;
            }
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
        setCodeRedFlags(context, payload: object) {
            context.commit('setCodeRedFlags', payload)
        },
        setFramework(context, payload: string) {
            context.commit('setFramework', payload)
            context.commit('setQuestions', payload)
        },
    }
})

export default store
