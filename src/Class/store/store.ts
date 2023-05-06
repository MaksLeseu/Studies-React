import {combineReducers, createStore} from "redux";

export type StateType = {
    item: string
}

let initialState: StateType = {
    item: 'Hello Moto'
}

const reducer = (state = initialState, action: AC) => {
    if (action.type === 'WORK') {
        return {
            ...state, item: action.title
        }
    } else {
        return state
    }
}

let reducers = combineReducers({
        content: reducer
})

let store = createStore(reducers)

export const contentAC = (title: string) => ({type: 'WORK', title: title} as const)

type AC = ReturnType<typeof contentAC>
export type AppStateType = ReturnType<typeof reducers>

export default store
