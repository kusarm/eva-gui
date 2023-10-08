import React from 'react';
import { Grid, Slider, Typography, Box } from '@mui/material';
import ValueLabelComponent from '../utility/ValueLabel';
import createScale from '../utility/createScale';
import { IOption } from '../models/IOption';
import FormValues from '../utility/formValues';

function OptionClusterSlider({
  opt,
  form,
  handleInput,
}: {
  opt: IOption;
  form: FormValues;
  handleInput: (event: any) => void;
}) {
  return (
    <Grid key={opt.name} item xs={12}>
      <Box>
        <Typography variant="body2" gutterBottom>
          {opt.title}
        </Typography>
        <Slider
          name={opt.name}
          valueLabelDisplay="on"
          slots={{
            valueLabel: ValueLabelComponent,
          }}
          aria-label={opt.name}
          step={opt.step}
          marks={createScale(opt.min, opt.max, opt.incrementMark)}
          min={opt.min}
          max={opt.max}
          value={form[opt.name]}
          size="small"
          onChange={handleInput}
        />
      </Box>
    </Grid>
  );
}

export default OptionClusterSlider;
