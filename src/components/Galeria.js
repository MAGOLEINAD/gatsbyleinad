import { StaticImage } from "gatsby-plugin-image"
import React from "react"





//Agarra el CSS desde gastbybrowser o bien desde aca.

export const Galeria = () => {
  return (
    <>  

          <h3 className="text-white text-center text-3xl  uppercase my-10">
              escuela y tienda
          </h3>
          <div id="app">
  {/* <!-- Carousel slider --> */}
  <div className="carousel-slider">
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          {/* <!-- elements with  "carousel-slider-animate-opacity" className will have animated opacity --> */}
          <div className="carousel-slider-animate-opacity">
          
          <StaticImage 
          src='../images/escuelamagia1.jpg' 
          width={1040}
          height={760}
          alt='curso de magia'
          placeholder='tracedSVG'
          />
            
            <div className="slide-content">
              <h2>Curso de Magia</h2>
              <p>Nunca repitas un juego en la misma sesión.</p>
            </div>
          </div>

        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia2.jpg' 
          width={1040}
          height={760}
          alt='clase de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Levitación de Alumno</h2>
              <p>Y así mantengo, mi capacidad de asombro...</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia3.jpg' 
          width={1040}
          height={760}
          alt='clase de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Magia de cerca</h2>
              <p>En Close Up las manos trabajan a centímetros de distancia.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia4.jpg' 
          width={1040}
          height={760}
          alt='aprender magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Sombras</h2>
              <p>Clase de Sombras Chinas y Bola Zombie</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia5.jpg' 
          width={1040}
          height={760}
          alt='trucos de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Magia y Ritmo</h2>
              <p>Aprendiendo a manejar el ritmo en la magia.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia6.jpg' 
          width={1040}
          height={760}
          alt='profesor de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Entrega de Diplomas</h2>
              <p>Un gran profesor no debe solo enseñar, sino motivar.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia7.jpg' 
          width={1040}
          height={760}
          alt='escuela de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Divirtiéndonos en Clase</h2>
              <p>Tu éxito como Mago depende de tu Personalidad.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia8.jpg' 
          width={1040}
          height={760}
          alt='magos'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Conferencia de Roberto</h2>
              <p>Ensayo para conseguir que una ilusión parezca realidad.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia9.jpg' 
          width={1040}
          height={760}
          alt='mago'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Evento de Cierre de Año</h2>
              <p>"Estaba tan cerca de mí, como yo de ti y no vi como lo hizo"</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia10.jpg' 
          width={1040}
          height={760}
          alt='instituto de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Gala de Fin de Año.</h2>
              <p>Gala de Alumnos del Círculo Mágico.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia11.jpg' 
          width={1040}
          height={760}
          alt='cursos de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Manipulación</h2>
              <p>Practica día a día. Practica delante del espejo, te verás a ti mismo como te ve el público.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia12.jpg' 
          width={1040}
          height={760}
          alt='tienda de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2 className="uppercase">Minimagos</h2>
              <p>Alumno Lucio, realizando un efecto de riesgo en vivo.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia13.jpg' 
          width={1040}
          height={760}
          alt='magia de cerca'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Jugando con Fuego</h2>
              <p>Alumnos soprendiéndose entre ellos antes de la clase.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia14.jpg' 
          width={1040}
          height={760}
          alt='taller de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Atención Personalizada</h2>
              <p>Atendiendo los pedidos mágicos en la tienda</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia15.jpg' 
          width={1040}
          height={760}
          alt='experiencia de magia'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Mágiko del Castillo</h2>
              <p>Magia y Humor en Círculo Mágico...</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia16.jpg' 
          width={1040}
          height={760}
          alt='leinad'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>LEINAD</h2>
              <p>Bienvenido al Círculo Mágico, no vas a querer salir...  </p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia17.jpg' 
          width={1040}
          height={760}
          alt='circulo magico'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Entrega de Diplomas</h2>
              <p>Un gran profesor no debe solo enseñar, sino motivar.</p>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="carousel-slider-animate-opacity">
          <StaticImage 
          src='../images/escuelamagia18.jpg' 
          width={1040}
          height={760}
          alt='entrega de diplomas'
          placeholder='tracedSVG'
          />
            <div className="slide-content">
              <h2>Tienda de Magia</h2>
              <p>El mago utiliza el misterio que a su vez depende del secreto. <br/>Tienda de Magia e Ilusionismo en Felipe Vallese 1387</p>
            </div>
          </div>
        </div>
       
        
      </div>
    </div>
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
    <div className="swiper-pagination"></div>
  </div>
</div>


      </>
     
  )
}



export default Galeria


