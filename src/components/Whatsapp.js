import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
 faWhatsapp,
 
} from '@fortawesome/free-brands-svg-icons'

const Whatsapp = () => {
  return <div>
    <div className=' fixed right-6 bottom-6 mx-1 pb-1	'>
 
    <a href="https://api.whatsapp.com/send?phone=541152638510&text=Hola!&source=&data=" aria-label="WhatsApp"> <div className="flex bg-green-700 rounded-full text-white h-[3.3rem] w-[3.3rem] items-center justify-center">
    <FontAwesomeIcon icon={faWhatsapp} className=' text-4xl ' />
     </div></a>
     </div>
  </div>;
};

export default Whatsapp;
