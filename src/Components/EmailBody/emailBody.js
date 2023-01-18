import React from "react";
import { useSelector } from "react-redux";
import BodyCard from "../BodyCard/bodyCard";
import EmailCard from "../EmaiilCard/emailCard";

const EmailBody = () => {
  console.log("Emailbody entered");
  const { byRead, byUnread, byFavorites, emailList } = useSelector(
    (state) => state
  );

  const transformedData = () => {
    let filterdList = emailList;

    if (byRead) {
      filterdList = emailList.filter((item) => item.isRead);
      console.log("filterdList", filterdList);
    }

    if (byUnread) {
      filterdList = emailList.filter((item) => !item.isRead);
    }
    if (byFavorites) {
      filterdList = emailList.filter((item) => item.isFav);
    }

    return filterdList;
  };

  console.log("Emailbody ended");
  // var temp = transformedData();
  return (
    <div className="EmailBody">
      <div className="email-list">
        {emailList &&
          transformedData().map((item) => (
            <EmailCard key={item.id} data={item}></EmailCard>
          ))}
      </div>
      {transformedData() && transformedData().length > 0 && (
        <div className="template-body">{<BodyCard />}</div>
      )}
    </div>
  );
};

export default EmailBody;
