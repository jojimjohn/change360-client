import * as React from "react";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function BasicSelect(props) {
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setOption(event.target.value);
    props.getOption(event.target.value);
  };

  return (
    <Box sx={{ margin: 1, width: 700 }}>
      <FormControl fullWidth>
        <InputLabel>{props.placeholder}</InputLabel>
        <Select
          value={option}
          label={props.placeholder}
          onChange={handleChange}
        >
          {props.useList.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
