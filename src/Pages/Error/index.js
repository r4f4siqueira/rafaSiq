import { Box, Link, Text } from '@chakra-ui/react';

function NotFound() {
    return (
        <Box
            w={'100%'}
            h={'70vh'}
            display="flex"
            flexDirection={'column'}
            alignItems="center"
            justifyContent={'center'}
            color="#FFFA5F"
        >
            <Text>404 - Page not found!!!</Text>
            <Text>
                Click here =&gt;{' '}
                <Link
                    color={'#257CCF'}
                    href="/"
                >
                    {' '}
                    Home page
                </Link>
            </Text>
        </Box>
    );
}

export default NotFound;
