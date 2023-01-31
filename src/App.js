import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer';
import RoutesApp from './routes';
import './Style/main.css';

function App() {
    return (
        <ChakraProvider>
            <RoutesApp />
            <Footer />
        </ChakraProvider>
    );
}

export default App;
