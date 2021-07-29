import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut, useSession } from 'next-auth/client';
import {
  Typography,
  makeStyles,
  Container,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Layout from '../components/Layout/Layout';

import { deleteFromCart } from '../store/cartSlice';
import { putStockBack } from '../store/productSlice';

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
    marginTop: '3rem',
  },
  signInButton: {
    marginTop: '2rem',
    textAlign: 'center',
    marginLeft: '13.5rem',
  },
  root: {
    width: '30rem',
    margin: '2rem auto',
  },
}));

function CheckoutPage() {
  const [session, loading] = useSession();
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const destroy = (productID, productCount) => {
    dispatch(deleteFromCart(productID));
    dispatch(putStockBack({ id: productID, count: productCount }));
  };

  return (
    <>
      <Layout>
        <Typography className={classes.title} variant="h3" align="center">
          Checkout Page
        </Typography>
        <List className={classes.root}>
          {Object.entries(cart).map((product) => {
            return (
              <ListItem key={product[0]}>
                <ListItemText primary={product[1].name} />
                <ListItemText secondary={'QTY: ' + product[1].count} />
                <IconButton
                  aria-label="delete"
                  onClick={() => destroy(product[0], product[1].count)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
        </List>

        {!session && (
          <>
            <div className={classes.heroContent}>
              <Container maxWidth="sm">
                <Typography variant="h5" align="center" color="textSecondary">
                  Sign in to Checkout
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
                This is a protected route. <br />
                You can only see this, if you're logged in.
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
