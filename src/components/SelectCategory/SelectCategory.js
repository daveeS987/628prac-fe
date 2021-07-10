import { useEffect } from 'react';
import { makeStyles, Typography, ButtonGroup, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCount,
  decrementcount,
  incrementBy,
  getAPICategories,
} from '../../store/categorySlice.js';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

function SelectCategory() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.categories.count);
  let categories = useSelector((state) => state.categories.entities);
  console.log(
    '🚀 ~ file: SelectCategory.js ~ line 25 ~ SelectCategory ~ categories: ',
    categories
  );

  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography align="center" variant="h5">
          Browse Our Categories
        </Typography>
        <ButtonGroup
          variant="text"
          color="primary"
          aria-label="text primary button group"
          align="center"
        >
          {categories.map((category) => {
            console.log(
              '🚀 ~ file: SelectCategory.js ~ line 48 ~ {categories.map ~ category',
              category
            );

            return (
              <Button key={category._id} id={category._id}>
                {category.name}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
      <div>
        <h3>
          For tesing purposes &gt;&gt; This is current count{' '}
          <span>{count}</span>
        </h3>
        <p>{JSON.stringify(categories)}</p>

        <button onClick={() => dispatch(incrementCount())}>Increment</button>
        <button onClick={() => dispatch(decrementcount())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy(2))}>Increment by</button>
      </div>
    </>
  );
}

export default SelectCategory;
