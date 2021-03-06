//TODO Redéfinir les termes pour qu'ils deviennent générique à l'instar de SimpleArrayItems.jsx

import React from 'react'
import { useTheme } from '@material-ui/core/styles';
import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const Armure = (props) => {
    const {armure, toggleArmure, datas, label} = props
    const jsonToArray = datas.map((data) => {
        return Object.entries(data);
    });
    const theme = useTheme()

    const styleCondition = (armure) => {
                    switch(armure.type){
                      case "Craft/Exotique":
                        return theme.palette.Exotique
                      case "Exotique":
                        return theme.palette.Exotique
                      case "Semi-Légendaire":
                        return theme.palette[armure.type]
                      default:
                        return theme.palette.couleurText
                    }
                  }

    const renderArmures = () => {
        
        

        return jsonToArray.map((data) => {
            const options = data[0][1].map(armure =>{
                
                return(
                <option key={armure.nom} value={armure.nom}
                style={styleCondition(armure)}
                >
                    {`${armure.nom} => ${armure.degats ? "Dégats:" + armure.degats + "; " : ""}${armure.vitalite ? "Vitalité:" + armure.vitalite + "; " : ""}${armure.vitesse ? "Vitesse:" + armure.vitesse + "; " : ""}${armure.prix ? "Prix:" + armure.prix + "po;" : ""}`}
                </option>
                )
            })
          return (
              <optgroup key={data[0][0]} label={data[0][0]}
              style={theme.palette.blanc}
              >
                  {options}
              </optgroup>
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
            <InputLabel id={label}>{label}</InputLabel>
            <Select native onChange={(event) => handleArmure(event)}
            id={label}
            value={armure.nom? armure.nom : "disarmed"}
            style={styleCondition(armure)}
            >
                <option value="disarmed" >
                    -
                </option>
                {renderArmures(datas)}
            </Select>
            <FormHelperText>{armure.special ? `Effet spécial : ${armure.special}` : "" }</FormHelperText>
        </FormControl>
    )
}

export default Armure
