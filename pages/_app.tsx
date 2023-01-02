import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from "@material-tailwind/react";

export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
  return (
    <ThemeProvider>
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
