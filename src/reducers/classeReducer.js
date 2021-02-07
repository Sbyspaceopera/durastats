import {TOGGLE_CLASSE} from '../actions/types'

const INITIAL_STATE={
    nom:"",
    apparance:"",
    type:"",
    bonus:"",
    stats:{vitalite : 5, vitesse:5, degats:5},
    slotsArmes:0,
    condition:""

}

const classeReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case TOGGLE_CLASSE:
            return {
                ...state,
                nom: action.payload.nom,
                apparance :action.payload.apparance,
                type : action.payload.type,
                bonus:action.payload.bonus,
                stats: {vitalite:action.payload.stats.vitalite, vitesse: action.payload.stats.vitesse, degats: action.payload.stats.degats},
                slotsArmes: action.payload.slotsArmes,
                condition: action.payload.condition
                }
        default:
            return state;
    }
}
export default classeReducer