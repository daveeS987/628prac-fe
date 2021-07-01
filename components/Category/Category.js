import React, { Fragment } from 'react';
import { Typography, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function SelectCategories() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Products Category
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Description of category
          </Typography>
        </Container>
      </div>
    </Fragment>
  );
}

export default SelectCategories;
