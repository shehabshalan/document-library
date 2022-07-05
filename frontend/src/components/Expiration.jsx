import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import moment from "moment";
const Expiration = () => {
  const [expirationDate, setExpirationDate] = React.useState(new Date());

  const handleChange = (newValue) => {
    setExpirationDate(newValue._d.toISOString());

    let b = moment(newValue._d.toISOString());
    console.log(newValue._d.toISOString());

    const sharedFileExpirationDate = moment(b).toDate();
    const now = moment().toDate();
    if (now > sharedFileExpirationDate) {
      return console.log("expired");
    }

    console.log("not expired");
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Expiration Date&Time"
        value={expirationDate}
        onChange={handleChange}
        // disablePast
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Expiration;
