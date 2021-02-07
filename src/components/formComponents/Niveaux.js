import React from 'react'

import {
    TextField,
    FormControl
  } from "@material-ui/core";

const Niveaux = (props) =>{
    const {level, toggleLevel} = props

    const handleLevel = (event) => {
      if (event.target.value < 5) {
        toggleLevel(5);
      } else if (event.target.value > 60) {
        toggleLevel(60);
      } else {
        toggleLevel(event.target.value);
      }
    };

    return(
      <FormControl>
        <TextField
          onChange={(event) => handleLevel(event)}
          id="level"
          type="number"
          label="Niveau"
          value={level}
          InputProps={{ inputProps: { max: 60, min: 5 } }}
        />
      </FormControl>
    )
    
    
}

export default Niveaux