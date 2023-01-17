import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MARK_AS_READ,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../../actions/action1";

let myData;

const bodyData = async (_id) => {
  const {
    data: { body },
  } = await axios.get(`https://flipkart-email-mock.now.sh/?id=${_id}`);
  // dispatch({type: BODY_DATA, payload:{...emailList,body:data}})
  myData = body;
  console.log("BodyData 17", myData);
  return myData;
};

const EmailCard = ({ data }) => {
  const { filterType } = useSelector((state) => state);
  const _id = data.id;
  const imageValue = data.from.name.split("");
  const [isFavorite, setIsFavorite] = useState(true);
  const [currentId, setcurrentId] = useState("");
  const [first, setfirst] = useState();
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={async (e) => {
          dispatch({ type: MARK_AS_READ, payload: data });
          if (filterType === "unread") {
            dispatch({ type: SORT_BY_READ, payload: true });
            dispatch({ type: SORT_BY_UNREAD, payload: false });
          }
          setcurrentId(data.id);
          dispatch({ type: "CURRENT_ID", payload: data.id });
          await bodyData(_id);
          dispatch({ type: "META_DATA", payload: data });
          dispatch({ type: "BODY_DATA", payload: myData });
          dispatch({ type: "RECIVED_ID", payload: _id });
          console.log("data.id", _id);
        }}
        className="EmailCard"
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
          <text
            onClick={() => !isFavorite}
            className=" card-placeholder card-date"
          >
            {data.date}{" "}
            {data.isFav && (
              <span style={{ color: "#e54065", marginLeft: "20px" }}>
                Favorite{" "}
              </span>
            )}{" "}
          </text>
          {/* <buttton
          onClick={() => {
            console.log("bodychecked");
            <BodyCard data={} />;
          }}
        >
          checkbody
        </buttton> */}
          {/* {myData && <button>okshowbody</button>} */}
          {/* <button
          className="card-button"
          onClick={() => {
            dispatch({ type: MARK_AS_READ, payload: data });
          }}
        >
          Mark as read
        </button> */}

          {/* <div>{myData && <BodyCard value={myData} />}</div> */}
        </div>
      </div>
      {/* <div className="template-body">
        {currentId === _id ? <BodyCard value={myData} /> : ""}
      </div> */}
    </>
  );
};

export default EmailCard;
