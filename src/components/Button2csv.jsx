import React from "react"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//import { useTheme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
//import parse from 'json2csv'
import {connect} from 'react-redux'

const Button2csv = (props) => {
    const {totaux, armes, armure, artefact, casque, bottes, monturesEtc, level} = props
    const Fields = ['Nom', 'Type', 'Vitalite', 'Vitesse', 'Degats', 'Bonus spécial']

    const handleClick = totaux => {
        console.log(totaux)
    }

    return (
        <Box style={{textAlign: 'center'}}>
            <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SaveIcon />}
                onClick={() => handleClick(totaux)}
            >
            Télécharger au format .csv
            </Button>
        </Box>
        
    )
}

const mapStateToProps = (state) => {
    return {
        totaux : state.totaux,
        armes: state.armes,
        casque: state.casque,
        bottes: state.bottes,
        monturesEtc: state.monturesEtc,
        artefact: state.artefact,
        armure: state.armure,
        level: state.level
    }
}

export default connect(mapStateToProps)(Button2csv)