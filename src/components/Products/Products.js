import { useSelector } from 'react-redux';
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

function Products() {
  const classes = useStyles();
  const products = useSelector((state) => state.products.entities);
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory.name
  );
  let filtered = products.filter(
    (product) => product.category === activeCategory
  );

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
                  <Typography>In Stock: {product.inStock}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    ADD TO CART
                  </Button>
                  <Button size="small" color="primary">
                    VIEW DETAILS
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
