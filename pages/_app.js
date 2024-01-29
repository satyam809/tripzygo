import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import './../public/css/bootstrap.min.css'
import './../public/css/plugin.css'
import './../public/css/style.css'
import '../styles/scroller.scss'
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {

  return <>
    <script src="/js/jquery-3.5.1.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/particles.js"></script>
    <script src="/js/particlerun.js"></script>
    <script src="/js/plugin.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/custom-swiper.js"></script>
    <script src="/js/custom-accordian.js"></script>
    <Layout>
    <NextNProgress />
      <Component {...pageProps} /></Layout>
    {/* <div id="preloader">
      <div id="status"></div>
    </div> */}

  </>
}

export default MyApp
