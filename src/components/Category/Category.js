import { useSelector, useStore } from 'react-redux';
import { Typography, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

function Categories() {
  const activeCategory = useSelector(
    (state) => state.categories.activeCategory
  );

  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {activeCategory.name}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            {activeCategory.description}
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default Categories;
