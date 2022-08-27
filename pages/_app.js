import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRef } from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());

  return ( <Provider store={store}>
    <QueryClientProvider client={queryClient.current}>
      <ChakraProvider theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  </Provider>
)}

export default MyApp
