import { ChakraProvider } from '@chakra-ui/react';
import RoutesApp from './routes';
import './Style/main.css';

function App() {
    return (
        <ChakraProvider>
            <RoutesApp />
        </ChakraProvider>
    );
}

export default App;
