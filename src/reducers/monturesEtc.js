import {TOGGLE_MONTURESETC, TOGGLE_SLOTS} from '../actions/types'

const INITIAL_STATE = {}

const monturesEtcReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_MONTURESETC:
            return  action.payload
        case TOGGLE_SLOTS:
            return INITIAL_STATE    
        default:
            return state
    }

}

export default monturesEtcReducer