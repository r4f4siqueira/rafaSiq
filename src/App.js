import { ChakraProvider } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import RoutesApp from './routes';
import './Style/main.css';

function App() {
    return (
        <ChakraProvider>
            <Header />
            <RoutesApp />
            <Footer />
        </ChakraProvider>
    );
}

export default App;
