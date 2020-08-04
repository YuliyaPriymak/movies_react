import React, { useState } from "react";
import { Button } from '../Button/Button';
import '../BtnMenu/BtnMenu.scss'

const CN = 'btn-menu';

export const BtnGenres = props => {

  const { options, onSortingChange } = props;
  const [isOpenChange, setIsOpenChange] = useState(false);


  const onLabelClick = e => {
    onSortingChange(e.target.id);
    toggleMenu();
  };

  const toggleMenu = () => {
    setIsOpenChange(!isOpenChange);
  };

  return (
    <div className={CN}>
      <Button className="buttonMenu btn-primary custom-select" onClick={toggleMenu} label="Genres"/>
      <ul className="change-menu list-group">
        {isOpenChange && !!options.length && options.map(item => {
          return (
            <li key={item.id} id={item.id} className='list-group-item' onClick={onLabelClick}>
              {item.name}
            </li>
          );
        })}

        { // menu is empty
          isOpenChange && !options.length && (
            <li className="list-group-item">
              No Options To Display
            </li>
          )
        }
      </ul>
    </div>
  );
};
