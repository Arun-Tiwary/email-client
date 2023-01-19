import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BUTTON_NAME,
  CURRENT_ID,
  MARK_AS_READ,
  META_DATA,
  RECIVED_ID,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../../actions/action1";
import { dateConverter } from "../../Utils/dateFomatt";

const ADD_TO_FAV = "ADD TO FAVORITES";
const REMOVE_FROM_FAV = "REMOVE FROM FAVORITES";
const background1 = "#f4f5f9";
const background2 = "#cfd2dc";

const EmailCard = ({ data }) => {
  const { filterType } = useSelector((state) => state);
  const _id = data.id;
  const imageValue = data.from.name.split("");
  const [currentId, setcurrentId] = useState("");

  const [backgroundColor, setBackgrounColor] = useState({
    backgroundColor: background1,
  });
  const dispatch = useDispatch();
  console.log(currentId);

  let originalDate = new Date(data.date);
  const convertedDate = dateConverter(originalDate);

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
          dispatch({ type: CURRENT_ID, payload: data.id });
          dispatch({ type: META_DATA, payload: data });
          dispatch({ type: RECIVED_ID, payload: _id });
          data.isFav
            ? dispatch({ type: BUTTON_NAME, payload: REMOVE_FROM_FAV })
            : dispatch({ type: BUTTON_NAME, payload: ADD_TO_FAV });
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
            {convertedDate}{" "}
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
