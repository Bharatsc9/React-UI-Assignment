import React from "react";

const DashData = [
  {
    features: "+ Create Report",
  },
  {
    features: "Share this dashboard",
  },
  {
    features: "Select Duration",
  },
  {
    features: "Compare with Duration",
  },
];

const DashBar = () => {
  return (
    <div className="dash-item">
      {DashData.map((featItem, index) => {
        const { features } = featItem;
        return (
          <div className="dash-keys" key={index}>
            {features}
          </div>
        );
      })}
    </div>
  );
};

export default DashBar;
