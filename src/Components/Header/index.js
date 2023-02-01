import { Box, Button, Link, Text } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';

function Header() {
    return (
        <Box
            display={'flex'}
            flexDirection="row"
            alignItems={'center'}
            background={'blackAlpha.900'}
        >
            <Box>
                <Link
                    href="/"
                    _hover={{}}
                >
                    <Button
                        colorScheme={'yellow'}
                        borderRadius="0"
                    >
                        <FiArrowLeft />
                        <Text
                            cursor={'pointer'}
                            color={'blackAlpha.900'}
                        >
                            r4f4siqueira
                        </Text>
                    </Button>
                </Link>
            </Box>
        </Box>
    );
}

export default Header;
