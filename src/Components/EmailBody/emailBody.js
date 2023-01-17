import React, { useState } from "react";
import { useSelector } from "react-redux";
import BodyCard from "../BodyCard/bodyCard";

import EmailCard from "../EmaiilCard/emailCard";

const EmailBody = () => {
  const { byRead, byUnread, byFavorites, emailList } = useSelector(
    (state) => state
  );

  const transformedData = () => {
    let sortedList = emailList;

    if (byRead) {
      sortedList = emailList.filter((item) => item.isRead);
      console.log("sortedList", sortedList);
    }

    if (byUnread) {
      sortedList = emailList.filter((item) => !item.isRead);
    }

    if (byFavorites) {
      sortedList = emailList.filter((item) => item.isFav);
    }

    return sortedList;
  };

  console.log("emailBody.js => emailList", emailList);

  return (
    <div className="EmailBody">
      <div className="email-list">
        {emailList &&
          transformedData().map((item) => <EmailCard data={item}></EmailCard>)}
      </div>
      {<div className="template-body">{<BodyCard />}</div>}
    </div>
  );
};

export default EmailBody;
