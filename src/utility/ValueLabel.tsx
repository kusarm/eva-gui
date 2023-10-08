import { SliderValueLabelProps, Tooltip } from '@mui/material';
import React from 'react';

export default function ValueLabelComponent(props: SliderValueLabelProps) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
