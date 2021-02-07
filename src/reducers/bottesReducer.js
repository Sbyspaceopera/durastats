import {TOGGLE_BOTTES,TOGGLE_SLOTS} from '../actions/types'

const INITIAL_STATE= {}

const bottesReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_BOTTES:
            return action.payload
        case TOGGLE_SLOTS:
            return INITIAL_STATE
        default:
            return state
    }
}

export default bottesReducer