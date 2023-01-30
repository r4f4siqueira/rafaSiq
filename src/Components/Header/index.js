import { Box, Button, Link, Text } from '@chakra-ui/react';
import { FaSun } from 'react-icons/fa';

function Header() {
    return (
        <Box
            display={'flex'}
            flexDirection="row"
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Box
                marginLeft="20px"
                width={'50%'}
            >
                <Text>r4f4siqueira</Text>
            </Box>
            <Box
                width={'50%'}
                display="flex"
                flexDirection="row"
                justifyContent={'end'}
                marginRight="20px"
                alignItems={'center'}
            >
                <Link
                    href="/projects"
                    _hover={{}}
                >
                    <Button
                        leftIcon={<FaSun />}
                        marginRight={'20px'}
                    >
                        <Text>Projects</Text>
                    </Button>
                </Link>

                <Button variant="solid">
                    <FaSun />
                </Button>
            </Box>
        </Box>
    );
}

export default Header;
