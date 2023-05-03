import { Menu } from "@mui/icons-material"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { navlink } from "../data/dummydata"
import logo from "../../Td.png"
import { positions } from "@mui/system"

export const Header = () => {
  const [responsive, setResponsive] = useState(false)
  return (
    <>
      <header>
        <div className='container flexsb'>
          <div className='logo'
            style={{
              width : "42px",
              height : "42px",
              marginTop : "14px",
              position : "relative"
            }} 
          >
            <img src={logo} alt='' data-aos='zoom-in-right'
              style={{
                position : "absolute",
                height : "100%",
                width : "100%"
              }}
            />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <Link to={links.url} key={i} data-aos='zoom-in-left'>
                {links.text}
              </Link>
            ))}
          </div>
          <button className='toggle' onClick={() => setResponsive(!responsive)}>
            <Menu className='icon' />
          </button>
        </div>
      </header>
    </>
  )
}
