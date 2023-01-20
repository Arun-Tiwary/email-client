import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MARK_AS_FAVORITES } from "../../actions/action1";
import { giveMeBody } from "../../Utils/bodyData";
import { dateConverter } from "../../Utils/dateFomatt";

const BodyCard = ({ value }) => {
  const [bodyData, setData] = useState("");

  const { meta_data, recived_id } = useSelector((state) => state);
  const dispatch = useDispatch();

  //network call to get body data.
  useEffect(() => {
    async function fetchdata() {
      const body = await giveMeBody(recived_id);
      setData(body);
    }
    fetchdata();
  }, [recived_id]);

  // let BUTTON_NAME = "ADD TO FAVORITES";

  // const ADD_TO_FAV = "ADD TO FAVORITES";

  // const REMOVE_FROM_FAV = "REMOVE FROM FAVORITES";

  // taking out first name from name
  const imageValue = meta_data && meta_data.from.name.split("");

  // const checkFav =
  //   meta_data &&
  //   emailList &&
  //   emailList.filter((item) => meta_data.id === item.id);

  // function to get date in correct format
  let originalDate = meta_data && new Date(meta_data.date);
  const newDateFormat = dateConverter(originalDate);

  // console.log(meta_data, "checkFav, ", checkFav);
  // console.log(buttonName);

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
              <text className="card-placeholder">{newDateFormat}</text>
            </div>
            <div className="header-button">
              {/* <div>
                {buttonName === ADD_TO_FAV ? (
                  <button
                    onClick={() => {
                      // console.log(" on CLICK", buttonName);
                      dispatch({ type: BUTTON_NAME, payload: ADD_TO_FAV });
                      dispatch({
                        type: MARK_AS_FAVORITES,
                        payload: meta_data,
                      });
                    }}
                  >
                    Add to fav button
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch({
                        type: REMOVE_FROM_FAVORITES,
                        payload: meta_data,
                      });
                    }}
                  >
                    remove from favorite button
                  </button>
                )}
              </div> */}

              {/* ///////////////////////// */}
              <button
                className="favorite-button"
                onClick={() => {
                  dispatch({
                    type: MARK_AS_FAVORITES,
                    payload: meta_data,
                  });
                }}
              >
                Add to Favorite
              </button>

              {/*/////////////////////////  */}

              {/* <button
                onClick={() => {
                  if (checkFav.isFav === true) {
                    dispatch({
                      type: REMOVE_FROM_FAVORITES,
                      payload: meta_data,
                    });
                    dispatch({ type: BUTTON_NAME, payload: REMOVE_FROM_FAV });
                  } else if (
                    checkFav.isFav === undefined ||
                    checkFav.isFav === false
                  ) {
                    dispatch({
                      type: MARK_AS_FAVORITES,
                      payload: meta_data,
                    });
                    dispatch({ type: BUTTON_NAME, payload: REMOVE_FROM_FAV });
                  }
                }}
              >
                {buttonName}
              </button> */}

              {/* //////////////////////////////////// */}

              {/* <button
                className="favorite-button"
                onClick={() =>
                   {
                  if (buttonName === ADD_TO_FAV) {
                    dispatch({
                      type: MARK_AS_FAVORITES,
                      payload: meta_data,
                    });
                    dispatch({
                      type: BUTTON_NAME,
                      payload: REMOVE_FROM_FAV,
                    });
                  }
                  if (buttonName === REMOVE_FROM_FAV) {
                    dispatch({
                      type: REMOVE_FROM_FAVORITES,
                      payload: meta_data,
                    });

                    dispatch({
                      type: BUTTON_NAME,
                      payload: ADD_TO_FAV,
                    });
                  }
                }
              }
              >
                {buttonName}
              </button> */}
            </div>
          </div>
          <div>
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
