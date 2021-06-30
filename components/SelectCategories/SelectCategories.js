import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function SelectCategories() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2>Browse Our Categories</h2>
    </div>
  );
}

export default SelectCategories;
