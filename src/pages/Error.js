import React from 'react'
import { Link } from 'react-router-dom'
import { error } from "../style/error.css"

export const Error = () => {
  return (
    <div className="error">
        <h1 className="texto">Error 404</h1>
        <p>Esta página no existe</p>
        <strong><a><Link to="/">Volver al inicio</Link></a></strong>
    </div>
  )
}