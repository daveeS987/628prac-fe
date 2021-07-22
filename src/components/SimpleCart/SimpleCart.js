import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

import { deleteFromCart } from '../../store/cartSlice';
import { putStockBack } from '../../store/productSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '35vw',
    backgroundColor: 'white',
    marginLeft: '65vw',
    position: 'fixed',
    zIndex: 100,
  },
  items: {
    height: 60,
  },
  checkout: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'gray',
    height: 60,
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'theme.pallete',
    width: '90%',
    marginLeft: '4%',
    marginBottom: 16,
  },
}));

export default function SimpleCart() {
  const classes = useStyles();
  const dispatch = useDispatch();

  let cart = useSelector((state) => state.cart);
  let showCart = useSelector((state) => state.showCart.show);

  const destroy = (productID, productCount) => {
    dispatch(deleteFromCart(productID));
    dispatch(putStockBack({ id: productID, count: productCount }));
  };

  return (
    <>
      <When condition={showCart}>
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
          <Link href={'/checkout'}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Checkout
            </Button>
          </Link>
        </List>
      </When>
    </>
  );
}
