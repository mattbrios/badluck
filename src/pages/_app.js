import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no" />
        <meta name="title" content = "Bad Luck" />
        <meta name="description" content = "Game Bad Luck. Este game foi desenvolvido para você perder. Sério, você sempre perde." />
        <meta property="og:title" content="Bad Luck" />
        <meta property="og:description" content="Game Bad Luck. Este game foi desenvolvido para você perder. Sério, você sempre perde." />
        <meta property="og:image" content="/og.png" />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Bad Luck' />
        <link rel='canonical' href='https://badluck.mateusrios.com.br' />
    </Head>
      <Component {...pageProps} />
    </>
  )
}
