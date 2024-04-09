import React from "react";

const LowerBarMenu = [
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Settings.png?updatedAt=1712477474223",
    title: "Settings",
  },
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Logout.png?updatedAt=1712477474203",
    title: "Logout",
  },
];
const LowerMenu = () => {
  return (
    <div>
      {LowerBarMenu.map((menuItem, index) => {
        const { icon, title } = menuItem;
        return (
          <div className="side-menu" key={index}>
            <img className="side-img" src={icon} />
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default LowerMenu;
