import {SET_TOTAL} from '../actions/types'

const INITIAL_STATE = {
    vitalite :0,
    vitesse:0,
    degats:0,
    aura:0,
    slots:0,
    prix:0
}

const totalReducer = (state= INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_TOTAL:
            return {
                ...state, 
                vitalite: action.payload.race.vitalite 
                    + (action.payload.classe.nom ? (action.payload.classe.stats.vitalite*action.payload.level-5) + 20 : 0)
                    + (action.payload.level >9 ? 100 : 0)
                    + (action.payload.level >19 ? 200 : 0)
                    + (action.payload.level >29 ? 300 : 0)
                    + (action.payload.level >39 ? 400 : 0)
                    + (action.payload.armes.length ?
                        action.payload.armes.map(arme => {
                            return arme.arme.vitalite ? parseInt(arme.arme.vitalite,10) :0
                        }).reduce((accumulator, currentValue)=> accumulator+currentValue) :0 )
                    + (action.payload.armure ? (action.payload.armure.vitalite ? parseInt(action.payload.armure.vitalite) : 0) : 0 )
                    + (action.payload.casque ? (action.payload.casque.vitalite ? parseInt(action.payload.casque.vitalite) : 0) : 0 )
                    + (action.payload.bottes ? (action.payload.bottes.vitalite ? parseInt(action.payload.bottes.vitalite) : 0) : 0 )
                    + (action.payload.monturesEtc ? (action.payload.monturesEtc.vitalite ? parseInt(action.payload.monturesEtc.vitalite) : 0) : 0 )
                    ,
                vitesse: action.payload.race.vitesse 
                    + (action.payload.classe.nom ? action.payload.classe.stats.vitesse*action.payload.level-5 : 0)
                    + (action.payload.armes.length ?
                        action.payload.armes.map(arme => {
                            return arme.arme.vitesse ? parseInt(arme.arme.vitesse,10) :0
                        }).reduce((accumulator, currentValue)=> accumulator+currentValue) :0 )
                    + (action.payload.armure ? (action.payload.armure.vitesse ? parseInt(action.payload.armure.vitesse) : 0) : 0 )
                    + (action.payload.casque ? (action.payload.casque.vitesse ? parseInt(action.payload.casque.vitesse) : 0) : 0 )
                    + (action.payload.bottes ? (action.payload.bottes.vitesse ? parseInt(action.payload.bottes.vitesse) : 0) : 0 )
                    + (action.payload.monturesEtc ? (action.payload.monturesEtc.vitesse ? parseInt(action.payload.monturesEtc.vitesse) : 0) : 0 )
                    ,
                degats: action.payload.race.degats 
                    + (action.payload.classe.nom ? action.payload.classe.stats.degats*action.payload.level-5 : 0)
                    + (action.payload.armes.length ?
                        action.payload.armes.map(arme => {
                            return arme.arme.degats ? parseInt(arme.arme.degats,10) :0
                        }).reduce((accumulator, currentValue)=> accumulator+currentValue) :0 )
                    + (action.payload.armure ? (action.payload.armure.degats ? parseInt(action.payload.armure.degats) : 0) : 0 )
                    + (action.payload.casque ? (action.payload.casque.degats ? parseInt(action.payload.casque.degats) : 0) : 0 )
                    + (action.payload.bottes ? (action.payload.bottes.degats ? parseInt(action.payload.bottes.degats) : 0) : 0 )
                    + (action.payload.monturesEtc ? (action.payload.monturesEtc.degats ? parseInt(action.payload.monturesEtc.degats) : 0) : 0 )
                    ,
                slots : action.payload.armes.length ?
                        action.payload.armes.map(arme => {
                            return arme.arme.slotsArmes ? parseInt(arme.arme.slotsArmes,10) : 1
                        }).reduce((accumulator, currentValue)=> accumulator+currentValue) : 0
                    ,
                prix: (action.payload.armes.length ?
                    action.payload.armes.map(arme => {
                        return arme.arme.prix ? parseInt(arme.arme.prix,10) :0
                    }).reduce((accumulator, currentValue)=> accumulator+currentValue) :0 )
                + (action.payload.armure ? (action.payload.armure.prix ? parseInt(action.payload.armure.prix) : 0) : 0 )
                + (action.payload.casque ? (action.payload.casque.prix ? parseInt(action.payload.casque.prix) : 0) : 0 )
                + (action.payload.bottes ? (action.payload.bottes.prix ? parseInt(action.payload.bottes.prix) : 0) : 0 )
                + (action.payload.monturesEtc ? (action.payload.monturesEtc.prix ? parseInt(action.payload.monturesEtc.prix) : 0) : 0 )
            }

        default:
            return state
    }
}

export default totalReducer;