import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { Typography, makeStyles, Container, Button } from '@material-ui/core';

import Layout from '../components/Layout/Layout';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    flexDirection: 'column',
  },
  title: {
    marginTop: '2rem',
  },
  signInButton: {
    marginTop: '2rem',
    textAlign: 'center',
    marginLeft: '13rem',
  },
}));

function CheckoutPage() {
  const [session, loading] = useSession();

  const classes = useStyles();

  return (
    <>
      <Layout>
        <Typography className={classes.title} variant="h3" align="center">
          Checkout Page
        </Typography>

        {!session && (
          <>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="textSecondary">
                  Sign in to go to Checkout Page
                </Typography>
                <Typography variant="h6" align="center" color="textSecondary">
                  This uses sessions to see if you're logged in
                </Typography>
                <Button
                  className={classes.signInButton}
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={() => signIn()}
                >
                  Sign in
                </Button>
              </Container>
            </div>
          </>
        )}
        {session && (
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography variant="h5" align="center" color="textSecondary">
                This is a protected route. You can only see this, if you're
                logged in.
              </Typography>
              <br />
              <Typography variant="h6" align="center" color="textSecondary">
                Signed in as {session.user.email}
              </Typography>
              <Button
                className={classes.signInButton}
                size="large"
                variant="contained"
                color="primary"
                onClick={() =>
                  signOut({ callbackUrl: `${process.env.NEXTAUTH_URL}` })
                }
              >
                Sign Out
              </Button>
            </Container>
          </div>
        )}
      </Layout>
    </>
  );
}

export default CheckoutPage;
