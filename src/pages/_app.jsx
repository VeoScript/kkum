import '~/styles/tailwind.css'
import NextNProgress from '~/lib/NextProgressBar'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NextNProgress />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
