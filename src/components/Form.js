import React, { useEffect } from "react";
import { MenuItem, Container} from "@material-ui/core";

import datas from "../datas/datas.json";

import { connect } from "react-redux";

import {
  toggleRace,
  toggleClasse,
  toggleLevel,
  toggleWeapon,
  setTotal,
  toggleSlots,
  toggleArmure,
  toggleCasque,
  toggleBottes,
  disarmed
} from "../actions";

import Race from './formComponents/Race'
import Classe from './formComponents/Classe'
import Niveaux from './formComponents/Niveaux'
import Armes from './formComponents/Armes'
import Armure from './formComponents/Armure'
import SimpleArrayItems from "./formComponents/SimpleArrayItems"
const Form = (props) => {
  const { race, level, classe, setTotal, totaux, armes, toggleWeapon, disarmed, toggleRace, toggleClasse, toggleSlots, toggleLevel, armure, toggleArmure, casque, toggleCasque,bottes,toggleBottes } = props;
  const weaponsArray =
    datas.equipements.armesBases.map((data) =>
      Object.entries(data).map((weaponsOrOptGroup) => weaponsOrOptGroup)
    );


  useEffect(() => {
    setTotal();
  }, [race, level, classe, setTotal, armes, totaux.slots, armure,casque, bottes]);

  const renderOptions = (datas) => {
    return datas.map((data) => {
      return (
        <MenuItem key={data.nom} value={data.nom}>
          {data.nom}
        </MenuItem>
      );
    });
  };

  return (
    <Container>
      <Race datas={datas} race={race} renderOptions={renderOptions} toggleRace={toggleRace}/>
      {race.nom? (<Classe datas={datas} classe={classe} renderOptions={renderOptions} toggleClasse={toggleClasse} toggleSlots={toggleSlots} />) : null}
      {classe.nom ? (
        <React.Fragment>
          <Niveaux level={level} toggleLevel={toggleLevel} />
          <Armes classe={classe} datas={datas.equipements.armesBases} totaux={totaux} armes={armes} weaponsArray={weaponsArray} disarmed={disarmed} toggleWeapon={toggleWeapon}/>
          <Armure armure={armure} toggleArmure={toggleArmure} datas={datas.equipements.armuresBases} />
          <SimpleArrayItems label="Casque" item={casque} toggleItem={toggleCasque} datas={datas.equipements.casquesBases} />
          <SimpleArrayItems label="Bottes" item={bottes} toggleItem={toggleBottes} datas={datas.equipements.bottesBases} />
        </React.Fragment>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    race: state.race,
    totaux: state.totaux,
    classe: state.classe,
    level: state.level,
    armes: state.armes,
    armure: state.armure,
    casque: state.casque,
    bottes: state.bottes
  };
};

export default connect(mapStateToProps, {
  toggleRace,
  toggleClasse,
  toggleLevel,
  setTotal,
  toggleWeapon,
  toggleSlots,
  toggleArmure,
  toggleCasque,
  toggleBottes,
  disarmed
})(Form);
