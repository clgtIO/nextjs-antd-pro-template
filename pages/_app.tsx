import 'antd/dist/antd.css'
import '@ant-design/pro-layout/dist/layout.css'
import 'styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
