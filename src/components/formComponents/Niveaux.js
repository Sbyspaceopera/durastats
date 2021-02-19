import React,{useState, useEffect} from 'react'

import {
    TextField,
    FormControl
  } from "@material-ui/core";

const Niveaux = (props) =>{
    const {level, toggleLevel} = props
    const [debouncedLevel, setDebouncedLevel] = useState(5)

    useEffect(() => {
      const timeOutLevel = setTimeout(() => {
          if (debouncedLevel < 5) {
          toggleLevel(5);
        } else if (debouncedLevel > 60) {
          toggleLevel(60);
        } else {
          toggleLevel(debouncedLevel);
        }
      }, 2000);
      return () => {
        clearTimeout(timeOutLevel)
      }
    }, [debouncedLevel, toggleLevel])

    useEffect(() => {
      setDebouncedLevel(level)
    }, [level])


    return(
      <FormControl>
        <TextField
          onChange={event => setDebouncedLevel(event.target.value)}
          id="level"
          type="number"
          label="Niveau"
          value={debouncedLevel}
          InputProps={{ inputProps: { max: 60, min: 5 } }}
        />
      </FormControl>
    )
}

export default Niveaux