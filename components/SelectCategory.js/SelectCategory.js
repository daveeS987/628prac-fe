import React from 'react';
import { makeStyles, Typography, ButtonGroup, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
});

function SelectCategory() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">Browse Our Categories</Typography>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default SelectCategory;
