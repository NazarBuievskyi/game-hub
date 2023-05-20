import React from 'react'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'

import './index.css'
import theme from "./theme";
import {QueryClient, QueryClientProvider, useQueryClient} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/routes";

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <RouterProvider router={router}/>
            </ChakraProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
)
