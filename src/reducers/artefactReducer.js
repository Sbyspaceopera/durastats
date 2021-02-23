import {TOGGLE_ARTEFACT, TOGGLE_SLOTS} from '../actions/types'

const INITIAL_STATE = {}

const artefactReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case TOGGLE_ARTEFACT :
            return action.payload
        case TOGGLE_SLOTS :
            return INITIAL_STATE
        default :
            return state
    }
}

export default artefactReducer