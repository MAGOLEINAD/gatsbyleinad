import React from "react"

const Google = () => {
    return (
        <div className="msm:p-4  container items-center justify-center gap-3 grid grid-cols-2-[1fr_2fr] grid-flow-col p-12 mt-10 msm:mt-0 border  border-slate-400">
            <i className="fab fa-google-plus text-7xl text-white "></i>
            <div>
            <h3 className="msm:text-lg text-white font-semibold text-center   text-2xl ">Reseñas del <a href="https://g.page/escuelademagiaeilusionismo/"><span className="text-red-500 "> Círculo Mágico en Google</span></a>, todas de 5 estrellas.</h3>
            <p className="msm:hidden uppercase text-slate-500 tracking-wider font-medium mt-4  text-center  ">La magia es la mas bella forma de entretenimiento que el mundo ha conocido.</p>
            </div>
            
        </div>

    )
}

export default Google
