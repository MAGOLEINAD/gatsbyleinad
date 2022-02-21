import React from "react"
const TresCajasGrid = () => {
    return (
        
        // <div className=" container flex gap-10 text-center justify-center  bg-white">
        <section className=""> 
          <div className="msm:hidden container rounded-md py-10 grid gap-10  grid-cols-3 text-center bg-[url('../images/cubiletes.jpg')] bg-cover   bg-no-repeat bg-center">
              
                  <div className="ml-4 bg-white rounded-lg py-10  px-2 ">
                  <h2 className="text-black uppercase text-3xl mb-2">Clases de Magia </h2> 
                  <p className="text-black px-2     ">Crearás <strong>experiencias inolvidables</strong>. Las clases se dictan 
                    una vez por semana. Enseñanza personalizada y eficiente.  Estudiá los secretos de la magia.
                  </p>
                  </div>

                  <div className=" rounded-lg py-10 bg-white px-2 ">
                  <h2 className="text-black uppercase  text-3xl mb-2">Escuela de Magia </h2> 
                  <p className="text-black px-2 ">Aprenderás magia de cerca, de salón y escena,  cartomagia, presentación mágica, <strong>psicología</strong>, 
                  magia humorística, mentalismo y manipulación. </p>
                  </div>
            
                  <div  className="mr-4 rounded-lg py-10 bg-white px-2   ">
                  <h2 className="text-black uppercase  text-3xl  mb-2 ">Curso de Magia </h2> 
                  <p className="text-black px-2 ">Se divide en <strong>5 Niveles</strong>, cada nivel dura un Cuatrimestre.
                   Brindamos <strong>apuntes</strong> de las clases al aprender magia.
                  Conferencias para magos avanzados.</p>
                  </div>
          

          </div>
        </section>
    )
}

export default TresCajasGrid