import { wrapper } from '../store/store.js';

const MyApp = ({ Component, pageProps }) => {
  console.log('🚀 ~ file: _app.js ~ line 15 ~ MyApp ~ pageProps', pageProps);

  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
