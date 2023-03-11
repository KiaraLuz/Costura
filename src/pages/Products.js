import React from 'react'
import { products } from "../style/products.css"

export const Products = () => {
  
  const productos = [
    {
      name:"Producto 1",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 2",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 3",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 4",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 5",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 6",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 7",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 8",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
    {
      name:"Producto 9",
      img:"https://images.vexels.com/media/users/3/211144/isolated/preview/a90bd37fe3629669b3cb03419a73bbc8-maquina-de-coser-vintage-plana.png",
      precio: "0.00 - 0.00 soles"
    },
  ]

  return (
    <div className='products'>
      <h1>Nuestros productos</h1>
      <br />
      <div className='cards'>
        {
          productos.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <div className='imagen'>
                <img src= {item.img} alt="producto" />
              </div>
              <p>Descripcion: </p>
              <p>Costo: {item.precio}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
