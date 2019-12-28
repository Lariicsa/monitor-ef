import React from "react";
import "./Sidebar.scss";

export const Sidebar = ({ open, children, setOpen }) => {
  return (
    <>
      <div
        className={open ? "sidebar__Background open" : "sidebar__Background"}
        open={open}
        onClick={() => setOpen(!open)}
      ></div>
      <aside className={open ? "sidebar open" : "sidebar"}>{children}</aside>
    </>
  );
};
