import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MARK_AS_FAVORITES } from "../../actions/action1";

const BodyCard = ({ value }) => {
  const { bodyData, meta_data } = useSelector((state) => state);
  const [buttonName, setButtonName] = useState(false);

  const dispatch = useDispatch();

  console.log("bodycard", value);
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
                    style={{ left: "17px", top: "7px" }}
                    className="icon-text"
                  >
                    {"J"}
                  </text>
                </i>
              </div>
            </div>
            <div className="header-subject">
              {meta_data && meta_data.from.name}
              <text className="card-placeholder">
                {meta_data && meta_data.date}
              </text>
            </div>
            <div className="header-button">
              <button
                onClick={() => {
                  setButtonName(!buttonName);
                  dispatch({ type: MARK_AS_FAVORITES, payload: meta_data });
                }}
                className="favorite-button"
              >
                {buttonName}
              </button>
            </div>
          </div>

          <div>
            <p className="body-description">{bodyData && bodyData}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BodyCard;
