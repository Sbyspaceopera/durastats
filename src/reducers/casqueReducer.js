import {TOGGLE_CASQUE,TOGGLE_SLOTS} from '../actions/types'

const INITIAL_STATE= {}

const casqueReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_CASQUE:
            return action.payload
        case TOGGLE_SLOTS:
            return INITIAL_STATE
        default:
            return state
    }
}

export default casqueReducer