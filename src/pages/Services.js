import React from 'react'
import { services } from "../style/services.css"

export const Services = () => {

  const servicios = [
    {
      name:"Servicio 1",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      descripcion: "Descripcion del servicio"
    },
    {
      name:"Servicio 2",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      descripcion: "Descripcion del servicio"
    },
    {
      name:"Servicio 3",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      descripcion: "Descripcion del servicio"
    }
  ]

  return (
    <div className='services'>
      <h1>Nuestros servicios</h1>
      <div className='cards_services'>
        {
          servicios.map((item, index) => (
            <div className='card_service' key={index}>
              <div className='text_service'>
                <h2>{item.name}</h2>
                <p>Descripcion: {item.descripcion}</p>
              </div>
              <div className='imagen'>
                <img src={item.img} alt="servicio" />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
