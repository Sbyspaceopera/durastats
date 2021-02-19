import {TOGGLE_LEVEL} from '../actions/types'

const INITIAL_STATE=5

const levelReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_LEVEL:
            return action.payload
        default:
            return state
    }
}
export default levelReducer