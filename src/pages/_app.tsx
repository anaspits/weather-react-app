import "@/styles/globals.css";
import '@mantine/core/styles.css';

import { DEFAULT_THEME } from '@mantine/core';
import { MantineProvider, createTheme } from '@mantine/core';
import type { AppProps } from "next/app";

 const theme = createTheme({ 
  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },
  fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '16px',
        md: 'var(--font-size-md)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': '3rem'
    }
});
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
      
    </MantineProvider>
  );
}
