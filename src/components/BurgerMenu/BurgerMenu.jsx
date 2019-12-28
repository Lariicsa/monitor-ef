import React from "react";
import "./BurgerMenu.scss";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <div className={ open ? 'burger open': 'burger'} open={open} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
