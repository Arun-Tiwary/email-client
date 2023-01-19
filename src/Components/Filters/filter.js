import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_TYPE,
  SORT_BY_FAVORITES,
  SORT_BY_READ,
  SORT_BY_UNREAD,
} from "../../actions/action1";

const Filters = () => {
  const { byRead, byUnread, byFavorites, emailList, meta_data } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  // storing a list of items marked as favorites
  const favList = emailList && emailList.filter((item) => item.isFav);

  let filterdList;
  let filterdData;

  // const changeData = emailList && emailList.filter();
  // console.log("changeData", changeData);

  // const filterdList = emailList
  //   ? byUnread
  //     ? emailList.filter((item, i) => !item.isRead)
  //     : byUnread
  //     ? emailList.filter((item, i) => item.isRead)
  //     : byFavorites
  //     ? emailList.filter((item, i) => item.isFav)
  //     : ""
  //   : "";

  // console.log("filterdfvdfList", filterdList[0]);

  // if (emailList && byRead) {
  //   filterdList = emailList.filter((item, i) => item.isRead);
  // }
  // if (emailList && byUnread) {
  //   filterdList = emailList.filter((item, i) => !item.isRead);
  //   filterdData = [...filterdList].shift();
  // }

  // if (emailList && byFavorites) {
  //   filterdList = emailList.filter((item, i) => item.isFav);
  // }

  console.log("filterdList", filterdList);

  console.log("filterdData", filterdData);
  console.log("meta_data", meta_data);

  return (
    <div className="filters">
      <h3>Filter By: </h3>

      <div
        onClick={() => {
          dispatch({ type: SORT_BY_UNREAD, payload: true });
          dispatch({ type: SORT_BY_READ, payload: false });
          dispatch({ type: SORT_BY_FAVORITES, payload: false });
          dispatch({ type: "FILTER_TYPE", payload: "unread" });
          // dispatch({ type: META_DATA, payload: filterdData });
        }}
        className={byUnread ? "filterd-block" : "unfilterd-block"}
      >
        Unread
      </div>
      <div
        onClick={() => {
          dispatch({ type: SORT_BY_READ, payload: true });
          dispatch({ type: SORT_BY_UNREAD, payload: false });
          dispatch({ type: SORT_BY_FAVORITES, payload: false });
          dispatch({ type: FILTER_TYPE, payload: "read" });
        }}
        className={byRead ? "filterd-block" : "unfilterd-block"}
      >
        Read
      </div>
      <div
        onClick={() => {
          if (favList.length > 0) {
            dispatch({ type: SORT_BY_FAVORITES, payload: true });
            dispatch({ type: SORT_BY_UNREAD, payload: false });
            dispatch({ type: SORT_BY_READ, payload: false });
          } else {
            alert("Please add emails to favorites");
          }
        }}
        className={byFavorites ? "filterd-block" : "unfilterd-block"}
      >
        favorites
      </div>
      <div
        className="unfilterd-block"
        onClick={() => {
          dispatch({ type: SORT_BY_FAVORITES, payload: false });
          dispatch({ type: SORT_BY_UNREAD, payload: false });
          dispatch({ type: SORT_BY_READ, payload: false });
          dispatch({ type: FILTER_TYPE, payload: "" });
        }}
      >
        {" "}
        Remove Filters
      </div>
    </div>
  );
};

export default Filters;
