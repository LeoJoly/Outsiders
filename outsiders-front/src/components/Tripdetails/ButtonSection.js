// == Package Import
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ButtonSection = ({ handleDelete }) => {
  // toggle delete modal
  const [ displayModal, setDisplayModal ] = useState(true);
  const modalCSS = displayModal
    ? "delete-modal active"
    : "delete-modal"
  
  // handle delete
  const deleteTrip = () => {
    handleDelete()
  }

  return (
    <section className="buttonSection">
      <button className="buttonSection__btn"><NavLink to="/modifier-sortie">Modifier la sortie</NavLink></button>
      <button onClick={() => {setDisplayModal(!displayModal)}} className="buttonSection__btn buttonSection__btn--del">Annuler la sortie</button>
      <button className="buttonSection__btn">Rejoindre la sortie</button>
      <button className="buttonSection__btn">Je ne suis plus disponible</button>
      <div className={modalCSS}>
        <p>Sûr ?</p>
        <button onClick={deleteTrip} className="delete-modal__btn yes"><NavLink to="/">Oui</NavLink></button>
        <button onClick={() => {setDisplayModal(!displayModal)}} className="delete-modal__btn no">Non</button>
      </div>
    </section>
  );
};

export default ButtonSection;