
import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';


export default function Contacto ({ data }) {
    console.log(data)
    return (
    <div>
    <Layout>

    </Layout>
    
   
    </div>
)
    }


export const query = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  }
`