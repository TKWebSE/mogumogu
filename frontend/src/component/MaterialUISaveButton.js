import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function SaveButton({ onClick, btnLabel }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
    onClick();
  }

  return (
    <div>
      <LoadingButton
        size="large"
        color="primary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="contained"
        className={classes.button}
      >
        {btnLabel}
      </LoadingButton>
    </div>
  )
}
