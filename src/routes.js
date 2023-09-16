import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index.js'
import Header from './components/index.js'
import Favoritos from './pages/Favoritos'
import Filme from './pages/Filme/index.js'
import Erro from './pages/Erro'

function RoutesApp(){
    return(
        <div>
           <BrowserRouter>
           <Header/>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/filme/:id" element={<Filme/>}/>
                  <Route path="/favoritos" element={<Favoritos/>}/>
                  <Route path="*" element={<Erro/>}/>
                 
                </Routes>
           </BrowserRouter>
        </div>
    )
}

export default RoutesApp