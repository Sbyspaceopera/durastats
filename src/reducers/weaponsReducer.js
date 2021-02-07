import {TOGGLE_WEAPON, TOGGLE_SLOTS, DISARMED} from '../actions/types'

const INITIAL_STATE = []

const weaponsReducer = (state = INITIAL_STATE, action) => {
    
    const finalArray = (state, action) => {
        if (state.length){
            if (state.find(element => element.slot === action.slot)){
                return state.map(element => {
                    if (element.slot === action.slot) {
                        element = {arme :action.payload, slot:action.slot}
                        return element
                    }else{
                        return element
                    }
                })
            }else{
                return [...state, {arme :action.payload, slot:action.slot}]
            }
        }else{
            return [...state, {arme :action.payload, slot:action.slot}]
        }
    }
    

    switch (action.type){
        case TOGGLE_WEAPON :
            return  finalArray(state,action)
        case TOGGLE_SLOTS :
            return  INITIAL_STATE
        case DISARMED : 
            return state.filter(element => element.slot !== action.payload)
        default :
            return state
    }
}

export default weaponsReducer