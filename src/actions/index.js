import {
    TOGGLE_RACE,
    TOGGLE_CLASSE,
    TOGGLE_LEVEL,
    SET_TOTAL,
    TOGGLE_WEAPON,
    TOGGLE_SLOTS,
    TOGGLE_ARMURE,
    TOGGLE_CASQUE,
    TOGGLE_BOTTES,
    DISARMED
} from "./types"

export const toggleRace = (race) => {
    return {
        type: TOGGLE_RACE,
        payload: race
    }
}

export const toggleClasse = (classe) => {
    return {
        type: TOGGLE_CLASSE,
        payload: classe
    }
}

export const toggleLevel = (level) => {
    return{
        type: TOGGLE_LEVEL,
        payload: level
    }
}

export const toggleWeapon = (weapon, slot) => (dispatch, getState) =>{
    const states= getState()
    const slotsArmes= states.classe.slotsArmes

    dispatch({type: TOGGLE_WEAPON, payload: weapon, slot:parseInt(slot,10), slotsArmes:slotsArmes , states: states })
}

export const toggleSlots =() => (dispatch,getState) =>{
    const states= getState()
    const slotsArmes= states.classe.slotsArmes

    dispatch({type: TOGGLE_SLOTS, slotsArmes:slotsArmes , states: states })
}

export const disarmed = (slot) =>{
    return {
        type : DISARMED,
        payload:parseInt(slot,10)
    }
}

export const toggleArmure = (armure) => {
    return {
        type:TOGGLE_ARMURE,
        payload: armure
    }
}

export const toggleCasque = (casque) => {
    return {
        type:TOGGLE_CASQUE,
        payload: casque
    }
}

export const toggleBottes = (bottes) => {
    return {
        type:TOGGLE_BOTTES,
        payload: bottes
    }
}

export const setTotal = () => (dispatch, getState) => {
    const states= getState()

    dispatch({type: SET_TOTAL, payload: states})
}