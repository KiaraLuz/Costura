import React, { Children, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { sidebar } from "../style/sidebar.css"

export const Sidebar = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 425);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = () => {
    if (isSmall) {
      return isOpen ? "100%" : "50px";
    } else {
      return isOpen ? "160px" : "50px";
    }
  };

  const contentDisplay = () => {
    if (isSmall) {
      return isOpen ? "none" : "block";
    }
  }

  const menuItem = [
    {
      path:"/",
      name:"Inicio",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25694.png"
    },
    {
      path:"/productos",
      name:"Productos",
      icon: "https://images.vexels.com/media/users/3/142546/isolated/preview/2f6d0faa355125320122dc57e8b07084-icono-de-camiseta.png"
    },
    {
      path:"/servicios",
      name:"Servicios",
      icon: "https://www.publicdomainpictures.net/pictures/310000/t2/sewing-machine-retro-vintage.png"
    },
    {
      path:"/contacto",
      name:"Contacto",
      icon: "https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png"
    },
  ]

  return (
    <div className='container'>
      <div style={{ width: sidebarWidth() }} className='sidebar'>
        <div className='top_section'>
          <div className='bars'>
            <img src='https://cdn-icons-png.flaticon.com/512/56/56763.png' onClick={toggle}/>
          </div>
        </div>
        {
          menuItem.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassName="active">
              <div className='icon'><img src={item.icon} /></div>
              <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      <main style={{marginLeft: isOpen ? "180px" : "50px", display: contentDisplay() } } >{children}</main>
    </div>
  )
}