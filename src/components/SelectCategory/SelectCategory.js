import { useState } from 'react';
import { makeStyles, Typography, ButtonGroup, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCount,
  decrementcount,
  incrementBy,
} from '../../store/categories.js';
// import axios from 'axios';

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
  let categories = useSelector((state) => state.categories.entities);
  let count = useSelector((state) => state.categories.count);
  const [incrementAmount, setIncrementAmount] = useState(2);
  // const apiCall = async () => {
  //   let apiResult = await axios.get('/api/getCategories');
  //   console.log(
  //     '🚀 ~ file: SelectCategory.js ~ line 23 ~ apiCall ~ apiResult.data',
  //     apiResult.data
  //   );
  // };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography align="center" variant="h5">
        Browse Our Categories
      </Typography>
      {/* <ButtonGroup variant='text' color='primary' aria-label='text primary button group' align='center'> */}
      {/* {category.map((category) => {
          return (
            <Button
              key={category.id}
              id={category.id}
              onClick={() => apiCall()}
            >
              {category.name}
            </Button>
          );
        })} */}
      <h3></h3>
      {/* </ButtonGroup> */}
      <h3>
        This is current count <span>{count}</span>
      </h3>
      <button onClick={() => dispatch(incrementCount())}>Increment</button>
      <button onClick={() => dispatch(decrementcount())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy(incrementAmount))}>
        Increment by
      </button>
    </div>
  );
}

export default SelectCategory;
