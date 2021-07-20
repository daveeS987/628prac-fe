/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { toggle } from '../../store/showCartSlice';

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
}));

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
          <Button color="inherit" onClick={() => dispatch(toggle())}>
            Cart()
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
