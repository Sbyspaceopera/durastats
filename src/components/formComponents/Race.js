import React from "react"

import {
    Select,
  InputLabel,
  FormControl,
  FormHelperText
} from "@material-ui/core"

const Race = (props) => {
    const {datas, race, renderOptions, toggleRace} = props

    const handleRace = (event, props) => {
        toggleRace(
          datas.races.find((race) => race.nom === event.target.value)
        );
      };

    return (
        <FormControl>
            <InputLabel id="race">Race</InputLabel>
            <Select
            onChange={(event) => handleRace(event, props)}
            id="race"
            value={race.nom ? race.nom : ""}
            >
            {renderOptions(datas.races)}
            </Select>
            <FormHelperText>{race.special ? `Effet spécial : ${race.special}` : `Effet spécial : /` }</FormHelperText>
      </FormControl>
    )
}

export default Race