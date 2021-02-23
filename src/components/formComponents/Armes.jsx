import React, {useState} from 'react'
import { useTheme } from '@material-ui/core/styles';
import {
    Select,
    InputLabel,
    FormControl,
    FormHelperText
  } from "@material-ui/core";

const Armes = (props) =>{
    const {datas, classe, totaux, armes, weaponsArray, disarmed, toggleWeapon} = props
    const theme = useTheme()
    const [colorsObject, setColorsObject] = useState()

    const renderWeapons = (datas, indexSelect) => {
        const jsonToArray = datas.map((data) => {
          return Object.entries(data);
        });
    
        return jsonToArray.map((weaponsOrOptGroupArg) => {
          const weaponsOrOptGroup = weaponsOrOptGroupArg[0];
          const options = weaponsOrOptGroup[1].map((weapon) => {
            const styleCondition = (weapon) => {
              switch(weapon.type){
                case "Craft/Exotique":
                  return theme.palette.Exotique
                case "Exotique":
                  return theme.palette.Exotique
                case "Semi-Légendaire":
                  return theme.palette[weapon.type]
                default:
                  return theme.palette.couleurText
              }
            }
            if (armes.length) {
              if (armes.find(arme => arme.slot === indexSelect)) {
                const armePrecedente = armes.find(arme => arme.slot === indexSelect)
                const disabledCondition = totaux.slots + ((weapon.slotsArmes ? weapon.slotsArmes : 1)-(armePrecedente.arme.slotsArmes ? armePrecedente.arme.slotsArmes : 1)) > classe.slotsArmes ? true : false
                return <option disabled={disabledCondition}
                  key={weapon.nom}
                  value={weapon.nom}
                  style={styleCondition(weapon)}
                >
                  {`${weapon.nom}${weapon.slotsArmes ? " (2 mains)" : ""} => ${weapon.degats ? "Dégats:" + weapon.degats + "; " : ""}${weapon.vitesse ? "Vitesse:" + weapon.vitesse + "; " : ""}${weapon.vitalite ? "Vitalité:" + weapon.vitalite + "; " : ""}${weapon.prix ? "Prix:" + weapon.prix + "po;" : ""}`}
                </option>
              } else {
                const disabledCondition = totaux.slots + (weapon.slotsArmes ? weapon.slotsArmes : 1) > classe.slotsArmes ? true : false
                return <option disabled={disabledCondition}
                  key={weapon.nom} value={weapon.nom}
                  style={styleCondition(weapon)}
                >
                  {`${weapon.nom}${weapon.slotsArmes ? " (2 mains)" : ""} => ${weapon.degats ? "Dégats:" + weapon.degats + "; " : ""}${weapon.vitesse ? "Vitesse:" + weapon.vitesse + "; " : ""}${weapon.vitalite ? "Vitalité:" + weapon.vitalite + "; " : ""}${weapon.prix ? "Prix:" + weapon.prix + "po;" : ""}`}
                </option>
              }
            } else {
              const disabledCondition = totaux.slots + (weapon.slotsArmes ? weapon.slotsArmes : 1) > classe.slotsArmes ? true : false
              return <option disabled={disabledCondition}
                key={weapon.nom} value={weapon.nom}
                style={styleCondition(weapon)}
              >
                {`${weapon.nom}${weapon.slotsArmes ? " (2 mains)" : ""} => ${weapon.degats ? "Dégats:" + weapon.degats + "; " : ""}${weapon.vitesse ? "Vitesse:" + weapon.vitesse + "; " : ""}${weapon.vitalite ? "Vitalité:" + weapon.vitalite + "; " : ""}${weapon.prix ? "Prix:" + weapon.prix + "po;" : ""}`}
              </option>
    
            }
          });
    
          return (
            <React.Fragment>
              <optgroup style={theme.palette.blanc} key={weaponsOrOptGroup[0]} label={weaponsOrOptGroup[0]}>
                {options}
              </optgroup>
            </React.Fragment>
          );
        });
      };

    const handleWeapon = (event) => {
        const keySelect = event.target.getAttribute("id")
        

        if (event.target.value === "disarmed"){
          return disarmed(keySelect)
        }
    
        const nomArme = event.target.value;
        const checkNom = (weaponObject) => {
          if (weaponObject.nom === nomArme){
            let colorObject = {};
            colorObject[keySelect] = weaponObject.type;
            setColorsObject({...colorsObject,  ...colorObject})
            return toggleWeapon(weaponObject, keySelect)
          }else{
            return null;
          }
          
        };
    
        weaponsArray.forEach((element) => {
          element[0][1].forEach((weaponObject) => checkNom(weaponObject));
        });
    
      };

    const renderSelectWeapons = ((slotsClasse, datas) => {
        let components = []
    
        for (let index = 0; index < slotsClasse; index++) {
          components.push(
            <FormControl key={index}>
              <InputLabel id="armes">Armes</InputLabel>
              <Select
                native
                labelId="label"
                id={index}
                onChange={(event) => handleWeapon(event)}
                style={colorsObject ? theme.palette[colorsObject[index]] ? theme.palette[colorsObject[index]]: null  :null }
              >
                <option value="disarmed" selected={!armes.length? true: false}>
                -
              </option>
                {renderWeapons(datas, index)}
              </Select>
              <FormHelperText>
                {
                  armes.find(arme => arme.slot === index) && armes.find(arme => arme.slot === index).arme.pecial
                  ?
                  "true"
                  :
                  "false"
                }
              </FormHelperText>
            </FormControl>
          )
        }
        return (<React.Fragment>
          {components}
        </React.Fragment>)
    
      })

    return renderSelectWeapons(classe.slotsArmes, datas)
} 

export default Armes