import React, { Suspense } from 'react';
import MenuPrincipal from "../components/MenuPrincipal"
import Galeria from '../components/Galeria'
import Header2 from '../components/Header2';
import Video from '../components/Video';
import Whatsapp from '../components/Whatsapp';
import Helmet from 'react-helmet';
import Servicios from '../components/Servicios';
import TresCajasGrid from '../components/TresCajasGrid';
import Ilusionismo from '../components/Ilusionismo';
import Google from '../components/Google';
import Footer from '../components/Footer';




const IndexPage = () => (
    <>
    <Helmet>
        
        <title>Escuela de Magia - Aprender Magia</title>
        <meta name="description" content="Escuela de Magia para Aprender Magia e Ilusionismo al más alto nivel. Cursos para principiantes y avanzados. Aprenderás una infinidad de efectos mágicos." />
        <meta name="keywords" content="aprender magia, escuela de magia, clases de magia" />
        <meta http-equiv="content-language" content="es" />   
        <script type="module" src="../carrousel/main.js" />
        <script src="https://kit.fontawesome.com/1f30c0aa92.js" crossorigin="anonymous" />
        <body class="bg-black" />
    </Helmet>

    <Suspense fallback= {<p><i className="fas fa-spinner animate-spin flex justify-center container mt-10 text-5xl"></i></p>}> 
    <MenuPrincipal />
    <Header2 />
    <Servicios />
    <Ilusionismo />
    <TresCajasGrid />
    <Video />
    <Google />
    <Galeria />
    <Footer />
    <Whatsapp/>
    </Suspense>
    
    
   
    </>
)

export default IndexPage



