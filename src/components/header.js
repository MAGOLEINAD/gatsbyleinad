import React from "react"

export const Header = () => {
    return (

        <div className=" container justify-center text-center items-end  flex ">
           
           <h1 className="text-gray-100 text-3xl sm:text-5xl antialiased text-shadow-xl  mlg:text-2x1 uppercase font-semibold absolute top-auto left-auto msm:mt-80 msm: mb-12 text-center msm:text-4xl ">Circulo Magico 
           <div className="text-2xl sm:text-4xl antialiased uppercase italic msm:mt-0 mt-3 text-red-800  mlg:text-2xl msm:text-lg msm:font-medium msm:tracking-normal">Escuela de Magia e Ilusionismo</div></h1>
               <picture className="msm:hidden">
                 <source srcSet="../images/slides/cartas.avif" type="image/avif" />
                 <source srcSet="../images/slides/cartas.webp" type="image/webp" />
                 <img src="../images/slides/cartas.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
              <picture className="  sm:hidden ">
                <source srcSet="../images/slides/cartas_mobile.avif" type="image/avif" />
                 <source srcSet="../images/slides/cartas_mobile.webp" type="image/webp" />
                 <img src="../images/slides/cartas_mobile.jpg" alt="Escuela de Magia e Ilusionismo"  />
              </picture>
            </div>
       
    )
}



export default Header

