import React from 'react'
import { Box, Heading, Input, VStack } from '@chakra-ui/react';

const Login = () => {
  return (
    <>
        <Box 
         p={[6,10]}
         >
            <Heading alignContent={'center'}>Login Page</Heading>
            <Box>
                <VStack>
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Input placeholder='Confirm Password' />
                </VStack>
            </Box>

        </Box>
    </>

    )
}

export default Login