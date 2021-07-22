import { wrapper } from '../store/store.js';
import { Provider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
