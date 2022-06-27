import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Projetos from './Pages/Projetos'
import Home from './Pages/Home'

function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projetos' element={<Projetos/>}/>
            </Routes>
        </BrowserRouter>
    )
    
}

export default RoutesApp;