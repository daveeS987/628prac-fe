import React from 'react';
import { Container, Typography, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `2px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container justify="center">
          <Grid item xs={12} align="center">
            <Typography variant="h6" color="textPrimary">
              © Davee Sok
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
