import "@/styles/globals.css";
import '@mantine/core/styles.css';

import { DEFAULT_THEME } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';
import type { AppProps } from "next/app";

/* const theme = createTheme({ 
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
});
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={DEFAULT_THEME}>
      <Component {...pageProps} />
      
    </MantineProvider>
  );
}
