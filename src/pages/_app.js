import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from '../store/store.js';
import { wrapper } from '../store/store.js';
// import '../styles/globals.css';

// const MyApp = ({ Component, pageProps }) => {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// };

const MyApp = ({ Component, pageProps }) => {
  console.log('🚀 ~ file: _app.js ~ line 15 ~ MyApp ~ pageProps', pageProps);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
