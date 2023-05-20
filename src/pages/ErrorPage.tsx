import React from 'react';
import {isRouteErrorResponse, useRouteError} from "react-router-dom";
import {Box, Heading, Text} from "@chakra-ui/react";
import NavBar from "../components/NavBar";

function ErrorPage() {
    const error = useRouteError()
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>{isRouteErrorResponse(error) ? 'Invalid page' : 'An unexpected error occurred.'}</Text>
            </Box>

        </>
    );
}

export default ErrorPage;