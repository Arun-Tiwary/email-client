import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA } from "../../actions/action1";
import { emailData } from "../../Utils/emailData";

import BodyCard from "../BodyCard/bodyCard";
import EmailCard from "../EmaiilCard/emailCard";

const EmailBody = () => {
  console.log("Emailbody entered");
  const { byRead, byUnread, byFavorites, emailList, meta_data } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  //network call to get email list.
  useEffect(() => {
    async function fetchdata() {
      const list = await emailData();

      dispatch({ type: ADD_DATA, payload: { emailList: list } });
    }
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //function to filter email list
  const transformedList = () => {
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

  // console.log("Emailbody ended");
  return (
    <div className="EmailBody">
      <div className="email-list">
        {emailList &&
          transformedList().map((item) => (
            <EmailCard key={item.id} data={item}></EmailCard>
          ))}
      </div>
      {meta_data &&
        transformedList() &&
        transformedList().length > 0 &&
        !byFavorites && <div className="template-body">{<BodyCard />}</div>}
    </div>
  );
};

export default EmailBody;
