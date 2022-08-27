import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import customTheme from '../styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useRef } from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
  const queryClient = useRef(new QueryClient());

  return ( <Provider store={store}>
    <PersistGate persistor={persistor}>
      <QueryClientProvider client={queryClient.current}>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
)}

export default MyApp
