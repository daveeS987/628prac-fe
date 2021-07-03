import '@fontsource/roboto';
import { wrapper } from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
