// function to convert given date into dd/mm/yyyy hh:mm
export const dateConverter = (originalDate) => {
  let formattedDate;
  let dateString = originalDate;
  let date = new Date(dateString);
  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let time = hours + ":" + minutes + " " + ampm;
  formattedDate = `${day}/${month}/${year} ${time}`;
  return formattedDate;
};
