import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import QuemSomos from "./components/quem-somos/Quem-somos";
import Orcamento from "./components/orcamento/Orcamento";
import Servicos from "./components/servicos/Servicos";
import Inspect from "./components/servicos/Inspecao";
import Interacao from "./components/servicos/Integracao";
import Residente from "./components/servicos/Residente";
import Retrabalho from "./components/servicos/Retrabalho";
import Embarque from "./components/servicos/Embarque";
import Terceirizacao from "./components/servicos/Terceirizacao";





export default props => (

    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quem-somos' element={<QuemSomos />}/> 
        <Route path='/servicos' element={<Servicos />}/> 
        <Route path='/inspect'  element={<Inspect />} />
        <Route path='/interacao'  element={<Interacao />} />
        <Route path='/retrabalho'  element={<Retrabalho />} />
        <Route path='/embarque' element={<Embarque />} />
        <Route path='/terceirizacao'  element={<Terceirizacao />} />
        <Route path='/residente'  element={<Residente />} />
        <Route path='/orcamento' element={<Orcamento />}/>  
        <Route path='/contato' element={<Contact />}/>  
    </Routes>
);  