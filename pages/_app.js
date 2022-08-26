import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return ( 
  // <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  // </Provider>
)}

export default MyApp
