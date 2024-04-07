import React from "react";

const LowerBarMenu = [
  {
    icon: "icon-link",
    title: "Settings",
  },
  {
    icon: "icon-link",
    title: "Logout",
  },
];
const LowerMenu = () => {
  return LowerBarMenu.map((menuItem, index) => {
    const { icon, title } = menuItem;
    return (
      <div className="side-menu" key={index}>
        <img src={icon} />
        {title}
      </div>
    );
  });
};

export default LowerMenu;
