import React from "react";

const MockData = [
  {
    title: "EFFICIENCY",
    content: "Lorem Ipsum",
    value: [{ val: "1.1321" }, { icon: "Link" }],
    price: "+0.0018 (+0.18%)",
    rate: "0.00 USD",
  },
  {
    title: "EFFICIENCY",
    content: "Lorem Ipsum",
    value: [{ val: "1.1321" }, { icon: "Link" }],
    price: "+0.0018 (+0.18%)",
    rate: "0.00 USD",
  },
  {
    title: "EFFICIENCY",
    content: "Lorem Ipsum",
    value: [{ val: "1.1321" }, { icon: "Link" }],
    price: "+0.0018 (+0.18%)",
    rate: "0.00 USD",
  },
  {
    title: "EFFICIENCY",
    content: "Lorem Ipsum",
    value: [{ val: "1.1321" }, { icon: "Link" }],
    price: "+0.0018 (+0.18%)",
    rate: "0.00 USD",
  },
];

const RatesCard = () => {
  return (
    <div>
      {MockData.map((cardItem, index) => {
        const { title, content, value, price, rate } = cardItem;
        return (
          <div key={index}>
            <div>{title}</div>
            <div>{content}</div>
            <div>
              {value.map((valueItem, idx) => (
                <div key={idx}>
                  <div>{valueItem.val}</div>
                  <div>{valueItem.icon}</div>
                </div>
              ))}
            </div>
            <div>{price}</div>
            <div>{rate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RatesCard;
