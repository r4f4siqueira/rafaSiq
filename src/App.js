import { ChakraProvider } from '@chakra-ui/react';
import RoutesApp from './routes';
import './Style/main.css';
import Header from './Components/Header';

function App() {
    return (
        <ChakraProvider>
            <Header />
            <RoutesApp />
        </ChakraProvider>
    );
}

export default App;
