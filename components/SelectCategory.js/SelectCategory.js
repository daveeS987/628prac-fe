import React from 'react';
import { makeStyles, Typography, ButtonGroup, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

function SelectCategory({ category }) {
  console.log(
    '🚀 ~ file: SelectCategory.js ~ line 15 ~ SelectCategory ~ category',
    category
  );

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        Browse Our Categories
      </Typography>
      <ButtonGroup
        variant="text"
        color="primary"
        aria-label="text primary button group"
        align="center"
      >
        {category.map((category) => {
          return (
            <Button key={category.id} id={category.id}>
              {category.name}
            </Button>
          );
        })}
      </ButtonGroup>
    </div>
  );
}

export default SelectCategory;
