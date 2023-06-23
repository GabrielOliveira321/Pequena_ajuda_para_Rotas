

import React, { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Err from "./pages/Err";
import Produto from "./pages/Produto";

import Header from "./Header";

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/sobre" element={ <Sobre/> } />
                <Route path="/contato" element={ <Contato/> } />
                <Route path="/produto/:id" element={ <Produto/> } />

                <Route path="*" element={ <Err/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
