import axios from "axios";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "./actions/action1";

const ContextPovider = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const {
      data: { list },
    } = await axios.get("https://flipkart-email-mock.now.sh/");
    dispatch({ type: ADD_DATA, payload: { emailList: list } });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default ContextPovider;
