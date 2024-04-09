
import React from "react";

const CardData = [
  {
    dot: "Green",
    head: "On Time",
    items: [
      { label: "Completed iterations", value: "7" },
      { label: "Total iterations", value: "9" },
      { label: "%Iterations Done", value: "77.8%" },
    ],
  },
  {
    dot: "Green",
    head: "On Scope",
    items: [
      { label: "Story Points Done", value: "3200" },
      { label: "Total Story Points", value: "4230" },
      { label: "%Stories Done", value: "70.9%" },
    ],
  },
  {
    dot: "red",
    head: "On Velocity",
    items: [
      { label: "Average Velocity", value: "428.6" },
      { label: "Required Velocity", value: "615.0" },
    ],
  },
];

const CardComp = () => {
  return (
    <div className="card-comp">
      {CardData.map((cardItem, index) => {
        const { dot, head, items } = cardItem;
        return (
          <div className="single-card" key={index}>
            <div className="dot-card">{dot}</div>
            <div className="head-card">{head}</div>
            <div>
              {items.map((item, idx) => (
                <div className="item-card" key={idx}>
                  <div>{item.label}</div>
                  <div className="value-data">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardComp;
