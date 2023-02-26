import React, { useState } from "react";
import { TextField, Box, Grid, Slider, Typography } from "@mui/material";

const SlidingRange = (props) => {
  const [value, setValue] = useState(25);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.getAge(newValue);
  };

  const handleInputChange = (event) => {
    let newVal = Number(event.target.value);
    setValue(newVal);
    props.getAge(newVal);
  };

  const handleBlur = () => {
    if (value < 18) {
      setValue(18);
      props.getAge(18);
    } else if (value > 80) {
      setValue(80);
      props.getAge(80);
    }
  };

  return (
    <Box sx={{ width: 230 }}>
      <Typography id="input-slider" gutterBottom>
        Age
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            marks
            min={18}
            max={80}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 50 }}
            type="number"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            label="Age"
            variant="standard"
            inputProps={{
              step: 1,
              min: 18,
              max: 80,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlidingRange;
