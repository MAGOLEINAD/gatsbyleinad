import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Ilusionismo = () => {
    return (
        <div className=" container rounded-md my-14 msm:my-2 grid grid-rows-1 lg:grid-cols-2 md:grid-cols-1 gap-x-6 justify-items-center imagenback " >
            <StaticImage 
          
          src='../images/headertop.png' 
          width={1234}
          height={818}
          alt='curso de magia'
          placeholder='tracedSVG'
          className="sinimagenback"
          formats={[`auto`, `avif`, `webp`]}
          
          
          />
            <div className=" msm:p-6 p-20 md:p-10 text-gray-600 " >
            <h3 className=" msm:text-2xl msm:font-semibold font-thin text-5xl">Magia e Ilusionismo</h3>
            <p className=" msm:text-lg mt-12 text-xl ">Desarrollá tu <b>comunicación.</b> Trabajarás tu capacidad de expresarte, tu vocabulario, gestualidad y aprenderás conceptos de psicología.</p>
            <p className=" msm:text-lg mt-4 text-xl  ">Al ejercitar la coordinación de todos estos elementos conjuntamente, tu comunicación y oratoria mejorarán mientras te diviertes y entretienes al público.</p>
            </div>
            <div>
            
            {/* <picture className="sm:hidden">
                 <source srcSet="./img/header1-m.png" type="image/avif" />
                 <source srcSet="./img/header1-m.png" type="image/webp" />
                 <img loading="lazy" src="./img/header1-m.png" alt="Curso de Magia"  />
            </picture>
            <picture className="sm:hidden">
                 <source srcSet="./img/headtop.png" type="image/avif" />
                 <source srcSet="./img/headtop.png" type="image/webp" />
                 <img loading="lazy" src="./img/header1-m.png" alt="Curso de Magia"  />
            </picture> */}
       
        
           
        
              </div>
            
        </div>
      
    )
}

export default Ilusionismo
