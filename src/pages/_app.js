import "../app/scss/app.scss";
import Layout from '../components/layout'
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}