import React, { useState } from "react";
import { useSelector } from "react-redux";

const Filters = () => {
  const [unread, setUnread] = useState(false);
  const [read, setRead] = useState(false);
  const [favorites, setFavourites] = useState(false);

  const { byRead, byUnread, byFavorites, emailData } = useSelector(
    (state) => state
  );
  console.log(byRead, byUnread, byFavorites, emailData);

  return (
    <div className="filters">
      <h3>Filter By: </h3>

      <div
        onClick={() => {
          setUnread(true);
          setRead(false);
          setFavourites(false);
        }}
        className={unread ? "filterd-block" : "unfilterd-block"}
      >
        Unread
      </div>
      <div
        onClick={() => {
          setUnread(false);
          setRead(true);
          setFavourites(false);
        }}
        className={read ? "filterd-block" : "unfilterd-block"}
      >
        Read
      </div>
      <div
        onClick={() => {
          setUnread(false);
          setRead(false);
          setFavourites(true);
        }}
        className={favorites ? "filterd-block" : "unfilterd-block"}
      >
        favorites
      </div>
    </div>
  );
};

export default Filters;
