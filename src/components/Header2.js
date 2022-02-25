import React from "react"
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from "gatsby"

export const Header2 = () => {
    const {image} = useStaticQuery(graphql`
query
{
    image: file(relativePath: {eq: "cartas_mobile.jpg"}) {
      sharp: childImageSharp {
        fluid {
          srcSetWebp
        }
      }
    }
  }
`)



    return (
        <>
        <div className=" ">
          <BackgroundImage
          tag='section'
          fluid={image.sharp.fluid}
          className={'sm:hidden headercartas container'}

          >
            
            <h1 className="text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl  mlg:text-2x1 uppercase font-semibold msm:mt-80 msm: mb-12 text-center msm:text-4xl ">Circulo Magico 
           <div className="text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-800 juanfix2  mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
          </BackgroundImage>
            </div>
            <div className=" msm:hidden headercartasdesk ">
         
            
            <h1 className="text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl  mlg:text-2x1 uppercase font-semibold msm:mt-80 msm: mb-12 text-center msm:text-4xl ">Circulo Magico 
           <div className="text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-800 juanfix2  mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
        
            </div>
            </>
    )
}


export default Header2

