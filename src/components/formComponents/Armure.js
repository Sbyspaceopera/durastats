import React from 'react'

import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const Armure = (props) => {
    const {armure, toggleArmure, datas} = props
    const jsonToArray = datas.map((data) => {
        return Object.entries(data);
    });

    const renderArmures = () => {
        
        return jsonToArray.map((data) => {
            const options = data[0][1].map(armure =>{
                return(
                <option key={armure.nom} value={armure.nom}>
                    {`${armure.nom} => ${armure.degats ? "Dégats:" + armure.degats + "; " : ""}${armure.vitalite ? "Vitalité:" + armure.vitalite + "; " : ""}${armure.vitesse ? "Vitesse:" + armure.vitesse + "; " : ""}${armure.prix ? "Prix:" + armure.prix + "po;" : ""}`}
                </option>
                )
            })
          return (
              <optgroup key={data[0][0]} label={data[0][0]}>{options}</optgroup>
          )
        });
      };

    const handleArmure = (event)=> {
        if (event.target.value === "disarmed"){
            return toggleArmure({})
        }
      
          const nomArmure = event.target.value;
          const checkNom = (armorObject) => {
            return armorObject.nom === nomArmure ? toggleArmure(armorObject) : null;
          };
      
          jsonToArray.forEach((element) => {
            element[0][1].forEach((armorObject) => checkNom(armorObject));
          });
    } 

    return (
        <FormControl>
            <InputLabel id="armure">Armures</InputLabel>
            <Select native onChange={(event) => handleArmure(event)}
            id="armure"
            value={armure.nom? armure.nom : "disarmed"}
            >
                <option value="disarmed" >
                    -
                </option>
                {renderArmures(datas)}
            </Select>
            <FormHelperText>{armure.special ? `Effet spécial : ${armure.special}` : `Effet spécial : /` }</FormHelperText>
        </FormControl>
    )
}

export default Armure
