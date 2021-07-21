import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Link from 'next/link';
import {
  Typography,
  makeStyles,
  Container,
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';

import { decrementStock } from '../../store/productSlice.js';
import { addToCart } from '../../store/cartSlice.js';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Products({ products }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory.name
  );
  let productCounts = useSelector((state) => state.products.entities);

  let merged = { ...products } || {};

  for (let property in merged) {
    merged[property] = {
      ...merged[property],
      inStock: productCounts[property]?.inStock,
    };
  }

  let filtered = Object.values(merged).filter((item) => {
    return item.category === activeCategory;
  });

  const add = (productID, productName) => {
    dispatch(addToCart({ productID, productName }));
    dispatch(decrementStock(productID));
  };

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {filtered.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.imageUrl}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                  <Typography>
                    In Stock: {product.inStock || 'Loading...'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => add(product.id, product.name)}
                  >
                    ADD TO CART
                  </Button>
                  <Button size="small" color="primary">
                    <Link href={`/details/${product.id}`}>VIEW DETAILS</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
}

export default Products;
