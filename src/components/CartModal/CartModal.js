import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import {
  makeStyles,
  Button,
  IconButton,
  Modal,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteFromCart } from '../../store/cartSlice';
import { putStockBack } from '../../store/productSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    position: 'absolute',
    width: '20rem',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: `5rem`,
    right: `1rem`,
  },
  button: {
    width: '80%',
    marginTop: '1rem',
    marginLeft: '8%',
  },
}));

function CartModal({ open, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  let cartLength = Object.values(cart).reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  const destroy = (productID, productCount) => {
    dispatch(deleteFromCart(productID));
    dispatch(putStockBack({ id: productID, count: productCount }));
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
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
        </div>
      </Modal>
    </>
  );
}

export default CartModal;
