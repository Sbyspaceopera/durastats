import React from 'react'

import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const Classe = (props) =>{
    const { datas, classe, renderOptions, toggleSlots, toggleClasse} = props

    const handleClasse = (event) => {
        toggleClasse(
          datas.classes.find((classe) => classe.nom === event.target.value)
        );
        toggleSlots()
      };
    return (
        <FormControl>
        <InputLabel id="classe">Classe</InputLabel>
        <Select
          onChange={(event) => handleClasse(event, props)}
          id="classe"
          value={classe.nom ? classe.nom : ""}
        >
          {renderOptions(datas.classes)}
        </Select>
        <FormHelperText>{classe.bonus?`Bonus : ${classe.bonus}` :`Bonus : /` }</FormHelperText>
      </FormControl>
    )
}

export default Classe