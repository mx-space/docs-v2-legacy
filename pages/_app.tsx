import Script from 'next/script'
import '../public/style.css'
import { OpenpanelProvider } from '@openpanel/nextjs'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <OpenpanelProvider
        url="https://api.openpanel.dev"
        clientId="feee95af-b002-4b49-a90f-2d6b9c7b7e17"
        trackScreenViews={true}
        trackOutgoingLinks={true}
      />
      <Head>
        <Script>{`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "lsoepndf05");`}</Script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
