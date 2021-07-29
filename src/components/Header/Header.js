/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import CartModal from '../CartModal/CartModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cart: {
    marginLeft: '60%',
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
}));

function Header() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);

  let cartLength = Object.values(cart).reduce((acc, cur) => {
    return acc + cur.count;
  }, 0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link href="/">
              <MenuIcon />
            </Link>
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Davee's NextJS Mock Virtual Store
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Cart({cartLength})
          </Button>
        </Toolbar>
      </AppBar>
      <CartModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Header;
