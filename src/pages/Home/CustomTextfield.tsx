import { TextField } from "@mui/material";
import React from "react";

type CustomTextFieldProps = {
  setText: (val: string) => void;
  label: string;
  rows: number;
  type: string;
};

export default function CustomTextfield(props: CustomTextFieldProps) {
  return (
    <TextField
      label={props.label}
      multiline
      rows={props.rows}
      type={props.type}
      variant="filled"
      onChange={(event) => {
        props.setText(event.target.value);
      }}
      sx={{
        "& .MuiFilledInput-root": {
          backgroundColor: "transparent", // Optional: to keep background transparent
          "&:before": {
            borderColor: "#9e1e2b", // Default bottom border color
          },
          "&:hover:before": {
            borderColor: "#9e1e2b", // Bottom border color on hover
          },
          "&.Mui-focused:before": {
            borderColor: "#9e1e2b", // Bottom border color when focused
          },
          "&.Mui-focused:after": {
            borderColor: "#9e1e2b", // Bottom border color when focused
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: "#9e1e2b", // Label color when focused
          },
        },
      }}
    />
  );
}
