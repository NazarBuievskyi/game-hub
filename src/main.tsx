import React from 'react'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from "./theme";
import {QueryClient, QueryClientProvider, useQueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <App/>
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
)
