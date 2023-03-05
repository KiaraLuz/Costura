import React from 'react'
import { services } from "../style/services.css"

export const Services = () => {
  return (
    <div className='services'>
      <h1>Nuestros servicios</h1>
      <br />
      <div className='cards_services'>
        <div className='card_service'>
          <div className='text_service'>
            <h2>Servicio 1</h2>
            <p>Descripcion: </p>
          </div>
          <div className='imagen'>
            <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
          </div>
        </div>

        <div className='card_service'>
          <div className='text_service'>
            <h2>Servicio 2</h2>
            <p>Descripcion: </p>
          </div>
          <div className='imagen'>
            <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
          </div>
        </div>

        <div className='card_service'>
          <div className='text_service'>
            <h2>Servicio 3</h2>
            <p>Descripcion: </p>
          </div>
          <div className='imagen'>
            <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
          </div>
        </div>
      </div>
    </div>
  )
}
