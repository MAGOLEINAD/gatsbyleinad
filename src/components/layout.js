import React  from "react"
import MenuPrincipal from "../components/MenuPrincipal"
import Whatsapp from '../components/Whatsapp';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';


const Layout = (props) => {
    return ( 
<>
     <Helmet>
        <html lang="es" amp />
        <title>Escuela de Magia - Aprender Magia</title>
        <meta name="description" content="Escuela de Magia para Aprender Magia e Ilusionismo al más alto nivel. Cursos para principiantes y avanzados. Aprenderás una infinidad de efectos mágicos." />
        <meta name="keywords" content="aprender magia, escuela de magia, clases de magia" />
        {/* <script src="./main.js" type="module" /> */}
        <body className="bg-black" />
    </Helmet>

    
    <MenuPrincipal />
    {props.children}
    <Footer />
    <Whatsapp/>
  
       
</>
     );
}
 
export default Layout ;