import React from "react";
import EmailCard from "../EmaiilCard/emailCard";
import { useSelector } from "react-redux";

const EmailList = () => {
  const data = useSelector((state) => state.emailData);
  console.log(data);
  return (
    <div className="emailList">
      <h1>emaillist</h1>

      {data && data.map((item) => <EmailCard value={item} />)}
    </div>
  );
};

export default EmailList;
