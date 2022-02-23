import React from 'react';
import Layout from '../components/layout';
import Galeria from '../components/Galeria'
import Header2 from '../components/Header2';
import Video from '../components/Video';
import Servicios from '../components/Servicios';
import TresCajasGrid from '../components/TresCajasGrid';
import Ilusionismo from '../components/Ilusionismo';
import Google from '../components/Google';

const IndexPage = () => (
<>
    <Layout>
    <Header2 />
    <Servicios />
    <Ilusionismo />
    <TresCajasGrid />
    <Video />
    <Google />
    <Galeria />
    </Layout>
</>
)

export default IndexPage



