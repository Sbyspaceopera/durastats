import {TOGGLE_RACE} from '../actions/types'

const INITIAL_STATE={
    vitalite:0,
    vitesse:0,
    degats:0,
    description:"",
    nom:"",
    des:null,
    special:null
}

const raceReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_RACE:
            return {
                ...state,
                 vitalite :action.payload.vitalite,
                 vitesse : action.payload.vitesse,
                 degats:action.payload.degats,
                 description: action.payload.description,
                 nom: action.payload.nom,
                 des: action.payload.des,
                 special: (action.payload.special ? action.payload.special : false)
                }
        default:
            return state;
    }
}
export default raceReducer