import React, { useState } from "react";
// const user = {
//   a: "Foobar",
//   b: "bounced@flipkart.com",
//   c: "Lorem Ipsum",
//   d: "Nam eget erat accumsan, auctor sapien ut, tempor diam",
//   e: 1582727505000,
// };

const EmailCard = ({
  value: {
    subject,
    id,
    date,
    short_description,
    from: { email, name },
  },
}) => {
  const imageValue = name.split("");
  const [isFavorite, setIsFavorite] = useState(true);
  console.log(subject);

  return (
    <div className="EmailCard">
      <div className="card-avatar">
        <div>
          <i className="card-icon">
            <div className="icon-text">
              <text>{imageValue[0].toUpperCase()}</text>
            </div>
          </i>
        </div>
      </div>
      <div className="card-details">
        <text class="card-title">
          <span className="card-placeholder">From: </span>
          {name} <span>{email}</span>{" "}
        </text>
        <text className="card-subject">
          <span className="card-placeholder">Subject: </span>
          {subject}
        </text>
        <text className="card-placeholder card-description">
          {short_description}
        </text>
        <text
          onClick={() => setIsFavorite(!isFavorite)}
          className=" card-placeholder card-date"
        >
          {date}{" "}
          {isFavorite && (
            <span style={{ color: "#e54065", marginLeft: "20px" }}>
              Favorite{" "}
            </span>
          )}{" "}
        </text>
      </div>
    </div>
  );
};

export default EmailCard;
