import { SWRConfig } from "swr";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return(
  <SWRConfig
  value={{
    fetcher: (resource, init) =>
      fetch(resource, init).then((res) => res.json()),
  }}
>
  <Component {...pageProps} />
  </SWRConfig>
  )
}

export default MyApp;
