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
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
