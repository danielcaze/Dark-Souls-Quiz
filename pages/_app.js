import { createGlobalStyle, ThemeProvider } from 'styled-components'
import db from '../db.json';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <title>Quiz: Dark Souls</title>
        <meta name="title" content="Quiz: Dark Souls" />
        <meta name="description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dark-souls-quiz.darrooooow.vercel.app/" />
        <meta property="og:title" content="Quiz: Dark Souls" />
        <meta property="og:description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dark-souls-quiz.darrooooow.vercel.app/" />
        <meta property="twitter:title" content="Quiz: Dark Souls" />
        <meta property="twitter:description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />
        <meta property="twitter:image" content="" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
