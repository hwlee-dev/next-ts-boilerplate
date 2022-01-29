import '../../styles/globals.css'
import type {AppContext, AppInitialProps, AppProps} from 'next/app'
import {NextComponentType} from 'next';

const Empty: any = ({ children }: { children: Element }) => <>{children}</>;

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps
}: AppProps) => {

  const Layout: any = Component?.['layout'] || Empty;

  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <title>home</title>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
