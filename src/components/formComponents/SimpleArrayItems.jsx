import React from "react"
import { useTheme } from '@material-ui/core/styles';
import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const SimpleArrayItems = (props) =>{
    const {datas, item, toggleItem, label, noDataAfterName} = props
    const theme = useTheme()


    const styleCondition = (item) => {
        switch(item.type){
          case "Craft/Exotique":
            return theme.palette.Exotique
          case "Exotique":
            return theme.palette.Exotique
          case "Semi-Légendaire":
            return theme.palette[item.type]
          default:
            return theme.palette.couleurText
        }
      }

    const renderItems = (datas) => {
        return datas.map(item => {
            return <option key={item.nom} value={item.nom}
            style={styleCondition(item)}
            >
                {`${item.nom} ${noDataAfterName ? "" : "=>"} ${item.degats ? "Dégats:" + item.degats + "; " : ""}${item.vitalite ? "Vitalité:" + item.vitalite + "; " : ""}${item.vitesse ? "Vitesse:" + item.vitesse + "; " : ""}${item.prix ? "Prix:" + item.prix + "po;" : ""}`}
            </option>
        })
    }

    const handleItems = (event, toggleItem)=> {
        if (event.target.value === "disarmed"){
            return toggleItem({})
        }
      
          const nomItem = event.target.value;
          const checkNom = (itemObject) => {

            return itemObject.nom === nomItem ? toggleItem(itemObject) : null;
          };
      
          datas.forEach((itemObject) => {
            checkNom(itemObject)
          });
    } 

    return (
        <FormControl>
            <InputLabel id={label}>{label}</InputLabel>
            <Select native onChange={(event) => handleItems(event, toggleItem)}
            id={label}
            value={item.nom? item.nom : "disarmed"}
            style={theme.palette[item.type]}
            >
                <option value="disarmed">
                    -
                </option>
                {renderItems(datas)}
            </Select>
            <FormHelperText>{item.special ? `Effet spécial : ${item.special}` : "" }</FormHelperText>
        </FormControl>
    )
}

export default SimpleArrayItems