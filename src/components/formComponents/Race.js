import React from "react"
import { useTheme } from '@material-ui/core/styles';
import {
    Select,
  InputLabel,
  FormControl,
  FormHelperText,
  MenuItem
} from "@material-ui/core"

const Race = (props) => {
    const {datas, race, toggleRace} = props
    const theme = useTheme()

    const handleRace = (event, props) => {
        toggleRace(
          datas.races.find((race) => race.nom === event.target.value)
        );
      };

      const renderRace = (datas) => {
        return datas.map((data) => {
          return (
            <MenuItem key={data.nom} value={data.nom} style={theme.palette[data.nom]}>
              {data.nom}
            </MenuItem>
          );
        });
      };

    return (
        <FormControl>
            <InputLabel id="race">Race</InputLabel>
            <Select
            onChange={(event) => handleRace(event, props)}
            id="race"
            value={race.nom ? race.nom : ""}
            style={race.nom ? theme.palette[race.nom] : null}
            >
            {renderRace(datas.races)}
            </Select>
            <FormHelperText>{race.special ? `Effet spécial : ${race.special}` : `Effet spécial : /` }</FormHelperText>
      </FormControl>
    )
}

export default Race