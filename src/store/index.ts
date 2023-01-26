import { createStore } from 'vuex'
import img from './imgInfo'
import { ImgState } from './typings'

export interface GlobalState {
    img: ImgState
}

const store = createStore<GlobalState>({
    mutations: {},
    actions: {},
    modules: {
        img
    }
})
export default store