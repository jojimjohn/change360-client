import React, { useState } from "react";
import {
  TextField,
  Box,
  Grid,
  Slider,
  Typography,
  Button,
} from "@mui/material";

const SlidingRange = (props) => {
  const [value, setValue] = useState(160);
  const [unit, setUnit] = useState("cm");
  const [min, setMin] = useState(120);
  const [max, setMax] = useState(220);
  const [inchVariant, setInchVariant] = useState("outlined");
  const [cmVariant, setcmVariant] = useState("contained");

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.getHeight(newValue);
    props.getHeightUnit(unit);
  };

  const handleInputChange = (event) => {
    let newVal = Number(event.target.value);
    setValue(newVal);
    props.getHeight(newVal);
    props.getHeightUnit(unit);
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
      props.getHeight(min);
    } else if (value > max) {
      setValue(max);
      props.getHeight(max);
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    if (newUnit === "cm") {
      setMin(120);
      setMax(220);
      setValue(value * 2.54);
      setInchVariant("outlined");
      setcmVariant("contained");
    } else {
      setMin(47);
      setMax(87);
      setValue(value / 2.54);
      setInchVariant("contained");
      setcmVariant("outlined");
    }
  };

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider" gutterBottom>
        Height
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Slider
            sx={{ width: 164 }}
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            step={1}
            marks
            min={min}
            max={max}
          />
        </Grid>
        <Grid item>
          <TextField
            sx={{ width: 70 }}
            type="number"
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            label={`Height (${unit})`}
            variant="standard"
            inputProps={{
              step: 0.1,
              min: min,
              max: max,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
        <Grid item>
          <Button
            size="small"
            variant={cmVariant}
            onClick={() => handleUnitChange("cm")}
          >
            cm
          </Button>
          <Button
            size="small"
            variant={inchVariant}
            onClick={() => handleUnitChange("in")}
          >
            in
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlidingRange;
