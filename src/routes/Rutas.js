import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeProductos } from "../components/productos";
import { Home } from "../page";
import { Plantilla } from "../layouts";
import { Productos } from "../components/Formulario/";
export function Rutas() {

  const Layouts=(Layout,Page)=>(
    <Layout>
      <Page/>
    </Layout>
  )
    
  
  return (
    
    <Routes>
      <Route path="/" element={Layouts(Plantilla,Home)} />
      <Route path="/producto" element={Layouts(Plantilla,HomeProductos)} />
      <Route path="/formproductos" element={Layouts(Plantilla,Productos)}/>
    </Routes>
    
  );
}
