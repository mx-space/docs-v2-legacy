import { OpenpanelProvider } from '@openpanel/nextjs'
import '../public/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <OpenpanelProvider
        url="https://api.openpanel.dev"
        clientId="feee95af-b002-4b49-a90f-2d6b9c7b7e17"
        trackScreenViews={true}
        trackOutgoingLinks={true}
      />

      <Component {...pageProps} />
    </>
  )
}
