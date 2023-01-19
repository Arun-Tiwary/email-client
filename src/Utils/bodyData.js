import axios from "axios";

//network call to get email list.
export const giveMeBody = async (_id) => {
  const {
    data: { body },
  } = await axios.get(`https://flipkart-email-mock.now.sh/?id=${_id}`);
  //   myData = body;
  // console.log("BodyData 15 OF BODYCARD", myData);
  return body;
};
