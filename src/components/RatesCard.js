import React from "react";

const MockData = [
  {
    image: "https://ik.imagekit.io/oog7a5ln3/BHARAT/CATALIX%20ASSESMENT/image%201.png?updatedAt=1712477476961",
    title: "EFFICIENCY",
    content: "Lorem Ipsum",
    value: "1.1321",
    icon: "./photos/arrow-down.png",
    positive: true,
    price: "0.0015",
    percentageChange: "0.18%",
    currencyType: "USD",
    currencyAmount: "0.00",
  },
  {
    title: "TIME TO MARKET",
    content: "Lorem Ipsum",
    value: "627,176",
    icon: "./photos/Arrow Up.png",
    positive: true,
    price: "97,914.00",
    percentageChange: "26.06%",
    currencyType: "JPY",
    currencyAmount: "161,940,726,108",
  },
  {
    title: "TECH DEBT",
    content: "Lorem Ipsum",
    value: "1.1763",
    icon: "./photos/Arrow Up.png",
    positive: true,
    price: "0.0015",
    percentageChange: "0.13%",
    currencyType: "USD",
    currencyAmount: "0.00",
  },
  {
    title: "PREDICTABILITY",
    content: "Lorem Ipsum",
    value: "0.00616010",
    icon: "./photos/arrow-down.png",
    positive: true,
    price: "0.00050460",
    percentageChange: "16.88%",
    currencyType: "BTC",
    currencyAmount: "1,566",
  },
];

const RatesCard = () => {
  return (
    <div className="main-card">
      {MockData.map((cardItem, index) => {
        const {
          image,
          title,
          content,
          value,
          icon,
          positive,
          price,
          percentageChange,
          currencyType,
          currencyAmount,
        } = cardItem;
        return (
          <div style={{backgroundImage: `url(${image})`}} className="small-card" key={index}>
            <div className="bold-title">{title}</div>
            <div className="light-title">{content}</div>
            <div className="card-num">
              <div>
                {value} 
              </div>
              <div>
              <img className="drop-down" src={icon}/> 
              </div>
            </div>
            <div className="price-card">
              <div>
                {positive ? "+" : "-"} {price}
              </div>
              <div className="cent-card">
                ({positive ? "+" : "-"} {percentageChange})
              </div>
            </div>
            <div className="currency">{`${currencyAmount} ${currencyType}`}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RatesCard;
