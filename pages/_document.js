import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
          <link href="css/style.css" rel="stylesheet" type="text/css" />
          <link href="css/plugin.css" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          />
          <link href='https://fonts.googleapis.com/css?family=Satisfy' rel='stylesheet'></link>

          <Script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></Script>
          <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
          <Script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></Script>

          <link rel="stylesheet" href="fonts/line-icons.css" type="text/css" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WTNGZHV');`,
            }}
          />
         
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3M8CC7NTTM');
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/cta.js"></script>
          <script src="js/custom-nav.js"></script>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTNGZHV"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-3M8CC7NTTM"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
