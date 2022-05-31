import "../styles/globals.css";
import Layout from "../components/Layout";
import { AppWrapper } from "../context/CardContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  );
}

export default MyApp;
