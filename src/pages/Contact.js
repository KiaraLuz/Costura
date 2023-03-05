import React from 'react'
import { contact } from "../style/contact.css"

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='redes'>
        <h1>Nuestras redes sociales</h1>
        
        <div className='redes_sociales'>
          <a>Red social 1</a>
          <a>Red social 2</a>
          <a>Red social 3</a>
        </div>

        <p>O escríbenos a nuestro WhatsApp <a>aquí</a> </p>

        <p>O envíanos un correo</p>
        <form>
          <label>Nombres: </label>
          <input type="text" name="nombre" id="name" placeholder='Ingrese su nombre' />
          <label>Apellidos: </label>
          <input type="text" name="apellido" id="apellido" placeholder='Ingrese su apellido' />
          <label>Correo: </label>
          <input type="email" name="email" id="email" placeholder='correo@correo.com' />
          <label>Motivo de contacto: </label>
          <textarea type="text" name="motivo" id="motivo" placeholder='Motivo de contacto' />
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <div>
      <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
      </div>
    </div>
  )
}
