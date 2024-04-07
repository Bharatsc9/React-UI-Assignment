import React from "react";

const SideBarMenu = [
  {
    icon: "icon-link",
    title: "Home",
  },
  {
    icon: "icon-link",
    title: "Activities",
  },
  {
    icon: "icon-link",
    title: "Analytics",
  },
  {
    icon: "icon-link",
    title: "Transactions",
  },
  {
    icon: "icon-link",
    title: "Library",
  },
];

const SideMenu = () => {
  return SideBarMenu.map((menuItem, index) => {
    const { icon, title } = menuItem;
    return (
      <div className="side-menu" key={index}>
        <img src={icon} />
        {title}
      </div>
    );
  });
};

export default SideMenu;
