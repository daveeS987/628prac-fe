import React from 'react';
import { useSelector } from 'react-redux';

function About(props) {
  console.log('🚀 ~ file: about.js ~ line 5 ~ About ~ props', props);

  const products = useSelector((state) => state.products.entities);
  console.log('🚀 ~ file: about.js ~ line 6 ~ About ~ products', products);

  return (
    <div>
      <h1>About Page</h1>
      <h5>{JSON.stringify(products)}</h5>
    </div>
  );
}

export default About;
