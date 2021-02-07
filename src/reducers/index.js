import {combineReducers} from 'redux'
import raceReducer from './raceReducer'
import totalReducer from './totalReducer'
import classeReducer from './classeReducer'
import levelReducer from './levelReducer'
import weaponsReducer from './weaponsReducer'
import armureReducer from './armureReducer'
import casqueReducer from './casqueReducer'
import bottesReducer from './bottesReducer'


export default combineReducers({
    race: raceReducer,
    totaux: totalReducer,
    classe: classeReducer,
    level: levelReducer,
    armes: weaponsReducer,
    armure: armureReducer,
    casque: casqueReducer,
    bottes: bottesReducer
})