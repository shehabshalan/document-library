import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useUserContext } from "../context/UserContext";
const DateAndTimePicker = () => {
  const { expirationDateTime, handleExpirationDateTime } = useUserContext();
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        label="Expiration Date&Time"
        value={expirationDateTime}
        onChange={handleExpirationDateTime}
        disablePast
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateAndTimePicker;
