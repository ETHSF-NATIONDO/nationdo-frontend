// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { Web3Modal } from '@web3modal/react'
import MainNavigation from '../components/MainNavigation'

// Get projectID at https://cloud.walletconnect.com


const config = {
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <MainNavigation />
        <Component {...pageProps} />
      </ChakraProvider>
      <Web3Modal config={config} />
    </>
  )
}

export default MyApp