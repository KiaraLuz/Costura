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
        <form action="https://formsubmit.co/fernandezperezkiara@gmail.com" method="POST">
          <label>Nombres: </label>
          <input type="text" placeholder="Ingrese su nombre..." name="Nombres" required/>
          <label>Apellidos: </label>
          <input type="text" name="apellido" placeholder='Ingrese su apellido' required/>
          <label>Correo: </label>
          <input type="email" name="email" placeholder='correo@correo.com' required/>
          <label>Motivo de contacto: </label>
          <textarea type="text" name="motivo" placeholder='Motivo de contacto' required/>
          <button type='submit'>Enviar</button>
        </form>
      </div>
      <div>
      <img src='https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png'/>
      </div>
    </div>
  )
}
