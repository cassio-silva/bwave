import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { theme } from '../styles/theme';

import GlobalStyles from '../styles/GlobalStyles';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp