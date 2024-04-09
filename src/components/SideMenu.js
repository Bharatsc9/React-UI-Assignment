import React from "react";

const SideBarMenu = [
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Home.png?updatedAt=1712477474189",
    title: "Home",
  },
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Timer.png?updatedAt=1712477474197",
    title: "Activities",
  },
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/analyticsIcon.png?updatedAt=1712477474186",
    title: "Analytics",
  },
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Rocket.png?updatedAt=1712477474192",
    title: "Transactions",
  },
  {
    icon: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/Layers.png?updatedAt=1712477474226",
    title: "Library",
  },
];

const SideMenu = () => {
  return (
    <div>
      {SideBarMenu.map((menuItem, index) => {
        const { icon, title } = menuItem;
        return (
          <div className="side-menu" key={index}>
            <img className="side-img" src={icon} />
            <div>{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default SideMenu;
