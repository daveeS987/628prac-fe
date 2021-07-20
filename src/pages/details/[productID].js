import { MongoClient, ObjectId } from 'mongodb';
// import { useSelector } from 'react-redux';

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

import Layout from '../../components/Layout/Layout';
import { wrapper } from '../../store/store';

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    let selectedID = context.params.productID;
    const client = await MongoClient.connect(process.env.DB_ADDRESS, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    const db = client.db();
    const productsCollection = db.collection('products');
    let product = await productsCollection.findOne({
      _id: ObjectId(selectedID),
    });

    client.close();
    let converted = {
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      inStock: product.inStock,
      imageUrl: product.imageUrl,
      id: product._id.toString(),
    };

    return {
      props: converted,
    };
  }
);

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.DB_ADDRESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const db = client.db();
  const productsCollection = db.collection('products');
  let products = await productsCollection.find().toArray();

  client.close();

  let paths = products.map((product) => {
    return {
      params: {
        productID: product._id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

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
    height: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Details(props) {
  const classes = useStyles();

  return (
    <>
      <Layout>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Typography variant="h4" gutterBottom>
            Product Details:
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={props.imageUrl}
                  title="Image title"
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" gutterBottom>
                {props.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Description: {props.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                In Stock: {props.inStock}
              </Typography>
              <Typography variant="h6">Price: {props.price}</Typography>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Details;
