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
  const [value, setValue] = useState(70);
  const [unit, setUnit] = useState("kg");
  const [kgVariant, setkgVariant] = useState("contained");
  const [lbsVariant, setlbsVariant] = useState("outlined");
  const [min, setMin] = useState(35);
  const [max, setMax] = useState(220);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.getWeight(newValue);
    props.getWeightUnit(unit);
  };

  const handleInputChange = (event) => {
    let newVal = Number(event.target.value);
    setValue(newVal);
    props.getWeight(newVal);
    props.getWeightUnit(unit);
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
      props.getWeight(min);
    } else if (value > max) {
      setValue(max);
      props.getWeight(max);
    }
  };

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    if (newUnit === "kg") {
      setkgVariant("contained");
      setlbsVariant("outlined");
      setValue(value * 2.205);
      setMin(35);
      setMax(220);
    } else {
      setkgVariant("outlined");
      setlbsVariant("contained");
      setValue(value / 2.205);
      setMin(77);
      setMax(485);
    }
  };

  return (
    <Box sx={{ width: 500 }}>
      <Typography id="input-slider" gutterBottom>
        Weight
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
            label={`Weight (${unit})`}
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
            variant={kgVariant}
            onClick={() => handleUnitChange("kg")}
          >
            kg
          </Button>
          <Button
            size="small"
            variant={lbsVariant}
            onClick={() => handleUnitChange("lbs")}
          >
            lbs
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SlidingRange;
