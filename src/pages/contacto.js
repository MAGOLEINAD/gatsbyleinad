
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import { Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup'

export default function Contacto () {

  const formularioSchema = Yup.object().shape({  
  nombre: Yup.string()
  .min(3,'El nombre es muy corto')
  .max(20,'El nombre es muy largo')
  .required ('Completa tu Nombre'),
  email:Yup.string()
  .email('E-Mail no válido')
  .required ('Completa tu E-Mail'),
  telefono:Yup.number()
  .typeError('Número no válido'),
  mensaje:'',
})

    return (
    <div>
    <Layout>
      <main className='mt-10 '>
        <div className='grid grid-cols-2 gap-6 content-center container '>
        <StaticImage 
             src='../images/contacto.jpg' 
             className=''
             width={1650}
             height={1050}
             alt='contactate'
             placeholder='dominantColor'
          />
          <div>
          <h1 className='text-5xl mb-3 font-extralight '>Contacto</h1>
          <p className='font-normal mb-10'>Averiguá cuando inicia el próximo curso para Principiantes.</p>
          <Formik 
          initialValues={{
            nombre:'',
            email:'',
            telefono:'',
            mensaje:'',
          }}
          onSubmit={(valores) => {console.log(valores)}}
          validationSchema={formularioSchema}

          >
            {()=> (
          <Form>
            <label 
            htmlFor='nombre'
            className='block my-2 '>Nombre</label>
            <Field 
              id='nombre'
              type='text'
              placeholder='Tu nombre'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2  placeholder-gray-700 text-black pr-2' 
              name='nombre'
            />
        <ErrorMessage name="nombre" component="div" className="text-red-500" />
           
                    <label 
            htmlFor='email'
            className='block my-2'>E-Mail</label>
            <Field 
              id='email'
              type='text'
              placeholder='Tu E-Mail'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black' 
              name='email'
            />
             <ErrorMessage name="email" component="div" className="text-red-500" />
                    <label 
            htmlFor='telefono'
            className='block my-2'>Whats App</label>
            <Field 
              id='telefono'
              type='text'
              placeholder='Tu Teléfono'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black ' 
              name='telefono'
            />
             <ErrorMessage name="telefono" component="div" className="text-red-500" />
                    <label 
            htmlFor='mensaje'
            className='block my-2'>Mensaje</label>
            <Field 
              as='textarea'
              id='mensaje'
              placeholder='Escribe Aquí'
              className='rounded-md msm:w-11/12 w-3/4 py-1.5 p-2 placeholder-gray-700 text-black' 
              name='mensaje'
            />
             <ErrorMessage name="mensaje" component="div" className="text-red-500" />

            <input 
            type='submit'
            className='bg-red-800 msm:w-11/12 w-3/4 p-2 rounded-md uppercase font-semibold cursor-pointer hover:bg-red-900 transition-all'
            value='Enviar'
            />
          </Form>
          )}
          </Formik>
          </div>
        
        </div>

      </main>
    </Layout>
    
   
    </div>
)
    }


