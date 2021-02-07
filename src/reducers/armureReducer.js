import {TOGGLE_ARMURE, TOGGLE_SLOTS} from '../actions/types'

const INITIAL_STATE = {}

const armureReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_ARMURE:
            return  action.payload
        case TOGGLE_SLOTS:
            return INITIAL_STATE    
        default:
            return state
    }

}

export default armureReducer