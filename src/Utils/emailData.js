import axios from "axios";

//network call to get email list.
export const emailData = async () => {
  const {
    data: { list },
  } = await axios.get("https://flipkart-email-mock.now.sh/");
  return list;
};
