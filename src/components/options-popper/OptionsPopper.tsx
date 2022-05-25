import React, { ReactNode, Children, CSSProperties } from 'react';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { PopperPlacementType } from '@mui/material/core/Popper';
import { OptionsButton } from '../buttons';

export interface Props {
  children: ReactNode;
  placement?: PopperPlacementType;
  style?: CSSProperties,
}

export default function OptionsPopper({
  children,
  placement = 'bottom-end',
  style = {},
}: Props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: { currentTarget: any }) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  children = Children.map(children, child => <div>{child}</div>);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <span>
        <OptionsButton onClick={handleClick} />

        <Popper
          style={{ ...style, zIndex: 1000 }}
          open={isOpen}
          anchorEl={anchorEl}
          placement={placement}
        >
          <Paper>{children}</Paper>
        </Popper>
      </span>
    </ClickAwayListener>
  );
}
