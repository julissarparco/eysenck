import "../styles/globals.css";
import type { AppProps } from "next/app";
import CustomHead from '../src/components/common/custom-head';
import CustomFooter from '../src/components/common/custom-footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CustomHead title={"Eysenck Test"}  />
      <Component {...pageProps} />
      <CustomFooter label={"Eysenck Test"} />
    </>
  );
}

export default MyApp;
