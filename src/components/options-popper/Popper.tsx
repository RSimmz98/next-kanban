import React from 'react';
import Paper from '@mui/material/Paper';
import Popper, { PopperProps } from '@mui/material/Popper';

export default function Popover({ children, style, ...props }: PopperProps) {
  return (
    <Popper {...props} style={{ zIndex: 1000, ...style }} disablePortal>
      <Paper>{children}</Paper>
    </Popper>
  );
}
