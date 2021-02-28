import React from "react"
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useTheme } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import parse from 'json2csv'
import {connect} from 'react-redux'

const Button2csv = (props) => {
    const {totaux} = props

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
        totaux : state.totaux
    }
}

export default connect(mapStateToProps)(Button2csv)