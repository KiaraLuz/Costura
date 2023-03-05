import React from 'react'
import { home } from "../style/home.css"

export const Home = () => {
  return (
    <div className='home'>
      <div className='texto_home'>
        <h1>Servicio de costura</h1>
        <h1>con más de tres años</h1>
        <h1>de experiencia</h1>
        <br />
        <h3>Envíos a nivel nacional</h3>
      </div>
      <div>
        <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
      </div>
    </div>
  )
}
