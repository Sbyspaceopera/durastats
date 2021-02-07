import React from "react"

import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const SimpleArrayItems = (props) =>{
    const {datas, item, toggleItem, label} = props


    const renderItems = (datas) => {
        return datas.map(item => {
            return <option key={item.nom} value={item.nom}>
                {`${item.nom} => ${item.degats ? "Dégats:" + item.degats + "; " : ""}${item.vitalite ? "Vitalité:" + item.vitalite + "; " : ""}${item.vitesse ? "Vitesse:" + item.vitesse + "; " : ""}${item.prix ? "Prix:" + item.prix + "po;" : ""}`}
            </option>
        })
    }

    const handleItems = (event, toggleItem)=> {
        if (event.target.value === "disarmed"){
            return toggleItem({})
        }
      
          const nomItem = event.target.value;
          console.log(nomItem)
          const checkNom = (itemObject) => {

            return itemObject.nom === nomItem ? toggleItem(itemObject) : null;
          };
      
          datas.forEach((itemObject) => {
              console.log(itemObject)
            checkNom(itemObject)
          });
    } 

    return (
        <FormControl>
            <InputLabel id={label}>{label}</InputLabel>
            <Select native onChange={(event) => handleItems(event, toggleItem)}
            id={label}
            value={item.nom? item.nom : "disarmed"}
            >
                <option value="disarmed" >
                    -
                </option>
                {renderItems(datas)}
            </Select>
            <FormHelperText>{item.special ? `Effet spécial : ${item.special}` : `Effet spécial : /` }</FormHelperText>
        </FormControl>
    )
}

export default SimpleArrayItems