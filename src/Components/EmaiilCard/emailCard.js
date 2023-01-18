import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MARK_AS_READ,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../../actions/action1";

const background1 = "#f4f5f9";
const background2 = "#cfd2dc";

let myData;
export let formattedDate;

const bodyData = async (_id) => {
  const {
    data: { body },
  } = await axios.get(`https://flipkart-email-mock.now.sh/?id=${_id}`);
  myData = body;
  // console.log("BodyData 17", myData);
  return myData;
};

const EmailCard = ({ data }) => {
  console.log("EmailCard entered");
  const { filterType } = useSelector((state) => state);
  const _id = data.id;
  const imageValue = data.from.name.split("");
  const [currentId, setcurrentId] = useState("");

  const [backgroundColor, setBackgrounColor] = useState({
    backgroundColor: background1,
  });
  const dispatch = useDispatch();
  // console.log(currentId);
  console.log(currentId);

  let convertedDate = new Date(data.date);

  let dateString = convertedDate;
  let date = new Date(dateString);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let time = hours + ":" + minutes + " " + ampm;
  formattedDate = `${day}/${month}/${year} ${time}`;
  //console.log(formattedDate, "formattedDate");
  console.log(data);
  console.log("EmailCard ended");
  return (
    <>
      <div
        onClick={async (e) => {
          console.log("onclick triggered");
          setBackgrounColor({ backgroundColor: background2 });

          dispatch({ type: MARK_AS_READ, payload: data });
          if (filterType === "unread") {
            dispatch({ type: SORT_BY_READ, payload: true });
            dispatch({ type: SORT_BY_UNREAD, payload: false });
          }
          setcurrentId(data.id);
          dispatch({ type: "CURRENT_ID", payload: data.id });
          await bodyData(_id);
          dispatch({ type: "META_DATA", payload: data });
          dispatch({ type: "FORMATED_DATE", payload: formattedDate });
          dispatch({ type: "BODY_DATA", payload: myData });
          dispatch({ type: "RECIVED_ID", payload: _id });
          console.log("data.id", _id);
        }}
        className="EmailCard"
        style={backgroundColor}
      >
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
            {data.name} <span>{data.from.email}</span>{" "}
          </text>
          <text className="card-subject">
            <span className="card-placeholder">Subject: </span>
            {data.subject}
          </text>
          <text className="card-placeholder card-description">
            {data.short_description}
          </text>
          <text className=" card-placeholder card-date">
            {formattedDate}
            {}{" "}
            {data.isFav && (
              <span style={{ color: "#e54065", marginLeft: "20px" }}>
                Favorite{" "}
              </span>
            )}{" "}
          </text>
        </div>
      </div>
    </>
  );
};

export default EmailCard;
