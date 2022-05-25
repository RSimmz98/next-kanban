import React, { ReactNode, HTMLAttributes } from 'react';
import IconButton, { IconButtonProps as MuiIconButtonProps } from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import DeleteIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material;';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useStyles } from './styles';

export type IconButtonProps = MuiIconButtonProps & {
  iconProps?: OverridableComponent<SvgIconTypeMap>
}

export const AddButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><AddIcon {...iconProps} /></IconButton>;

export const DeleteButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><DeleteIcon {...iconProps} /></IconButton>;

export const OptionsButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><MoreHorizIcon {...iconProps} /></IconButton>;

export const EditButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><EditIcon fontSize="small" {...iconProps} /></IconButton>;

export const CloseButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><CloseIcon {...iconProps} /></IconButton>;

export const CheckButton = ({ iconProps, ...props }: IconButtonProps) =>
  <IconButton {...props}><CheckIcon {...iconProps} /></IconButton>;


export interface TextButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
}
export const TextButton = ({ children, ...props }: TextButtonProps) => {
  const classNames = useStyles();
  return <button className={classNames.textButton} {...props}>{children}</button>
};

export interface ConfirmationButtonsProps {
  onCancel: () => void,
  onConfirm: () => void,
  cancelLabel?: string,
  confirmLabel?: string,
  confirmColor?: 'primary' | 'secondary'
}

export function ConfirmationButtons({
  onCancel,
  onConfirm,
  cancelLabel = 'Cancel',
  confirmLabel = 'Done',
  confirmColor = 'primary'
}: ConfirmationButtonsProps) {
  const classes = useStyles();

  return (
    <div className={classes.buttons}>
      <Grid container spacing={1} >
        <Grid item xs={6}>
          <Button fullWidth onClick={onCancel}>{cancelLabel}</Button>
        </Grid>
        <Grid item xs={6}>
          <Button fullWidth onClick={onConfirm} color={confirmColor}>{confirmLabel}</Button>
        </Grid>
      </Grid>
    </div>
  );
}
