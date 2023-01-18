import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MARK_AS_FAVORITES } from "../../actions/action1";
// import { formattedDate } from "../EmaiilCard/emailCard";

const BodyCard = ({ value }) => {
  const ADD_TO_FAV = "ADD TO FAVORITES";

  const REMOVE_FROM_FAV = "REMOVE FROM FAVORITES";

  const [button, setButton] = useState(ADD_TO_FAV);

  const { bodyData, meta_data, emailList, formatedDate } = useSelector(
    (state) => state
  );

  const imageValue = meta_data && meta_data.from.name.split("");

  const dispatch = useDispatch();
  //  const checkFav =
  //    meta_data &&
  //    emailList &&
  //    emailList.filter((item) => meta_data.id === item.id);
  //  console.log("checkFav", checkFav);

  const checkFav =
    meta_data &&
    emailList &&
    emailList.filter((item) => meta_data.id === item.id);
  // console.log(checkFav, "checkFav", meta_data);

  // console.log("bodycard", value);
  return (
    <>
      {meta_data && (
        <div className="BodyCard">
          <div className="body-header">
            <div style={{}} className="card-avatar">
              <div>
                <i
                  style={{
                    minHeight: "57px",
                    minWidth: "57px",
                    margin: "30px 0px 0px 10px",
                  }}
                  className="card-icon"
                >
                  <text
                    style={{ left: "15px", top: "1px" }}
                    className="icon-text"
                  >
                    {imageValue[0].toUpperCase()}
                  </text>
                </i>
              </div>
            </div>
            <div className="header-subject">
              {meta_data && meta_data.subject}
              <text className="card-placeholder">
                {/* {meta_data && meta_data.date} */}
                {formatedDate}
              </text>
            </div>
            <div className="header-button">
              <button
                className="favorite-button"
                onClick={() => {
                  if (button === ADD_TO_FAV && checkFav.isFAv === undefined) {
                    dispatch({ type: MARK_AS_FAVORITES, payload: meta_data });
                    setButton(REMOVE_FROM_FAV);
                  }
                  if (button === REMOVE_FROM_FAV) {
                    dispatch({
                      type: "REMOVE_FROM_FAVORITES",
                      payload: meta_data,
                    });
                    setButton(ADD_TO_FAV);
                  }
                }}
              >
                {button}
              </button>
            </div>
          </div>

          <div>
            {/* <p className="body-description">{bodyData && bodyData}</p> */}
            {bodyData && (
              <div
                className="body-description"
                dangerouslySetInnerHTML={{ __html: bodyData }}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default BodyCard;
